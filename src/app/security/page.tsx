import type { Metadata } from 'next';
import Security from '@/views/Security';

export const metadata: Metadata = {
  title: 'Segurança — Fifteen Miles',
  description: 'Conheça a nossas medidas de segurança com o seus dados.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/security',
  },
};

export default function ProductsPage() {
  return <Security />;
}
