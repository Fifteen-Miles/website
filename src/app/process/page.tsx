import type { Metadata } from 'next';
import Process from '@/views/Process';

export const metadata: Metadata = {
  title: 'Processo — Fifteen Miles',
  description: 'Metodologia de engenharia: identificação, projeto, construção e observabilidade.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/process',
  },
};

export default function ProcessPage() {
  return <Process />;
}
