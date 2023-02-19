import SimulateFreight from "../src/SimulateFreight";

let simulateFreight: SimulateFreight;

beforeEach(function() {
	simulateFreight = new SimulateFreight();
});

test("Deve criar um pedido com 3 produtos calculando o frete", async function() {
	const input = {
		cpf:  "407.302.170-27",
		items: [
			{ idProduct: 1, quantity: 1 },
			{ idProduct: 2, quantity: 1 },
			{ idProduct: 3, quantity: 3 }
		],
		from: "22060030",
		to: "88015600"
	};
	const output = await simulateFreight.execute(input);
	expect(output.freight).toBe(280);
});