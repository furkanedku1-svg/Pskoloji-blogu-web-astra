# Site Nasıl Kullanılır?

Bu dosya, siteye yeni içerik eklemek ve bilgileri değiştirmek için gereken her şeyi anlatır.
Kod bilmenize gerek yok; sadece birkaç metin dosyasını düzenleyeceksiniz.

---

## Siteyi bilgisayarda açmak

1. Proje klasöründe bir terminal açın.
2. İlk sefer için bir kez: `npm install`
3. Siteyi başlatmak için: `npm run dev`
4. Tarayıcıda **http://localhost:4321** adresine gidin.

Sunucu açıkken yaptığınız değişiklikler sayfayı yenileyince görünür.
Sunucuyu kapatmak için terminalde `Ctrl + C`'ye basın.

> Video listesinde ya da `src/content.config.ts` dosyasında değişiklik yaptıktan sonra
> bir değişiklik görünmezse sunucuyu kapatıp `npm run dev` ile yeniden başlatın.

Yayına almak için `npm run build` komutu siteyi `dist` klasörüne hazırlar.

---

## 1. Ad ve iletişim bilgilerini değiştirmek

Hepsi tek bir dosyada: **`src/site.config.ts`**

| Ne                | Satır                                  |
| ----------------- | -------------------------------------- |
| Ad                | `name: 'Büşra'`                        |
| Unvan             | `title: 'Psikolog'`                    |
| Şehir             | `city: 'İstanbul'`                     |
| E-posta           | `email: 'merhaba@ornek.com'`           |
| Instagram         | `instagram:` altındaki `handle` ve `url` |
| YouTube kanalı    | `youtube:` altındaki `handle` ve `url`   |

Sadece tırnak işaretlerinin **içini** değiştirin. Burada yaptığınız değişiklik menüde, alt bilgide,
ana sayfada ve iletişim sayfasında otomatik olarak güncellenir.

Aynı dosyadaki `blogCategories` listesi, Blog sayfasındaki kategori düğmelerinin sırasını belirler.

**Hakkımda sayfasının metni** (tanıtım paragrafları, eğitim, ilgi alanları, sertifikalar):
`src/pages/hakkimda.astro` dosyasında. Listeler dosyanın en üstünde, paragraflar biraz aşağıda.
Sadece metinleri değiştirin, etraftaki işaretlere (`<p>`, `{`, `}` gibi) dokunmayın.

---

## 2. Yeni blog yazısı eklemek

1. **`src/content/blog`** klasörüne yeni bir dosya oluşturun. Adı yazının internet adresi olur:
   - Örnek: `stresle-bas-etmek.md` → sitede `/blog/stresle-bas-etmek`
   - Dosya adında Türkçe karakter, boşluk ve büyük harf kullanmayın; kelimeleri `-` ile ayırın.
2. Dosyanın en başına şu bilgileri yazın (iki `---` çizgisi dahil):

```markdown
---
baslik: "Stresle Baş Etmenin Küçük Yolları"
tarih: 2026-12-01
kategori: "Günlük Yaşam"
ozet: "Kartlarda ve arama sonuçlarında görünecek bir-iki cümlelik özet."
kapak: "blog-stres.jpg"
---

Yazının ilk paragrafı buraya.

## Ara başlık

Paragraflar arasında bir boş satır bırakın.

- Madde işaretli liste için satır başına tire koyun.
- **Kalın yazı** için iki yıldız, *italik* için tek yıldız kullanın.
```

**Dikkat edilecekler:**
- `tarih` mutlaka **YIL-AY-GÜN** biçiminde olmalı (`2026-12-01`). Yazılar bu tarihe göre en yeniden eskiye sıralanır.
- `kategori` mevcut kategorilerle **birebir aynı** yazılmalı: `Kaygı`, `İlişkiler`, `Günlük Yaşam`, `Kişisel Gelişim`.
  Yeni bir kategori yazarsanız, Blog sayfasına o kategori için otomatik olarak yeni bir düğme eklenir.
- `kapak` için fotoğrafı `public/images` klasörüne koyun ve adını buraya yazın (bkz. bölüm 4).
- Yazının sonundaki "Bu yazı genel bilgilendirme amaçlıdır..." notunu **siz yazmayın**; her yazının altına otomatik eklenir.

Yazı kaydedildiği anda ana sayfadaki "Blog" bölümünde (en yeni 3 yazı) ve Blog sayfasında görünür.
Blog sayfasında her sayfada 9 yazı gösterilir; daha fazlası olunca sayfa numaraları kendiliğinden çıkar.

**Bir yazıyı kaldırmak** için dosyasını silmeniz yeterli.

---

## 3. Yeni video eklemek

Tüm videolar tek bir listede: **`src/content/videos/videolar.yaml`**

Yeni video için listedeki bir bloğu kopyalayıp **en üste** yapıştırın ve bilgileri değiştirin:

```yaml
- id: stres-ve-beden
  baslik: "Stres Bedenimizi Nasıl Etkiler?"
  aciklama: "Bir-iki cümlelik kısa açıklama."
  youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
  kapak: "video-stres-ve-beden.jpg"
  tarih: 2026-12-05
```

**Dikkat edilecekler:**
- `id` her video için farklı olmalı (Türkçe karakter ve boşluk olmadan).
- `youtube` satırına videonun YouTube bağlantısını yapıştırın (YouTube'da videonun altındaki "Paylaş" düğmesinden kopyalayabilirsiniz).
- Satır başlarındaki boşluklar önemli: örnekteki hizalamayı koruyun (`-` ile başlayan satır, altındakiler iki boşluk içeride).
- `tarih` en yeni olan video, Videolar sayfasında ve ana sayfada **büyük** gösterilir.
  Ana sayfada en yeni video büyük, sonraki ikisi küçük görünür.

---

## 4. Fotoğraflar

- Bütün fotoğraflar **`public/images`** klasörüne konur.
- Hangi fotoğrafın hangi adla konacağının tam listesi: **`public/images/README.md`**
- Bir fotoğraf henüz yoksa, sitede yerinde soluk renkli bir kutu ve
  "Fotoğraf: dosya-adi.jpg" yazısı görünür. Fotoğrafı o adla klasöre koyduğunuzda kutu kendiliğinden fotoğrafa dönüşür.
- Dosya adı **birebir aynı** olmalı (küçük harf, Türkçe karakter yok, `.jpg` uzantısı).
  `.png` ya da `.webp` kullanmak isterseniz, ilgili yazının/videonun `kapak:` satırındaki adı da öyle değiştirin.
- Yüklemeden önce fotoğrafları küçültün (genişlik en fazla ~1600px, tercihen 300 KB altı). Site daha hızlı açılır.

---

## Sorun çıkarsa

- **Sayfa hata veriyor:** Genellikle bir yazının başındaki bilgilerden biri eksik ya da hatalı yazılmıştır
  (ör. tarih biçimi, kapanmamış tırnak işareti). Terminaldeki hata mesajı hangi dosya olduğunu söyler.
- **Fotoğraf görünmüyor:** Dosya adını ve uzantısını kontrol edin; `public/images` klasöründe olduğundan emin olun.
- **Yeni video görünmüyor:** `videolar.yaml` dosyasındaki girintileri kontrol edin, sonra sunucuyu yeniden başlatın.
