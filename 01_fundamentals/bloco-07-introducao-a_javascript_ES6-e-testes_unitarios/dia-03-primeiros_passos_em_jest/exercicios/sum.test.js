const sum = require("./sum");

describe("teste da função sum", () => {
  it("deve retornar a soma de dois números", () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve retornar "parameters must be numbers" quando não for passado um número', () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});
