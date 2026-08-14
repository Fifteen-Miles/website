import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contato — Fifteen Miles',
  description: 'Fale com a Fifteen Miles: parcerias, demonstrações e consultas institucionais.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
