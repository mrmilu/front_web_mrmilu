import type { StringSchema, AnyObject, Flags, Maybe, Schema } from "yup";
import { addMethod, string } from "yup";

declare module "yup" {
  interface StringSchema<TType extends Maybe<string> = string | undefined, TContext = AnyObject, TDefault = undefined, TFlags extends Flags = "">
    extends Schema<TType, TContext, TDefault, TFlags> {
    isNumber(message?: string): this;
  }
}

export function loadYupExtensions() {
  addMethod<StringSchema>(string, "isNumber", function (message?: string) {
    return this.test("isNumber", message ?? "", (value?: string) => {
      if (value) {
        const number = Number(value);
        return !Number.isNaN(number);
      }
    });
  });
}
