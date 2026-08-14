'use client';

import React from 'react';

export type ProductData = {
  id: string;
  name: string;
  description: string;
};

type Props = {
  product: ProductData | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProductModal({ product, isOpen, onClose }: Props) {
  if (!isOpen || !product) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="bg-white p-8 rounded-2xl max-w-lg w-full text-[#0F0E0C]">
        <h2 className="text-2xl font-serif mb-4">{product.name}</h2>
        <p className="text-sm mb-6">{product.description}</p>
        <button onClick={onClose} className="px-6 py-2 bg-black text-white text-xs uppercase tracking-wider rounded-md">Fechar</button>
      </div>
    </div>
  );
}
