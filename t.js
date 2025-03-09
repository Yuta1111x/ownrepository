const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// Konfiguracja bota mineflayer
const bot = mineflayer.createBot({
  host: 'donutsmp.net',    // adres serwera – zmień na właściwy
  port: 25565,             // port serwera Minecraft
  username: 'szymekyt123x@gmail.com',  // Twój adres e-mail powiązany z kontem Microsoft
  auth: 'microsoft'        // ustawienie autentykacji na Microsoft
});

// Nasłuchiwanie zdarzeń bota
bot.on('login', () => {
  console.log('Bot pomyślnie zalogowany!');
});

bot.on('error', (err) => {
  console.error('Wystąpił błąd:', err);
});

bot.on('end', () => {
  console.log('Bot został rozłączony.');
});

// Konfiguracja serwera Express
app.get('/', (req, res) => {
  res.send('<h1>Serwer Express działa poprawnie!</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer Express nasłuchuje na porcie ${PORT}`);
});
