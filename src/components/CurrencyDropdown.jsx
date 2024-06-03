import { useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";

function CurrencyDropdown() {
  const [currencyList, setCurrencyList] = useState([]);
  const [currencyTo, setCurrencyTo] = useState();
  const [currencyFrom, setCurrencyFrom] = useState();

  useEffect(() => {
    // fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
    //   .then((res) => res.json())
    //   .then((data) => setCurrencyList(data["supported_codes"]));
    setCurrencyList([
      ["AED", "UAE Dirham"],
      ["AFN", "Afghan Afghani"],
      ["ALL", "Albanian Lek"],
      ["AMD", "Armenian Dram"],
      ["ANG", "Netherlands Antillian Guilder"],
      ["AOA", "Angolan Kwanza"],
      ["ARS", "Argentine Peso"],
      ["AUD", "Australian Dollar"],
      ["AWG", "Aruban Florin"],
      ["AZN", "Azerbaijani Manat"],
      ["BAM", "Bosnia and Herzegovina Convertible Mark"],
      ["BBD", "Barbados Dollar"],
      ["BDT", "Bangladeshi Taka"],
      ["BGN", "Bulgarian Lev"],
      ["BHD", "Bahraini Dinar"],
      ["BIF", "Burundian Franc"],
      ["BMD", "Bermudian Dollar"],
      ["BND", "Brunei Dollar"],
      ["BOB", "Bolivian Boliviano"],
      ["BRL", "Brazilian Real"],
      ["BSD", "Bahamian Dollar"],
      ["BTN", "Bhutanese Ngultrum"],
      ["BWP", "Botswana Pula"],
      ["BYN", "Belarusian Ruble"],
      ["BZD", "Belize Dollar"],
      ["CAD", "Canadian Dollar"],
      ["CDF", "Congolese Franc"],
      ["CHF", "Swiss Franc"],
      ["CLP", "Chilean Peso"],
      ["CNY", "Chinese Renminbi"],
      ["COP", "Colombian Peso"],
      ["CRC", "Costa Rican Colon"],
      ["CUP", "Cuban Peso"],
      ["CVE", "Cape Verdean Escudo"],
      ["CZK", "Czech Koruna"],
      ["DJF", "Djiboutian Franc"],
      ["DKK", "Danish Krone"],
      ["DOP", "Dominican Peso"],
      ["DZD", "Algerian Dinar"],
      ["EGP", "Egyptian Pound"],
      ["ERN", "Eritrean Nakfa"],
      ["ETB", "Ethiopian Birr"],
      ["EUR", "Euro"],
      ["FJD", "Fiji Dollar"],
      ["FKP", "Falkland Islands Pound"],
      ["FOK", "Faroese Króna"],
      ["GBP", "Pound Sterling"],
      ["GEL", "Georgian Lari"],
      ["GGP", "Guernsey Pound"],
      ["GHS", "Ghanaian Cedi"],
      ["GIP", "Gibraltar Pound"],
      ["GMD", "Gambian Dalasi"],
      ["GNF", "Guinean Franc"],
      ["GTQ", "Guatemalan Quetzal"],
      ["GYD", "Guyanese Dollar"],
      ["HKD", "Hong Kong Dollar"],
      ["HNL", "Honduran Lempira"],
      ["HRK", "Croatian Kuna"],
      ["HTG", "Haitian Gourde"],
      ["HUF", "Hungarian Forint"],
      ["IDR", "Indonesian Rupiah"],
      ["ILS", "Israeli New Shekel"],
      ["IMP", "Manx Pound"],
      ["INR", "Indian Rupee"],
      ["IQD", "Iraqi Dinar"],
      ["IRR", "Iranian Rial"],
      ["ISK", "Icelandic Króna"],
      ["JEP", "Jersey Pound"],
      ["JMD", "Jamaican Dollar"],
      ["JOD", "Jordanian Dinar"],
      ["JPY", "Japanese Yen"],
      ["KES", "Kenyan Shilling"],
      ["KGS", "Kyrgyzstani Som"],
      ["KHR", "Cambodian Riel"],
      ["KID", "Kiribati Dollar"],
      ["KMF", "Comorian Franc"],
      ["KRW", "South Korean Won"],
      ["KWD", "Kuwaiti Dinar"],
      ["KYD", "Cayman Islands Dollar"],
      ["KZT", "Kazakhstani Tenge"],
      ["LAK", "Lao Kip"],
      ["LBP", "Lebanese Pound"],
      ["LKR", "Sri Lanka Rupee"],
      ["LRD", "Liberian Dollar"],
      ["LSL", "Lesotho Loti"],
      ["LYD", "Libyan Dinar"],
      ["MAD", "Moroccan Dirham"],
      ["MDL", "Moldovan Leu"],
      ["MGA", "Malagasy Ariary"],
      ["MKD", "Macedonian Denar"],
      ["MMK", "Burmese Kyat"],
      ["MNT", "Mongolian Tögrög"],
      ["MOP", "Macanese Pataca"],
      ["MRU", "Mauritanian Ouguiya"],
      ["MUR", "Mauritian Rupee"],
      ["MVR", "Maldivian Rufiyaa"],
      ["MWK", "Malawian Kwacha"],
      ["MXN", "Mexican Peso"],
      ["MYR", "Malaysian Ringgit"],
      ["MZN", "Mozambican Metical"],
      ["NAD", "Namibian Dollar"],
      ["NGN", "Nigerian Naira"],
      ["NIO", "Nicaraguan Córdoba"],
      ["NOK", "Norwegian Krone"],
      ["NPR", "Nepalese Rupee"],
      ["NZD", "New Zealand Dollar"],
      ["OMR", "Omani Rial"],
      ["PAB", "Panamanian Balboa"],
      ["PEN", "Peruvian Sol"],
      ["PGK", "Papua New Guinean Kina"],
      ["PHP", "Philippine Peso"],
      ["PKR", "Pakistani Rupee"],
      ["PLN", "Polish Złoty"],
      ["PYG", "Paraguayan Guaraní"],
      ["QAR", "Qatari Riyal"],
      ["RON", "Romanian Leu"],
      ["RSD", "Serbian Dinar"],
      ["RUB", "Russian Ruble"],
      ["RWF", "Rwandan Franc"],
      ["SAR", "Saudi Riyal"],
      ["SBD", "Solomon Islands Dollar"],
      ["SCR", "Seychellois Rupee"],
      ["SDG", "Sudanese Pound"],
      ["SEK", "Swedish Krona"],
      ["SGD", "Singapore Dollar"],
      ["SHP", "Saint Helena Pound"],
      ["SLE", "Sierra Leonean Leone"],
      ["SLL", "Sierra Leonean Leone"],
      ["SOS", "Somali Shilling"],
      ["SRD", "Surinamese Dollar"],
      ["SSP", "South Sudanese Pound"],
      ["STN", "São Tomé and Príncipe Dobra"],
      ["SYP", "Syrian Pound"],
      ["SZL", "Eswatini Lilangeni"],
      ["THB", "Thai Baht"],
      ["TJS", "Tajikistani Somoni"],
      ["TMT", "Turkmenistan Manat"],
      ["TND", "Tunisian Dinar"],
      ["TOP", "Tongan Paʻanga"],
      ["TRY", "Turkish Lira"],
      ["TTD", "Trinidad and Tobago Dollar"],
      ["TVD", "Tuvaluan Dollar"],
      ["TWD", "New Taiwan Dollar"],
      ["TZS", "Tanzanian Shilling"],
      ["UAH", "Ukrainian Hryvnia"],
      ["UGX", "Ugandan Shilling"],
      ["USD", "United States Dollar"],
      ["UYU", "Uruguayan Peso"],
      ["UZS", "Uzbekistani So'm"],
      ["VES", "Venezuelan Bolívar Soberano"],
      ["VND", "Vietnamese Đồng"],
      ["VUV", "Vanuatu Vatu"],
      ["WST", "Samoan Tālā"],
      ["XAF", "Central African CFA Franc"],
      ["XCD", "East Caribbean Dollar"],
      ["XDR", "Special Drawing Rights"],
      ["XOF", "West African CFA franc"],
      ["XPF", "CFP Franc"],
      ["YER", "Yemeni Rial"],
      ["ZAR", "South African Rand"],
      ["ZMW", "Zambian Kwacha"],
      ["ZWL", "Zimbabwean Dollar"],
    ]);
  }, []);

  return (
    <div>
      <div className="dropdownContainer">
        <p>I want to convert</p>
        <select
          name="currency"
          id="currencyFrom"
          value={currencyFrom}
          onChange={(event) => {
            setCurrencyFrom(event.target.value);
          }}
        >
          {/* currencyList = [['AED', 'UAE Dirham'], ...] */}
          {currencyList.map((currency) => {
            // currency = ['AED', 'UAE Dirham']
            return (
              <option value={currency[0]} key={currency[0]}>
                {currency[1]}
              </option>
            );
          })}
        </select>
        <p>to</p>
        <select
          name="currency"
          id="currencyTo"
          value={currencyTo}
          onChange={(event) => {
            setCurrencyTo(event.target.value);
          }}
        >
          {/* currencyList = [['AED', 'UAE Dirham'], ...] */}
          {currencyList.map((currency) => {
            // currency = ['AED', 'UAE Dirham']
            return (
              <option value={currency[0]} key={currency[0]}>
                {currency[1]}
              </option>
            );
          })}
        </select>
      </div>
      <CurrencyConverter currencyTo={currencyTo} currencyFrom={currencyFrom} />
    </div>
  );
}

export default CurrencyDropdown;
