const lista = document.getElementById("lista");
const kmDaFare = parseInt(prompt("Quanti Km devi Percorrere?"));
const età = parseInt(prompt("Quanti anni hai?"));
let tot = kmDaFare * 0.21;
let sconto;
let prezzoFinale;

if (età <= 17) {
  sconto = (tot * 20) / 100;
  prezzoFinale = tot - sconto;
  lista.innerHTML = `
  <li>Eta: ${età} anni</li>
  <li>KM da percorrere: ${kmDaFare} KM</li>
  <li>Prezzo di base: ${tot} euro</li>
  <li>Riduzione di: ${sconto} euro</li>
  <li><h2> Prezzo finale di: ${prezzoFinale.toFixed(2)} euro</h2></li>
  `;
} else if (età >= 65) {
  sconto = (tot * 40) / 100;
  prezzoFinale = tot - sconto;
  lista.innerHTML = `
  <li>Eta: ${età} anni</li>
  <li>KM da percorrere: ${kmDaFare} KM</li>
  <li>Prezzo di base: ${tot} euro</li>
  <li>Riduzione di: ${sconto} euro</li>
  <li><h2> Prezzo finale di: ${prezzoFinale.toFixed(2)} euro</h2></li>
  `;
} else {
  prezzoFinale = tot;
  lista.innerHTML = `
  <li>Eta: ${età} anni</li>
  <li>KM da percorrere: ${kmDaFare} KM</li>
  <li>Prezzo di base: ${tot} euro</li>
  <li>Riduzione di: 0 euro</li>
  <li><h2> Prezzo finale di: ${prezzoFinale.toFixed(2)} euro</h2></li>
  `;
}
