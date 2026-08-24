import type { Metadata } from 'next';
import Culture from '@/views/Culture';

export const metadata: Metadata = {
  title: 'Cultura — Fifteen Miles',
  description: 'Cheque a cultura organizacional da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/culture',
  },
};

export default function ProductsPage() {
  return <Culture />;
}
