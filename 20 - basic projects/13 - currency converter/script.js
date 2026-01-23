// =======================
// CURRENCY LIST (150+)
// =======================
const currencies = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  PKR: "Pakistani Rupee",
  INR: "Indian Rupee",
  AED: "UAE Dirham",
  SAR: "Saudi Riyal",
  CNY: "Chinese Yuan",
  JPY: "Japanese Yen",
  CAD: "Canadian Dollar",
  AUD: "Australian Dollar",
  CHF: "Swiss Franc",
  TRY: "Turkish Lira",
  BDT: "Bangladeshi Taka",
  LKR: "Sri Lankan Rupee",
  AFN: "Afghan Afghani",
  NZD: "New Zealand Dollar",
  SEK: "Swedish Krona",
  NOK: "Norwegian Krone",
  DKK: "Danish Krone",
  RUB: "Russian Ruble",
  ZAR: "South African Rand",
  KRW: "South Korean Won",
  MYR: "Malaysian Ringgit",
  THB: "Thai Baht",
  SGD: "Singapore Dollar",
  HKD: "Hong Kong Dollar",
  IDR: "Indonesian Rupiah",
  MXN: "Mexican Peso",
  BRL: "Brazilian Real",
  ARS: "Argentine Peso",
  CLP: "Chilean Peso",
  COP: "Colombian Peso",
  EGP: "Egyptian Pound",
  NGN: "Nigerian Naira",
  KES: "Kenyan Shilling",
  GHS: "Ghanaian Cedi",
  MAD: "Moroccan Dirham",
  QAR: "Qatari Riyal",
  KWD: "Kuwaiti Dinar",
  BHD: "Bahraini Dinar",
  OMR: "Omani Rial",
  ILS: "Israeli Shekel",
  JOD: "Jordanian Dinar",
  IRR: "Iranian Rial",
  IQD: "Iraqi Dinar",
  NPR: "Nepalese Rupee",
  MMK: "Myanmar Kyat",
  VND: "Vietnamese Dong",
  PHP: "Philippine Peso",
  LAK: "Lao Kip",
  KHR: "Cambodian Riel",
  UAH: "Ukrainian Hryvnia",
  PLN: "Polish Zloty",
  CZK: "Czech Koruna",
  HUF: "Hungarian Forint",
  RON: "Romanian Leu",
  BGN: "Bulgarian Lev",
  HRK: "Croatian Kuna",
  ISK: "Icelandic Krona",
  TWD: "Taiwan Dollar",
  MOP: "Macau Pataca",
  BWP: "Botswana Pula",
  TZS: "Tanzanian Shilling",
  UGX: "Ugandan Shilling",
  ETB: "Ethiopian Birr",
  XOF: "West African CFA Franc",
  XAF: "Central African CFA Franc"
};

// =======================
// DOM ELEMENTS
// =======================
const amountInput = document.querySelector("input");
const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const convertBtn = document.querySelector("button");
const resultText = document.querySelector(".result");
const swapBtn = document.querySelector(".swap");

// =======================
// POPULATE DROPDOWNS
// =======================
function populateCurrencies() {
  for (let code in currencies) {
    const option1 = document.createElement("option");
    option1.value = code;
    option1.textContent = `${code} - ${currencies[code]}`;

    const option2 = option1.cloneNode(true);

    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  }

  fromSelect.value = "USD";
  toSelect.value = "PKR";
}

populateCurrencies();

// =======================
// CONVERT FUNCTION
// =======================
async function convertCurrency() {
  const amount = amountInput.value;
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  if (amount === "" || amount <= 0) {
    resultText.textContent = "❌ Please enter a valid amount";
    resultText.style.color = "red";
    return;
  }

  resultText.style.color = "black";
  resultText.textContent = "⏳ Converting...";

  try {
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );
    const data = await response.json();

    const rate = data.rates[toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);

    resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    resultText.textContent = "⚠️ Error fetching data";
    resultText.style.color = "red";
  }
}

// =======================
// EVENTS
// =======================
convertBtn.addEventListener("click", convertCurrency);

// Auto convert on change
fromSelect.addEventListener("change", convertCurrency);
toSelect.addEventListener("change", convertCurrency);

// Swap currencies
swapBtn.addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convertCurrency();
});
