import Cpf from "../src/domain/entity/Cpf";

test.each([
    "407.302.170-27",
    "684.053.160-00",
    "746.971.314-01"

])("Deve testar um CPF válido", function (value) {
   const cpf = new Cpf(value);
   expect(cpf.value).toBeDefined();
});

test.each([ 
    "406.302.170-27",
    "406.302.170-2711",
    "406.302.170",
    ""
])("Deve testar um CPF inválido", function (value) {
    expect(() => new Cpf(value)).toThrow(new Error("Invalid cpf"));
});

test.each([
    "000.000.000-00",
    "111.111.111-11",
    "222.222.222-22",
    "aaa.aaa.aaa-aa"
])
("Deve testar um CPF inválido com todos os dígitos iguais", function (value) {
    expect(() => new Cpf(value)).toThrow(new Error("Invalid cpf"));
});
