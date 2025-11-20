# 🌿 प्रकृति का सौंदर्य – Nature Website  

<p align="center">
  <img src="https://www.ingr.in/private/c/favicon_logo_io.jpg" alt="Custom Logo" width="140" style="border-radius:16px;">
</p>

<p align="center">
  <img src="https://via.placeholder.com/1200x350?text=Realistic+Nature+Banner" alt="Nature Banner" style="border-radius:12px;">
</p>

<p align="center">
  <b>एक आधुनिक हिन्दी वेबसाइट — प्रकृति के सौंदर्य को खूबसूरत UI, ग्रेडिएंट फ़ॉन्ट और एडमिन पैनल के साथ प्रस्तुत करती है।</b>
</p>

---

## 🏷️ Extra Badges (Enhanced)

<p align="center">

<img src="https://img.shields.io/github/license/ingr-in/nature-website"/>
<img src="https://img.shields.io/github/stars/ingr-in/nature-website?style=flat"/>
<img src="https://img.shields.io/github/forks/ingr-in/nature-website?style=flat"/>
<img src="https://img.shields.io/github/issues/ingr-in/nature-website"/>
<img src="https://img.shields.io/badge/Language-Hindi-green"/>
<img src="https://img.shields.io/badge/Responsive-Yes-blue"/>
<img src="https://img.shields.io/badge/Dark%20Mode-Available-purple"/>
<img src="https://img.shields.io/badge/Admin%20Panel-Enabled-orange"/>

</p>

---

## 📌 Table of Contents
- Features  
- Screenshots  
- Color Palette  
- Installation  
- Auto Install Script  
- Admin Access  
- Live Demo  
- Contributing  
- License  

---

## ✨ Features

- Responsive design  
- Gradient wedding-style fonts  
- Dark mode toggle  
- Admin content management panel  
- Multi-page navigation  
- Clean Hindi typography  
- SEO-friendly structure  
- Nature-themed modern layout  

---

## 📸 Screenshots

*(Placeholder — अपनी इमेज URLs बाद में बदलें)*  

### 🏡 Home Page  
<p align="center">
  <img src="https://via.placeholder.com/1000x450?text=Home+Page" style="border:4px solid #58a67b; border-radius:12px;">
</p>

### ⚙️ Admin Panel  
<p align="center">
  <img src="https://via.placeholder.com/1000x450?text=Admin+Panel" style="border:4px solid #58a67b; border-radius:12px;">
</p>

### 🌙 Dark Mode  
<p align="center">
  <img src="https://via.placeholder.com/1000x450?text=Dark+Mode" style="border:4px solid #58a67b; border-radius:12px;">
</p>

---

## 🎨 Color Palette  

| Color | Hex Code | Use |
|-------|---------|-----|
| Leaf Green | `#58a67b` | Buttons, UI Highlights |
| Soft Cream | `#f9f5ec` | Background |
| Deep Black | `#0f0f0f` | Dark Mode |
| Floral Pink Gradient | `#ff89c0 → #ffb7e1` | Titles & Headings |

---

## 🛠️ Installation

### 1️⃣ Clone  
```bash
git clone https://github.com/ingr-in/nature-website.git
```

### 2️⃣ Database  
```sql
CREATE DATABASE nature_website;
USE nature_website;

CREATE TABLE sections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  page VARCHAR(50) NOT NULL,
  section_name VARCHAR(100) NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO sections VALUES 
(1,'home','main_heading','🌿 प्रकृति का सौंदर्य 🌸'),
(2,'home','main_content','प्रकृति वह शक्ति है जो जीवन को जन्म देती है...');
```

### 3️⃣ Configure DB  
`includes/config.php` में अपनी जानकारी डालें।

### 4️⃣ Run  
XAMPP/WAMP या सर्वर पर लांच करें।

---

## ⚡ Auto Install Script  

### Linux / Mac  
```bash
#!/bin/bash
git clone https://github.com/ingr-in/nature-website.git
cd nature-website
echo "Import DB via phpMyAdmin."
```

### Windows (.bat)  
```bat
git clone https://github.com/ingr-in/nature-website.git
echo Import DB via phpMyAdmin.
pause
```

---

## 🔒 Admin Access

URL: `/admin.php`  
- Username: `admin`  
- Password: `nature123`

---

## 🖥️ Live Demo  
[Live Testing Preview](https://github.ingr.in/)

---

## 🤝 Contributing  
Pull requests आमंत्रित!

---

## 📄 License  
MIT License

