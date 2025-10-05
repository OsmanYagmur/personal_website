# Osman Yağmur - Kişisel Website

Bu proje Cloudflare Workers için hazırlanmış bir kişisel portfolyo websitesi içerir.

## Cloudflare Workers'a Nasıl Deploy Edilir?

### Yöntem 1: Cloudflare Dashboard Kullanarak (Kolay)

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)'a giriş yapın
2. Sol menüden **Workers & Pages** seçin
3. **Create Application** > **Create Worker** butonuna tıklayın
4. Worker'a bir isim verin (örn: `osman-yagmur-portfolio`)
5. **Deploy** butonuna tıklayın
6. Deploy edildikten sonra **Quick Edit** butonuna tıklayın
7. `worker.js` dosyasının içeriğini kopyalayıp editöre yapıştırın
8. **Save and Deploy** butonuna tıklayın

✅ Website'iniz şu adreste yayında olacak: `https://osman-yagmur-portfolio.YOUR-SUBDOMAIN.workers.dev`

### Yöntem 2: Wrangler CLI Kullanarak (Gelişmiş)

```bash
# Wrangler'ı yükleyin
npm install -g wrangler

# Cloudflare hesabınıza giriş yapın
wrangler login

# Deploy edin
wrangler deploy
```

## Dosya Yapısı

- `worker.js` - Cloudflare Worker dosyası (Tüm HTML, CSS ve JS burada)
- `wrangler.toml` - Cloudflare Worker config dosyası
- `index.html` - Orijinal HTML dosyası (referans için)
- `style.css` - Orijinal CSS dosyası (referans için)
- `script.js` - Orijinal JavaScript dosyası (referans için)

## Önemli Notlar

- `worker.js` dosyası tek başına çalışır - diğer dosyalara ihtiyacı yoktur
- Cloudflare Workers ücretsiz planında 100,000 istek/gün limiti vardır
- Website tamamen statik olduğu için çok hızlı yüklenir

## Özelleştirme

Website'i özelleştirmek için `worker.js` dosyasındaki HTML içeriğini düzenleyebilirsiniz.

## Custom Domain Ekleme

Kendi domain adresinizi (örn: osmanymr.com) Worker'a bağlamak için:

### Önkoşul
Domain'iniz Cloudflare'de kayıtlı olmalı. Eğer değilse:
1. [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Websites** > **Add a Site**
2. Domain adınızı girin ve nameserver'ları değiştirin

### Custom Domain Bağlama Adımları

#### Yöntem 1: Cloudflare Dashboard (Önerilen)

1. Worker'ınızı deploy ettikten sonra Worker detay sayfasına gidin
2. **Settings** sekmesine tıklayın
3. **Domains & Routes** bölümünde **Add Custom Domain** butonuna tıklayın
4. Domain adınızı girin (örn: `osmanymr.com` veya `www.osmanymr.com`)
5. **Add Domain** butonuna tıklayın

✅ Cloudflare otomatik olarak:
- DNS kayıtlarını oluşturur
- SSL sertifikasını ayarlar
- Worker'ı domain'e bağlar

**5-10 dakika içinde** domain'iniz aktif olacaktır!

#### Yöntem 2: Subdomain Kullanma

Eğer subdomain kullanmak isterseniz (örn: `portfolio.osmanymr.com`):

1. Worker sayfasında **Settings** > **Domains & Routes**
2. **Add Custom Domain** butonuna tıklayın
3. Subdomain'i girin: `portfolio.osmanymr.com`
4. **Add Domain** butonuna tıklayın

#### Yöntem 3: Wrangler CLI ile

`wrangler.toml` dosyasını düzenleyin:

```toml
name = "osman-yagmur-portfolio"
main = "worker.js"
compatibility_date = "2024-01-01"

# Custom domain için route ekleyin
routes = [
  { pattern = "osmanymr.com/*", zone_name = "osmanymr.com" }
]
```

Sonra deploy edin:
```bash
wrangler deploy
```

### Root Domain (osmanymr.com) vs WWW (www.osmanymr.com)

**İki domain'i de kullanmak isterseniz:**

1. Her iki domain için de Custom Domain ekleyin:
   - `osmanymr.com`
   - `www.osmanymr.com`

2. Veya birini diğerine yönlendirin:
   - **Page Rules** kullanarak `osmanymr.com` → `www.osmanymr.com` yönlendirmesi yapın

### SSL/HTTPS

- Cloudflare otomatik olarak ücretsiz SSL sertifikası sağlar
- Sertifika aktivasyonu 5-10 dakika sürer
- Sertifika otomatik olarak yenilenir

### DNS Kayıtları (Manuel Ayar Gerekmez)

Cloudflare custom domain eklediğinizde otomatik olarak şu kayıtları oluşturur:
- `CNAME` veya `A` kaydı
- `AAAA` kaydı (IPv6 için)

**Not:** Manuel DNS ayarı yapmanıza gerek yok!

### Sorun Giderme

**"This domain is already in use" hatası:**

Bu hata, domain'in DNS kayıtlarında başka bir yere (örn: hosting, başka bir worker vb.) işaret ettiği anlamına gelir.

**Çözüm Adımları:**

1. **Cloudflare Dashboard'a gidin**
   - Sol menüden **Websites** seçin
   - Domain'inizi seçin

2. **DNS kayıtlarını kontrol edin**
   - **DNS** > **Records** bölümüne gidin
   - Domain'iniz için mevcut kayıtları bulun:
     - `A` kaydı (Root domain için: @)
     - `CNAME` kaydı (WWW veya subdomain için)
     - `AAAA` kaydı (IPv6)

3. **Mevcut kayıtları silin**
   - Domain'iniz için olan tüm `A`, `AAAA` ve `CNAME` kayıtlarını silin
   - Özellikle:
     - `osmanymr.com` için `@` kaydı
     - `www.osmanymr.com` için `www` kaydı

4. **Worker'a tekrar custom domain ekleyin**
   - Worker sayfasında: Settings > Domains & Routes
   - "Add Custom Domain" butonuna tıklayın
   - Domain'inizi girin
   - Bu sefer Cloudflare otomatik olarak doğru kayıtları oluşturacak

**Alternatif: Route Kullanma**

Eğer domain'i başka bir yerde de kullanıyorsanız:

1. DNS kaydını olduğu gibi bırakın
2. Worker'da "Route" kullanın:
   - Settings > Domains & Routes > Add Route
   - Pattern girin: `osmanymr.com/*` veya `www.osmanymr.com/*`
   - Zone seçin: Domain'iniz
   - Save

**"Domain kullanılamıyor" hatası:**
- Domain'in Cloudflare'de kayıtlı olduğundan emin olun
- Nameserver'ların Cloudflare'e yönlendirildiğini kontrol edin

**SSL hatası:**
- 10-15 dakika bekleyin (sertifika aktivasyonu)
- Cache'i temizleyin ve tekrar deneyin

**404 hatası:**
- Worker'ın deploy edildiğinden emin olun
- Custom domain'in doğru girildiğini kontrol edin

## Destek

Sorunlarla karşılaşırsanız:
- [Cloudflare Workers Dökümantasyonu](https://developers.cloudflare.com/workers/)
- [Custom Domain Kılavuzu](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
- [Cloudflare Community](https://community.cloudflare.com/)
# personal_website
