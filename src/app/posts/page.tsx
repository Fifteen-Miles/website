import type { Metadata } from 'next';
import Posts from '@/views/Posts';

export const metadata: Metadata = {
  title: 'Posts — Fifteen Miles',
  description: 'Admin to post.',
  alternates: {
    canonical: 'https://www.fifteenmiles.tech/posts',
  },
};

export default function ProductsPage() {
  return <Posts />;
}
