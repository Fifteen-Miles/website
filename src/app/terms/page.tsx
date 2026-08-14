import type { Metadata } from 'next';
import Terms from '@/views/Terms';

export const metadata: Metadata = {
  title: 'Termos — Fifteen Miles',
  description: 'Termos de serviço e compromissos da Fifteen Miles com continuidade e disponibilidade.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/terms',
  },
};

export default function TermsPage() {
  return <Terms />;
}
