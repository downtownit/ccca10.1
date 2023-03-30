import Verify from "../../src/application/usecase/Verify"

test("Deve verificar um token", async function() {
    const verify = new Verify();
    const payload = await verify.execute("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7pLOeX9nZs2DzLuYZcF5sGiCKEJKVDtph7ZPS4");
	expect(payload.email).toBe("rodbran@gmail.com");
});