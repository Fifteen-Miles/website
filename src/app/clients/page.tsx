import type { Metadata } from 'next';
import Clients from '@/views/Clients';

export const metadata: Metadata = {
  title: 'Clientes — Fifteen Miles',
  description: 'Confira os cases de sucesso da Fifteen Miles.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/clients',
  },
};

export default function ProductsPage() {
  return <Clients />;
}
