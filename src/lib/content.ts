import { getCollection, type CollectionEntry } from 'astro:content';
import { blogCategories } from '../site.config';

export type Post = CollectionEntry<'blog'>;
export type Video = CollectionEntry<'videos'>;

/** Blog sayfasında her sayfada gösterilecek yazı sayısı */
export const POSTS_PER_PAGE = 9;

/** "Günlük Yaşam" -> "gunluk-yasam" */
export function slugify(text: string): string {
  const map: Record<string, string> = { ç: 'c', ğ: 'g', ı: 'i', i: 'i', ö: 'o', ş: 's', ü: 'u' };
  return text
    .toLocaleLowerCase('tr-TR')
    .replace(/[çğıiöşü]/g, (ch) => map[ch] ?? ch)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Tüm yazılar, en yeniden eskiye */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.tarih.valueOf() - a.data.tarih.valueOf());
}

/** Tüm videolar, en yeniden eskiye */
export async function getVideos(): Promise<Video[]> {
  const videos = await getCollection('videos');
  return videos.sort((a, b) => b.data.tarih.valueOf() - a.data.tarih.valueOf());
}

/** Kategori listesi: ayar dosyasındakiler + yazılarda geçen diğerleri */
export function getCategories(posts: Post[]): { label: string; slug: string }[] {
  const labels = [...blogCategories];
  for (const p of posts) if (!labels.includes(p.data.kategori)) labels.push(p.data.kategori);
  return labels.map((label) => ({ label, slug: slugify(label) }));
}

/** Bir listeyi sayfalara böler: [[1. sayfa], [2. sayfa], ...] */
export function chunk<T>(items: T[], size = POSTS_PER_PAGE): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages.length ? pages : [[]];
}

/** 7 Kasım 2026 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
