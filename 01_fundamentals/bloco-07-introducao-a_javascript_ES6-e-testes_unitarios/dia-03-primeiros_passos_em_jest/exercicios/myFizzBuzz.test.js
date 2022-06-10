const myFizzBuzz = require("./myFizzBuzz");

describe("Teste do myFizzBuzz", () => {
  it("Deve retornar fizzbuzz quando o número for divisível por 3 e 5", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });
  it("Deve retornar fizz quando o número for divisível por 3", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });
  it("Deve retornar buzz quando o número for divisível por 5", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });
  it("Deve retornar o número quando o número não for divisível por 3 ou 5", () => {
    expect(myFizzBuzz(7)).toBe(7);
  });
  it("Deve retornar false quando a entrada não for um número", () => {
    expect(myFizzBuzz("teste")).toBe(false);
  });
});
