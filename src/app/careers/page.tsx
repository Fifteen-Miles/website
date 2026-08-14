import type { Metadata } from 'next';
import Careers from '@/views/Careers';

export const metadata: Metadata = {
  title: 'Carreiras — Fifteen Miles',
  description: 'Vagas e oportunidades na Fifteen Miles. Junte-se à nossa ordem de engenheiros.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/careers',
  },
};

export default function CareersPage() {
  return <Careers />;
}
