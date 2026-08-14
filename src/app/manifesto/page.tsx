import type { Metadata } from 'next';
import Manifesto from '@/views/Manifesto';

export const metadata: Metadata = {
  title: 'Manifesto — Fifteen Miles',
  description: 'Manifesto da Fifteen Miles: princípios, crenças e visão sobre construção de software duradouro.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/manifesto',
  },
};

export default function ManifestoPage() {
  return <Manifesto />;
}
