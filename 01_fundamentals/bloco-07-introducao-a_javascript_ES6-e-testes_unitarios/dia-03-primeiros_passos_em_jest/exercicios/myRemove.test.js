const myRemove = require("./myRemove");

describe("Teste do myRemove", () => {
  it("Deve retornar um array removendo o item certo removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 2)).toEqual([1, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 1)).toEqual([2, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 2)).toEqual([1, 3, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("Deve retornar um array removendo o item certo", () => {
    expect(myRemove([1, 2, 3, 4], 4)).toEqual([1, 2, 3]);
  });
});
