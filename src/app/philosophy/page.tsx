import type { Metadata } from 'next';
import Philosophy from '@/views/Philosophy';

export const metadata: Metadata = {
  title: 'Filosofia — Fifteen Miles',
  description: 'Nossa filosofia: arquitetura, engenharia e permanência como princípios centrais.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/philosophy',
  },
};

export default function PhilosophyPage() {
  return <Philosophy />;
}
