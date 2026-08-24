import type { Metadata } from 'next';
import Changelog from '@/views/Changelog';

export const metadata: Metadata = {
  title: 'Changelog — Fifteen Miles',
  description: 'Confira o histórico de mudanças da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/changelog',
  },
};

export default function ProductsPage() {
  return <Changelog />;
}
