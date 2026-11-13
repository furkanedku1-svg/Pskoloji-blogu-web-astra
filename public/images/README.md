# Fotoğraf Listesi

Fotoğrafları bu klasöre (`public/images`) **aşağıdaki adlarla** koyun.
Dosya eklendiği anda sitede yer tutucu kutunun yerine kendiliğinden gerçek fotoğraf görünür.
(Geliştirme sunucusu açıksa sayfayı yenilemeniz yeterli.)

İpucu: Fotoğrafları yüklemeden önce küçültün (genişlik 1600px'i geçmesin, dosya boyutu tercihen 300 KB altında olsun).
Dosya adlarında büyük/küçük harf ve uzantı (`.jpg`) birebir aynı olmalı.

## Ana Sayfa

| Dosya adı                | Nerede                                  | Önerilen oran / boyut      |
| ------------------------ | --------------------------------------- | -------------------------- |
| `hero-buyuk.jpg`         | Karşılama, sağdaki büyük fotoğraf       | Dikey 4:5 (ör. 1200×1500)  |
| `hero-portre.jpg`        | Karşılama, sağ alttaki küçük portre     | Dikey 3:4 (ör. 600×800)    |
| `kutu-yazilar.jpg`       | Üç kutu – "Yazılar"                     | Dikey 4:5 (ör. 800×1000)   |
| `kutu-ilgi-alanlari.jpg` | Üç kutu – "İlgi Alanlarım" (uzun kutu)  | Dikey 2:3 (ör. 800×1240)   |
| `kutu-videolar.jpg`      | Üç kutu – "Videolar"                    | Dikey 4:5 (ör. 800×1000)   |
| `alinti-dikey.jpg`       | Alıntı bölümü, ortadaki dikey fotoğraf  | Dikey 2:3 (ör. 800×1200)   |

## Hakkımda Sayfası

| Dosya adı              | Nerede                                 | Önerilen oran / boyut     |
| ---------------------- | -------------------------------------- | ------------------------- |
| `hakkimda-portre.jpg`  | Soldaki büyük portre                   | Dikey 4:5 (ör. 1200×1500) |
| `hakkimda-alinti.jpg`  | Alttaki alıntı bölümü, dikey fotoğraf  | Dikey 2:3 (ör. 800×1200)  |

## İletişim Sayfası

| Dosya adı      | Nerede                          | Önerilen oran / boyut     |
| -------------- | ------------------------------- | ------------------------- |
| `iletisim.jpg` | İletişim kutularının yanındaki fotoğraf | Dikey 4:5 (ör. 1000×1250) |

## Video Kapakları

Hem ana sayfadaki video bölümünde hem Videolar sayfasında kullanılır.
Her videonun kapak dosyası `src/content/videos/videolar.yaml` içindeki `kapak:` satırında yazar.
Önerilen: yatay 16:9 (ör. 1280×720). YouTube'daki video küçük resmini kullanabilirsiniz.

| Dosya adı                       | Video                                          |
| ------------------------------- | ---------------------------------------------- |
| `video-kaygiyla-bas-etmek.jpg`  | Kaygıyla Baş Etmenin 5 Basit Yolu              |
| `video-sinir-koymak.jpg`        | Sınır Koymak Neden Önemli?                     |
| `video-sakin-sabahlar.jpg`      | Güne Sakin Başlamak İçin Küçük Alışkanlıklar   |
| `video-ic-ses.jpg`              | İç Sesimizle Tanışmak                          |
| `video-uyku.jpg`                | Uyku ve Ruh Hali Arasındaki Bağ                |
| `video-duygular.jpg`            | Duyguları Adlandırmak Neden İşe Yarar?         |

## Blog Yazılarının Kapakları

Hem kartlarda hem yazı sayfasının üstündeki geniş fotoğrafta kullanılır.
Her yazının kapak dosyası, yazının başındaki `kapak:` satırında yazar.
Önerilen: yatay 2:1 ya da 4:3 (ör. 1600×900). Kartlarda ortası kırpılarak gösterilir.

| Dosya adı                  | Yazı                                         |
| -------------------------- | -------------------------------------------- |
| `blog-kaygi.jpg`           | Kaygıyla Tanışmak: Her Endişe Bir Sorun mu?  |
| `blog-iliskiler.jpg`       | Sağlıklı Sınırlar                            |
| `blog-gunluk-yasam.jpg`    | Küçük Molaların Büyük Etkisi                 |
| `blog-kisisel-gelisim.jpg` | Kendine Şefkat: İç Sesini Yumuşatmak         |

Yeni bir yazı ya da video eklediğinizde, kapak fotoğrafını bu klasöre koyup adını `kapak:` satırına yazmanız yeterli.
