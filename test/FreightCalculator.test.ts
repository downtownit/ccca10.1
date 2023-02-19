import FreightCalculator from "../src/FreightCalculator";
import Product from "../src/Product";

test("Deve calcular o frete do produto", function() {
    const product = new Product ( 6, "validando teste com calc frete ", 1000, 100, 30, 10, 3, "USD");
    const freight = FreightCalculator.calculate(product);
    expect(freight).toBe(30);
});
