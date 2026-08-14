export interface Post {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  content: string;
  tag: string;
  image: string;
  author: string;
  date: string;
  displayDate: string;
  readTime: string;
  created_at?: string;
}

const MONTHS_PT = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

export function slugify(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return '';
  return `${day} de ${MONTHS_PT[month - 1]} de ${year}`;
}

export function stripInlineStyles(html: string): string {
  if (typeof window === 'undefined') return html;
  const doc = new DOMParser().parseFromString(html, 'text/html');
  doc.body.querySelectorAll('*').forEach((el) => {
    el.removeAttribute('style');
    el.removeAttribute('class');
    if (el.tagName === 'SPAN' && el.attributes.length === 0) {
      el.replaceWith(...Array.from(el.childNodes));
    }
  });
  return doc.body.innerHTML;
}

export function calcReadTime(html: string): string {
  const plainText = html.replace(/<[^>]*>/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min de leitura`;
}

export const EMPTY_POST: Omit<Post, 'id' | 'created_at'> = {
  title: '',
  slug: '',
  summary: '',
  description: '',
  content: '',
  tag: 'Engenharia',
  image: '',
  author: 'Nathanael Secundo Cardoso',
  date: new Date().toISOString().split('T')[0],
  displayDate: formatDisplayDate(new Date().toISOString().split('T')[0]),
  readTime: '5 min de leitura',
};

export const TAGS = ['Engenharia', 'Infraestrutura', 'Governança', 'Estratégia', 'Produto'];