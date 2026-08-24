import type { Metadata } from 'next';
import Apis from '@/views/Apis';

export const metadata: Metadata = {
  title: 'APIs — Fifteen Miles',
  description: 'Confira a infraestrutura de APIs da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/apis',
  },
};

export default function ProductsPage() {
  return <Apis />;
}
