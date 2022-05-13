/**
 * Static class with a set of cookie utils
 */
export default class CookieUtils {
  /**
   * Sets cookie in document
   * @param name
   * @param value
   * @param days
   */
  static setCookie(name: string, value = "", days = 365) {
    let expires = "";
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  /**
   * Gets cookie from document
   * @param name
   */
  static getCookie(name: string) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  /**
   * Erases cookie from document
   * @param name
   */
  static eraseCookie(name: string) {
    document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }

  /**
   * Generates an expiration date based in a amount of days
   * @param days
   */
  static cookieExpirationDate = (days = 365) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };
}
