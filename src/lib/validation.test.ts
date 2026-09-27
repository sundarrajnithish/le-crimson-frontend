import { validateContact } from "./validation";

describe("validateContact", () => {
  it("accepts a complete message", () => {
    expect(
      validateContact({ name: "Ana", email: "ana@example.com", message: "Hello there, team!" }),
    ).toEqual({});
  });
  it("flags each invalid field", () => {
    const e = validateContact({ name: " ", email: "nope", message: "short" });
    expect(Object.keys(e).sort()).toEqual(["email", "message", "name"]);
  });
});
