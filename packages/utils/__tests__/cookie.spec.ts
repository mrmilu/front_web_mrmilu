import { CookieUtils } from "../src";

describe("CookieUtils", () => {
  describe("getCookie", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "example1=one;example2=two"
      });
    });

    test("should get cookie value and be one", () => {
      const expected = "one";
      const result = CookieUtils.getCookie("example1");

      expect(result).toBe(expected);
    });
    test("should get cookie value and be null", () => {
      const result = CookieUtils.getCookie("example3");

      expect(result).toBeNull();
    });
  });

  test("setCookie should set cookie in document", () => {
    const expected = "customCookie=customValue";
    CookieUtils.setCookie("customCookie", "customValue");
    expect(document.cookie).toInclude(expected);
  });

  test("eraseCookie should set cookie in document", () => {
    const value = "customCookie";
    const staticValue = "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    const expected = value + staticValue;

    CookieUtils.eraseCookie("customCookie");

    expect(document.cookie).toBe(expected);
  });

  test("cookieExpiration should get Date with corresponding expiration", () => {
    const dateExpirationYear = new Date().getFullYear() + 1;
    const yearExpiration = CookieUtils.cookieExpirationDate();
    expect(yearExpiration.getFullYear()).toEqual(dateExpirationYear);
  });
});
