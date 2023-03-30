import Email from "../../src/domain/entity/Email";

test("Deve criar um email válido", function () {
	const email = new Email("rodbran@gmail.com");
	expect(email.getValue()).toBe("rodbran@gmail.com");
});

test("Deve criar um email inválido", function () {
	expect(() => new Email("rodbran#gmail.com")).toThrow(new Error("Invalid email"));
});