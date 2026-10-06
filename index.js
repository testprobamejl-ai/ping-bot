const URL_ZA_POSETU = "https://kuchenabluftreinigung.de";
const INTERVAL_U_MILISEGUNDAMA = 60000; // 60 sekundi (60000 milisekundi)

console.log("Skripta je pokrenuta na serveru i radi...");

setInterval(async () => {
  try {
    const response = await fetch(URL_ZA_POSETU);
    console.log(`[${new Date().toLocaleTimeString()}] Uspešan zahtev! Status: ${response.status}`);
  } catch (error) {
    console.error(`[${new Date().toLocaleTimeString()}] Greška:`, error.message);
  }
}, INTERVAL_U_MILISEGUNDAMA);
