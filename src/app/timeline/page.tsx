import type { Metadata } from 'next';
import Timeline from '@/views/Timeline';

export const metadata: Metadata = {
  title: 'Linha do Tempo — Fifteen Miles',
  description: 'Conheça a linha do tempo de eventos e ações que a Fifteen Miles tomou ao longo de sua jornada.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/timeline',
  },
};

export default function ProductsPage() {
  return <Timeline />;
}
