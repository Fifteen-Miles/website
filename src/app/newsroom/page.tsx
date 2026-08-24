import type { Metadata } from 'next';
import Newsroom from '@/views/Newsroom';

export const metadata: Metadata = {
  title: 'Notas Oficiais — Fifteen Miles',
  description: 'Cheque as notas oficiais da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/newsroom',
  },
};

export default function ProductsPage() {
  return <Newsroom />;
}
