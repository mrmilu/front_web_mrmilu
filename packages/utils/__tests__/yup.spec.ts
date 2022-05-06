import yup from "../src/yup_extended";

describe("yup extension methods", () => {
  describe("string schema", () => {
    const yupSchema = yup.object({
      foo: yup.string().isNumber("It's not a number!")
    });

    it("should check if value is a number and not fail", async () => {
      await expect(yupSchema.validate({ foo: "20" })).toResolve();
    });
    it("should check if value is a number and fail", async () => {
      await expect(yupSchema.validate({ foo: "aaa" })).toReject();
    });
  });
});
