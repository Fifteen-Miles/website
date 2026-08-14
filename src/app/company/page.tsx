import type { Metadata } from 'next';
import Company from '@/views/Company';

export const metadata: Metadata = {
  title: 'Sobre — Fifteen Miles',
  description: 'Quem somos: visão, origem e propósito da Fifteen Miles — plataformas empresariais duradouras.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/company',
  },
};

export default function CompanyPage() {
  return <Company />;
}
