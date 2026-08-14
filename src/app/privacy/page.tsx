import type { Metadata } from 'next';
import Privacy from '@/views/Privacy';

export const metadata: Metadata = {
  title: 'Privacidade — Fifteen Miles',
  description: 'Política de privacidade da Fifteen Miles. Como tratamos dados corporativos e pessoais.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
