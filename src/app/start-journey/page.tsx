import type { Metadata } from 'next';
import StartJourney from '@/views/StartJourney';

export const metadata: Metadata = {
  title: 'Iniciar Jornada — Fifteen Miles',
  description: 'Conheça nossos produtos e inicie a jornada com a Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/start-journey',
  },
};

export default function StartJourneyPage() {
  return <StartJourney />;
}
