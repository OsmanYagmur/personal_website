# Cloudflare Pages Deployment Rehberi

## 🚀 Cloudflare Pages'e Deploy Etme

### Yöntem 1: Cloudflare Dashboard (En Kolay)

1. **GitHub/GitLab'a Push Edin:**
   ```bash
   git add .
   git commit -m "Web sitesi hazır"
   git push origin main
   ```

2. **Cloudflare Dashboard:**
   - https://dash.cloudflare.com/ adresine gidin
   - Sol menüden **"Pages"** seçin
   - **"Create a project"** butonuna tıklayın
   - **"Connect to Git"** seçeneğini seçin
   - GitHub/GitLab hesabınızı bağlayın
   - Repository'nizi seçin

3. **Build Ayarları:**
   - **Framework preset:** None (veya Static HTML)
   - **Build command:** Boş bırakın
   - **Build output directory:** `/` (kök dizin)
   - **Root directory:** `/` (kök dizin)

4. **Deploy:**
   - **"Save and Deploy"** butonuna tıklayın
   - 1-2 dakika içinde siteniz yayında olacak!

### Yöntem 2: Wrangler CLI (Komut Satırı)

1. **Wrangler'ı Yükleyin:**
   ```bash
   npm install -g wrangler
   ```

2. **Cloudflare'e Login:**
   ```bash
   wrangler login
   ```

3. **Deploy Edin:**
   ```bash
   wrangler pages deploy . --project-name=osman-yagmur-portfolio
   ```

### Yöntem 3: Drag & Drop (En Hızlı)

1. **Cloudflare Dashboard:**
   - https://dash.cloudflare.com/ adresine gidin
   - **"Pages"** > **"Create a project"**
   - **"Upload assets"** seçeneğini seçin

2. **Dosyaları Sürükleyin:**
   - Şu dosyaları seçip dashboard'a sürükleyin:
     - index.html
     - style.css
     - script.js
     - profile.jpg
     - about-photo.jpg

3. **Deploy:**
   - **"Deploy site"** butonuna tıklayın
   - Siteniz hemen yayında!

## 🌐 Özel Domain Bağlama

1. **Cloudflare Pages Dashboard:**
   - Projenize gidin
   - **"Custom domains"** sekmesine tıklayın
   - **"Set up a custom domain"** butonuna tıklayın

2. **Domain Ekleyin:**
   - Domain adınızı girin (örn: osmanymr.com)
   - DNS ayarlarını yapın (otomatik olacak)
   - SSL sertifikası otomatik oluşturulacak

## 📝 Güncelleme Nasıl Yapılır?

### GitHub ile:
```bash
# Değişiklikleri yapın
git add .
git commit -m "Güncelleme mesajınız"
git push origin main
```
Cloudflare otomatik olarak yeni versiyonu deploy edecek!

### Wrangler ile:
```bash
wrangler pages deploy .
```

### Drag & Drop ile:
- Dashboard'dan **"Create deployment"** > dosyaları yeniden sürükleyin

## 🎯 Önerilen Yapı

Siteniz şu dosyalarla hazır:
- ✅ index.html (Ana sayfa)
- ✅ style.css (Stiller)
- ✅ script.js (JavaScript)
- ✅ profile.jpg (Profil fotoğrafı)
- ✅ about-photo.jpg (Hakkımda fotoğrafı)

## 💡 İpuçları

1. **Hızlı Deploy:** Drag & Drop en hızlısı
2. **Otomatik Deploy:** GitHub ile entegrasyon en pratik
3. **SSL:** Cloudflare otomatik HTTPS sağlar
4. **CDN:** Global CDN ile hızlı yükleme
5. **Ücretsiz:** Cloudflare Pages tamamen ücretsiz!

## 🔗 Yararlı Linkler

- Cloudflare Pages: https://pages.cloudflare.com/
- Dashboard: https://dash.cloudflare.com/
- Dökümantasyon: https://developers.cloudflare.com/pages/

## ⚡ Sonuç

Deploy edildikten sonra siteniz şu şekilde erişilebilir olacak:
- `https://osman-yagmur-portfolio.pages.dev`
- Veya kendi domain'iniz: `https://osmanymr.com`
