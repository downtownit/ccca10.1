import axios from "axios";

axios.defaults.validateStatus = function () {
    return true;
}

test("Deve validar o fluxo de autenticação", async function () {
    const input = {
        email: "rodbran@gmail.com",
       password: "abc123",
        date: new Date("2023-03-01T10:00:00")
    };
    await axios.post("http://localhost:3004/sigup", input);
    const response = await axios.post("http://localhost:3004/login", input);
    const output = response.data;
    expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7pLOeX9nZs2DzLuYZcF5sGiCKEJKVDtph7ZPS4");

    const responseverify = await axios.post("http://localhost:3004/verify", { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7pLOeX9nZs2DzLuYZcF5sGiCKEJKVDtph7ZPS4" });
	const outputverify = responseverify.data;
	expect(outputverify.email).toBe("rodbran@gmail.com");
});
