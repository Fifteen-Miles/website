import type { Metadata } from 'next';
import Team from '@/views/Team';

export const metadata: Metadata = {
  title: 'Nosso Time — Fifteen Miles',
  description: 'Conheça a galera que contribui para que a Fifteen Miles cresça cada vez mais.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/team',
  },
};

export default function ProductsPage() {
  return <Team />;
}
