import { addMethod, string } from "yup";

addMethod(string, "isNumber", function (message?: string) {
  return this.test("isNumber", message ?? "", (value?: string) => {
    if (value) {
      const number = Number(value);
      return !Number.isNaN(number);
    }
  });
});
