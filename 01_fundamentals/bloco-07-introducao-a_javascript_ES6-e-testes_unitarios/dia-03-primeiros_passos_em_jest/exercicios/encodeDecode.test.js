const { encode, decode } = require("./encodeDecode");

describe("Testando a função encode", () => {
  it("Verifica se encode é definida", () => {
    expect(encode).toBeDefined();
  });
  it("Verifica se encode é uma função", () => {
    expect(typeof encode).toEqual("function");
  });
  it("Verifica se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente", () => {
    expect(encode("aeiou")).toEqual("12345");
  });
  it("Verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(encode("felipe").length).toEqual(6);
  });
});

describe("Testando a função decode", () => {
  it("Verifica se decode é definida", () => {
    expect(decode).toBeDefined();
  });
  it("Verifica se decode é uma função", () => {
    expect(typeof decode).toEqual("function");
  });
  it("Verifica se os números 1, 2, 3, 4, 5 são convertidos em a, e, i, o, u, respectivamente", () => {
    expect(decode("12345")).toEqual("aeiou");
  });
  it("Verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    expect(decode("123456").length).toEqual(6);
  });
});
