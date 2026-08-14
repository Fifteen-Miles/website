'use client';

import { useCallback, useRef, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { UploadCloud, X, Loader2, ImageOff, Link2 } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

const BUCKET = 'blog-images';
const MAX_SIZE_MB = 8;

export default function ImageUploader({ value, onChange, label = 'Imagem de Capa' }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const [manualMode, setManualMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    setError('');

    if (!file.type.startsWith('image/')) {
      setError('Envie apenas arquivos de imagem.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Arquivo excede o limite de ${MAX_SIZE_MB}MB.`);
      return;
    }

    setUploading(true);

    const ext = file.name.split('.').pop();
    const safeName = file.name
      .replace(/\.[^/.]+$/, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .slice(0, 40);
    const path = `posts/${Date.now()}-${safeName}.${ext}`;

    const { error: uploadError } = await supabase.storage.from(BUCKET).upload(path, file, {
      cacheControl: '3600',
      upsert: false,
    });

    if (uploadError) {
      setError('Falha no envio: ' + uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
    onChange(data.publicUrl);
    setUploading(false);
  }, [onChange]);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }, [handleFile]);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="block text-[10px] uppercase tracking-wider text-[#706C64] font-medium">{label}</label>
        <button
          type="button"
          onClick={() => setManualMode((m) => !m)}
          className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#8C7355] hover:text-[#0F0E0C] transition-colors"
        >
          <Link2 className="w-3 h-3" />
          <span>{manualMode ? 'Enviar arquivo' : 'Colar URL'}</span>
        </button>
      </div>

      {manualMode ? (
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://images.unsplash.com/..."
          className="w-full px-4 py-3.5 rounded-xl border border-[#0F0E0C]/20 bg-[#FAF8F5] text-sm focus:outline-none focus:border-[#0F0E0C]"
        />
      ) : value ? (
        <div className="relative group rounded-xl overflow-hidden border border-[#0F0E0C]/15">
          <img src={value} alt="Prévia da capa" className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-[#0F0E0C]/0 group-hover:bg-[#0F0E0C]/40 transition-colors flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="px-4 py-2 bg-[#FAF8F5] text-[#0F0E0C] rounded-lg text-xs uppercase tracking-wider font-medium hover:bg-white"
            >
              Substituir
            </button>
            <button
              type="button"
              onClick={() => onChange('')}
              className="p-2 bg-[#FAF8F5] text-[#0F0E0C] rounded-lg hover:bg-red-50 hover:text-red-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`w-full h-56 rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-3 cursor-pointer transition-colors ${
            dragActive ? 'border-[#8C7355] bg-[#8C7355]/5' : 'border-[#0F0E0C]/20 bg-[#FAF8F5] hover:border-[#0F0E0C]/40'
          }`}
        >
          {uploading ? (
            <>
              <Loader2 className="w-6 h-6 text-[#8C7355] animate-spin" />
              <span className="text-xs text-[#706C64] uppercase tracking-wider">Enviando imagem...</span>
            </>
          ) : (
            <>
              <UploadCloud className="w-6 h-6 text-[#706C64]" />
              <div className="text-center">
                <span className="text-xs text-[#0F0E0C] block">Arraste uma imagem ou clique para selecionar</span>
                <span className="text-[10px] text-[#706C64] uppercase tracking-wider">JPG, PNG ou WEBP · até {MAX_SIZE_MB}MB</span>
              </div>
            </>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
          />
        </div>
      )}

      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-red-700">
          <ImageOff className="w-3.5 h-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}