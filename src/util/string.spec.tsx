/* eslint-disable no-magic-numbers */
/**
 * @jest-environment jsdom
 */

import {
  abbreviateNumber,
  formatETHPriceString,
  formatUSDPriceString,
  getDomainFromRegex,
  truncateEthAddress,
} from "./string";

describe("String Utils", () => {
  test("Truncate Eth Address", () => {
    const address = "0x960Dd60Ea21709015aB4777276b05DB7cCEAb20E";
    const actual = truncateEthAddress(address);
    const expected = "0x960D...b20E";
    expect(actual).toEqual(expected);
    expect(truncateEthAddress("")).toEqual("");
  });

  test("formatETHPriceString() Input eth value, outputs formatted eth string", () => {
    expect(formatETHPriceString(1.0)).toEqual("1");
    expect(formatETHPriceString(0.34534)).toEqual("0.34534");
    expect(formatETHPriceString(0.000043453)).toEqual("0.000043");
    expect(formatETHPriceString(0.000000004)).toEqual("0");
    expect(formatETHPriceString(420.856856)).toEqual("420.8568");
    expect(formatETHPriceString(0.0005)).toEqual("0.0005");
    expect(formatETHPriceString(0.000001)).toEqual("0.000001");
    expect(formatETHPriceString(123456.123456)).toEqual("123456.1");
    expect(formatETHPriceString(1234567.1234567)).toEqual("1234567");
  });

  test("formatUSDPriceString() Input usd value, outputs formatted usd string", () => {
    expect(formatUSDPriceString(0.0007)).toEqual("$0.00");
    expect(formatUSDPriceString(24.238)).toEqual("$24.24");
    expect(formatUSDPriceString(1234.56)).toEqual("$1,234.56");
    expect(formatUSDPriceString(1)).toEqual("$1.00");
    expect(formatUSDPriceString(1.2)).toEqual("$1.20");
  });

  test("Abbreviate Number", () => {
    const tests = [
      { num: 0, expected: "0" },
      { num: 0.0004, expected: "0.0004" },
      { num: 0.0045, expected: "0.0045" },
      { num: 0.00004, expected: "0.0001" },
      { num: 123, expected: "123" },
      { num: 1100, expected: "1.1k" },
      { num: 14009, expected: "14k" },
      { num: 420000, expected: "420k" },
      { num: 6900000, expected: "6.9M" },
      { num: 1230000000, expected: "1.2B" },
      { num: 1230000000000, expected: "1.2T" },
    ];
    tests.forEach((test) => {
      expect(abbreviateNumber(test.num)).toEqual(test.expected);
    });
  });

  test("Get domain name from url with regex", () => {
    const tests = [
      { url: "https://myspace.com/cool-beans", expected: "myspace.com" },
      {
        url: "https://cool-math-games.org/lemonade-stand",
        expected: "cool-math-games.org",
      },
      { url: "gamestop.eth", expected: null },
    ];
    tests.forEach((test) => {
      expect(getDomainFromRegex(test.url)).toEqual(test.expected);
    });
  });
});
