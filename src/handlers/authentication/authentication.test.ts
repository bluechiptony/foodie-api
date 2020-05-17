import { validateLoginProfile } from "./authentication-validator";

describe("Authentication module test", () => {
  it("Should return true", () => {
    expect(true).toBeTruthy();
  });
});

describe("Authentication validtor: login request validator", () => {
  it("Validator shoud throw error while validating empty  email or password", () => {
    let correctObjetct = { emailAddress: "email@gmail.com", password: "password" };
    let wrongObject1 = { password: "password" };
    let wrongObject2 = { emailAddress: "email@gmail.com" };

    expect(() => {
      validateLoginProfile(wrongObject1);
    }).toThrow();

    expect(() => {
      validateLoginProfile(wrongObject2);
    }).toThrow();

    expect(validateLoginProfile(correctObjetct)).toHaveProperty("emailAddress");
    expect(validateLoginProfile(correctObjetct)).toHaveProperty("password");
  });
});
