import type { Metadata } from 'next';
import Roadmap from '@/views/Roadmap';

export const metadata: Metadata = {
  title: 'Roadmap — Fifteen Miles',
  description: 'Conheça os próximos passos da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/roadmap',
  },
};

export default function ProductsPage() {
  return <Roadmap />;
}
