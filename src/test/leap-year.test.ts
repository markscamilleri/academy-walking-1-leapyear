import {isLeapYear} from "../main/is-leap-year";

describe('leapYear', () => {
  describe('When a year number is given', () => {
    it.each`
    year
    ${1997}
    ${1989}
    `("Should return false if the year is not divisible by 4", ({year}) => {
      expect(isLeapYear(year)).toBe(false);
    });

    it.each`
    year
    ${1996}
    ${1988}
    `("Should return true if the year is divisible by 4", ({year}) => {
      expect(isLeapYear(year)).toBe(true);
    });

    it.each`
    year
    ${1600}
    ${2000}
    ${2400}
    `("Should return true if the year is divisible by 400", ({year}) => {
      expect(isLeapYear(year)).toBe(true)
    });

    it.each`
    year
    ${2100}
    ${1900}
    ${1800}
    `("Should return false if the year is divisible by 100 but not by 400", ({year}) => {
      expect(isLeapYear(year)).toBe(false)
    });
  });
});
