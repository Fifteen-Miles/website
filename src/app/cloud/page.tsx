import type { Metadata } from 'next';
import Cloud from '@/views/Cloud';

export const metadata: Metadata = {
  title: 'Nuvem — Fifteen Miles',
  description: 'Cheque a infraestrutura de nuvem da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/cloud',
  },
};

export default function ProductsPage() {
  return <Cloud />;
}
