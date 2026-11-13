import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog yazıları: src/content/blog klasöründeki her .md dosyası bir yazıdır.
 * Her yazının başında şu bilgiler olmalı:
 *
 * ---
 * baslik: "Yazının başlığı"
 * tarih: 2026-11-07
 * kategori: "Kaygı"
 * ozet: "Kartlarda görünen kısa özet."
 * kapak: "blog-kaygi.jpg"   (public/images içindeki dosya adı)
 * ---
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    baslik: z.string(),
    tarih: z.coerce.date(),
    kategori: z.string(),
    ozet: z.string(),
    kapak: z.string(),
  }),
});

/**
 * Videolar: src/content/videos/videolar.yaml dosyasındaki liste.
 * Her video için: id, baslik, aciklama, youtube, kapak, tarih.
 */
const videos = defineCollection({
  loader: file('src/content/videos/videolar.yaml'),
  schema: z.object({
    baslik: z.string(),
    aciklama: z.string(),
    youtube: z.string().url(),
    kapak: z.string(),
    tarih: z.coerce.date(),
  }),
});

export const collections = { blog, videos };
