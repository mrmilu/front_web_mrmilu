import * as yup from "yup";
import type { AnyObject, Maybe } from "yup/lib/types";

// Here declare yup extend methods for each schema type

yup.addMethod<yup.StringSchema>(yup.string, "isNumber", function (message?: string) {
  return this.test("isNumber", message ?? "", (value?: string) => {
    if (value) {
      const number = Number(value);
      return Number.isNaN(number);
    }
  });
});

declare module "yup" {
  interface StringSchema<TType extends Maybe<string> = string | undefined, TContext extends AnyObject = AnyObject, TOut extends TType = TType>
    extends yup.BaseSchema<TType, TContext, TOut> {
    isNumber(message?: string): StringSchema<TType, TContext>;
  }
}

export default yup;
