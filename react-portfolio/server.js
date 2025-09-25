import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '7816968651:AAFHGnVDgMk5SvOUJxjKgm-K1GI6D5PQdNs';
const TELEGRAM_CHAT_ID = '6853832893';

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Input validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Barcha maydonlar to\'ldirilishi kerak'
      });
    }

    // Format message for Telegram
    const telegramMessage = `
🔥 *Yangi Portfolio Xabari* 🔥

👤 *Ism:* ${name}
📧 *Email:* ${email}
📝 *Mavzu:* ${subject}

💬 *Xabar:*
${message}

⏰ *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
    `;

    // Send to Telegram
    const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: 'Markdown'
      })
    });

    const result = await response.json();

    if (response.ok && result.ok) {
      res.json({
        success: true,
        message: 'Xabar muvaffaqiyatli yuborildi!'
      });
    } else {
      console.error('Telegram API error:', result);
      res.status(500).json({
        success: false,
        error: 'Telegram xabar yuborishda xatolik'
      });
    }

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({
      success: false,
      error: 'Server xatoligi'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Contact API server ishlayapti' });
});

app.listen(PORT, () => {
  console.log(`Contact API server http://localhost:${PORT} da ishga tushdi`);
});