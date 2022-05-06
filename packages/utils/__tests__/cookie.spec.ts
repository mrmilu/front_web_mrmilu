import { CookieUtils } from "../src";

describe("cookie utils", () => {
  describe("get cookie", () => {
    beforeEach(() => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "example1=one;example2=two; example4=four"
      });
    });

    it("should get cookie value and be one", () => {
      const expected = "one";
      const result = CookieUtils.getCookie("example1");

      expect(result).toBe(expected);
    });

    it("should get cookie value and be null", () => {
      const result = CookieUtils.getCookie("example3");

      expect(result).toBeNull();
    });
  });

  it("should set cookie in document", () => {
    const expected = "customCookie=customValue";
    CookieUtils.setCookie("customCookie", "customValue");
    expect(document.cookie).toInclude(expected);
  });

  it("should erase cookie in document", () => {
    const value = "customCookie";
    const staticValue = "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    const expected = value + staticValue;

    CookieUtils.eraseCookie("customCookie");

    expect(document.cookie).toBe(expected);
  });

  it("should get cookie expiration Date", () => {
    const dateExpirationYear = new Date().getFullYear() + 1;
    const yearExpiration = CookieUtils.cookieExpirationDate();
    expect(yearExpiration.getFullYear()).toEqual(dateExpirationYear);
  });
});
