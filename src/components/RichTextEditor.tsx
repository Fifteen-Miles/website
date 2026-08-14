'use client';

import dynamic from 'next/dynamic';
import { useCallback, useMemo, useRef } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import '../styles/RichTextEditor.css';
import { supabase } from '@/lib/supabase';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const quillRef = useRef<any>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const editor = quillRef.current?.getEditor();
      const range = editor?.getSelection(true);
      const ext = file.name.split('.').pop();
      const path = `content/${Date.now()}.${ext}`;

      const { error } = await supabase.storage.from('blog-images').upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });

      if (error) {
        alert('Erro ao enviar imagem: ' + error.message);
        return;
      }

      const { data } = supabase.storage.from('blog-images').getPublicUrl(path);

      if (editor && range) {
        editor.insertEmbed(range.index, 'image', data.publicUrl, 'user');
        editor.setSelection(range.index + 1, 0);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, false] }],
          ['bold', 'italic', 'underline'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'link', 'image'],
          ['clean'],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [imageHandler]
  );

  const formats = ['header', 'bold', 'italic', 'underline', 'list', 'bullet', 'blockquote', 'link', 'image'];

  return (
    <div className="fm-editor">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Escreva o ensaio..."
      />
    </div>
  );
}