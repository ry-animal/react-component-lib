const DEFAULT_LOCALE = "en-US";

export const truncateEthAddress = (str: string): string => {
  if (str.length) {
    const numStartingCharacters = 6;
    const numTrailingCharacters = 4;
    return `${str.substring(0, numStartingCharacters)}...${str.substring(
      str.length - numTrailingCharacters,
      str.length
    )}`;
  }
  return "";
};

export const formatUSDPriceString = (value: number): string => {
  const minimumFractionDigits = 2;
  const maximumFractionDigits = 2;
  return `$${value.toLocaleString(DEFAULT_LOCALE, {
    minimumFractionDigits,
    maximumFractionDigits,
  })}`;
};

export const formatETHPriceString = (priceInEth: number): string => {
  const minimumFractionDigits = 0;
  const maximumFractionDigits = 8;
  const maxDigitsWithDecimal = 8;

  let formatted = `${priceInEth
    .toLocaleString(DEFAULT_LOCALE, {
      minimumFractionDigits,
      maximumFractionDigits,
    })
    .replace(/,/gu, "")
    .substring(0, maxDigitsWithDecimal)}`;

  if (formatted.endsWith(".")) {
    formatted = formatted.slice(0, -1);
  }
  return formatted;
};

const evaluateNumberLessThanOne = (num: number) => {
  if (num === 0) {
    return "0";
  }

  const minDecimalValue = 0.0001;
  if (num < minDecimalValue) {
    return minDecimalValue.toString();
  }
  // To round decimal to 4 digits
  const maxDigits = 10000;
  return `${Math.round(num * maxDigits) / maxDigits}`;
};

// Abbreviate Number https://stackoverflow.com/a/9462382

export const abbreviateNumber = (num: number): string => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  const rx = /\.0+$|(?<id>\.[0-9]*[1-9])0+$/u;
  const digits = 1;

  const item = lookup
    .slice()
    .reverse()
    .find((x) => num >= x.value);
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : evaluateNumberLessThanOne(num);
};

export const getDomainFromRegex = (url: string) => {
  const matches = url.match(/:\/\/(?<id>.[^/]+)/u);
  // Extract domain (will be null if no match is found)
  return matches && matches[1];
};
