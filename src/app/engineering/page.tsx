import type { Metadata } from 'next';
import Engineering from '@/views/Engineering';

export const metadata: Metadata = {
  title: 'Engenharia — Fifteen Miles',
  description: 'Princípios e práticas de engenharia da Fifteen Miles — software projetado para durar décadas.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/engineering',
  },
};

export default function EngineeringPage() {
  return <Engineering />;
}
