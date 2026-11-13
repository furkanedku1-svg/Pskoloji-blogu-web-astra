/**
 * SİTE AYARLARI
 * ------------------------------------------------------------
 * Ad, unvan, iletişim ve sosyal medya bilgileri burada toplanır.
 * Sitenin her yerinde (menü, alt bilgi, ana sayfa) bu dosyadan okunur.
 * Bir bilgiyi değiştirmek için sadece burayı düzenlemeniz yeterli.
 */

export const site = {
  /** Menüde ve alt bilgide büyük harflerle görünen ad */
  name: 'Büşra',
  /** Adın altında küçük harflerle görünen unvan */
  title: 'Psikolog',
  /** Hakkımda kısmında kullanılan kısa tanım */
  description: 'Psikoloji üzerine sade ve anlaşılır yazılar.',

  city: 'İstanbul',
  email: 'merhaba@ornek.com',

  instagram: {
    handle: '@kullaniciadi',
    url: 'https://www.instagram.com/kullaniciadi',
  },
  youtube: {
    handle: '@kanaladi',
    url: 'https://www.youtube.com/@kanaladi',
  },

  // Videolar artık src/content/videos/videolar.yaml dosyasında.
};

/**
 * Blog sayfasındaki kategori düğmeleri (bu sırayla görünür).
 * Yazılarda bu listede olmayan bir kategori kullanırsanız
 * o kategori de otomatik olarak düğmelere eklenir.
 */
export const blogCategories = ['Kaygı', 'İlişkiler', 'Günlük Yaşam', 'Kişisel Gelişim'];

/** Menü bağlantıları (üst menü ve alt bilgi) */
export const navLeft = [
  { label: 'Anasayfa', href: '/' },
  { label: 'Hakkımda', href: '/hakkimda' },
  { label: 'Blog', href: '/blog' },
];

export const navRight = [
  { label: 'Videolar', href: '/videolar' },
  { label: 'İletişim', href: '/iletisim' },
];
