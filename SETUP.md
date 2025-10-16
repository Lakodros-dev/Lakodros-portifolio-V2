# Contact Form Setup Instructions

## Telegram Bot Setup

### 1. Bot yaratish
1. Telegram'da [@BotFather](https://t.me/botfather) ga boring
2. `/newbot` buyrug'ini yuboring
3. Bot uchun nom kiriting (masalan: "Lakodros Portfolio Bot")
4. Bot uchun username kiriting (masalan: "lakodros_portfolio_bot")
5. BotFather sizga **Bot Token** beradi (masalan: `123456789:ABCdefGhIJKlmNoPQRsTuVwXyZ`)

### 2. User ID olish
1. [@userinfobot](https://t.me/userinfobot) ga boring
2. `/start` buyrug'ini yuboring
3. Bot sizga **User ID** beradi (masalan: `123456789`)

### 3. Environment Variables sozlash

`.env` fayl yarating va quyidagi ma'lumotlarni kiriting:

```env
# Telegram Bot Configuration
TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN_HERE
TELEGRAM_CHAT_ID=6181098940

# Server Configuration
PORT=3000
NODE_ENV=development
```

## Loyihani ishga tushirish

### 1. Dependencies o'rnatish
```bash
npm install
```

### 2. Development rejimida ishga tushirish
```bash
# Frontend va Backend birga ishga tushirish
npm run dev:full

# Yoki alohida-alohida:
# Frontend (port 3000)
npm run dev

# Backend (port 3000) - boshqa terminalda
npm run server
```

### 3. Production build
```bash
npm run build
npm start
```

## Test qilish

1. Loyiha ishga tushgandan keyin `http://localhost:3000` ga boring
2. Contact formani to'ldiring
3. "Xabar Yuborish" tugmasini bosing
4. Telegram'da xabar kelganini tekshiring

## Xatoliklarni hal qilish

### Server bilan bog'lanish xatoligi
- Server ishga tushganligini tekshiring: `npm run server`
- Port 3000 band emasligini tekshiring

### Telegram xabari kelmayapti
- Bot Token to'g'riligini tekshiring
- User ID to'g'riligini tekshiring
- Bot bilan avval `/start` buyrug'ini yuborganligingizni tekshiring

### Environment variables ishlamayapti
- `.env` fayl loyiha root papkasida ekanligini tekshiring
- Fayl nomida bo'sh joy yo'qligini tekshiring
- Server'ni qayta ishga tushiring