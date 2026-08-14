import type { Metadata } from 'next';
import Atlas from '@/views/Atlas';

export const metadata: Metadata = {
  title: 'Atlas — Fifteen Miles',
  description: 'Atlas: plataforma operacional para centralizar pessoas, processos e dados em uma única interface.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/atlas',
  },
};

export default function AtlasPage() {
  return <Atlas />;
}
