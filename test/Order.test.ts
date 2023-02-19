import Order from "../src/Order";
import crypto from "crypto";
import Product from "../src/Product";
import CurrencyGatewayHttp from "../src/CurrencyGatewayHttp";
import CurrencyTable from "../src/CurrencyTable";

test("Não deve criar um pedido com CPF inválido", function() {
    const uuid = crypto.randomUUID();
    const cpf = "406.302.170-27";
});

test("Deve criar um pedido vazio", function() {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const order = new Order(uuid,cpf);
    expect(order.getTotal()).toBe(0);
});

test("Deve criar um pedido com 3 itens", function() {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const order = new Order(uuid,cpf);
    order.addItem(new Product(1, 'A', 1000, 100, 30, 10, 3, 'BRL'), 1);
    order.addItem(new Product(2, 'B', 5000, 50, 50, 50, 22, 'BRL'), 1);
    order.addItem(new Product(3, 'C', 30, 10, 10, 10, 0.9, 'BRL'), 3);
    expect(order.getTotal()).toBe(6090);
});

test("Deve criar um pedido com item duplicados", function() {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const order = new Order(uuid,cpf);
    order.addItem(new Product(1, 'A', 1000, 100, 30, 10, 3, 'BRL'), 1);
    expect(() => order.addItem(new Product(1, 'A', 1000, 100, 30, 10, 3, 'BRL'), 1)).toThrow(new Error("Duplicated item"));
});

test("Não adicionar um item com quantidade menor ou igual a zero", function () {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const order = new Order(uuid,cpf);
    expect(() => order.addItem(new Product(1, 'A', 1000, 100, 30, 10, 3, 'BRL'), -1)).toThrow(new Error("Invalid quantity"));
});

test("Deve criar um pedido contendo algum em dólar", function() {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const currencyTable = new CurrencyTable();
    currencyTable.addCurrency("USD", 3);
    const order = new Order(uuid,cpf,currencyTable);
    order.addItem(new Product(1, 'A', 1000, 100, 30, 10, 3, 'BRL'), 1);
    order.addItem(new Product(2, 'B', 5000, 50, 50, 50, 22, 'USD'), 1);
    order.addItem(new Product(3, 'C', 30, 10, 10, 10, 0.9, 'BRL'), 3);
    expect(order.getTotal()).toBe(16090);
});

test("Deve criar um pedido e gerar o código", function() {
    const uuid = crypto.randomUUID();
    const cpf = "407.302.170-27";
    const order = new Order(uuid, cpf, new CurrencyTable(), 1, new Date("2023-10-02T10:00:00"));
    expect(order.getCode()).toBe("202300000001");
} )