import type { Metadata } from 'next';
import Docs from '@/views/Docs';

export const metadata: Metadata = {
  title: 'Documentação — Fifteen Miles',
  description: 'Cheque a documentação e manual dos produtos da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/docs',
  },
};

export default function ProductsPage() {
  return <Docs />;
}
