import type { Metadata } from 'next';
import Products from '@/views/Products';

export const metadata: Metadata = {
  title: 'Produtos & Módulos — Fifteen Miles',
  description: 'Conheça os módulos e produtos da plataforma Atlas OS da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/products',
  },
};

export default function ProductsPage() {
  return <Products />;
}
