import TokenGenerator from "../../src/domain/entity/TokenGenerator";
import User from "../../src/domain/entity/User"

test("Deve gerar o token do usuário", async function () {
    const user = await User.create("rodbran@gmail.com", "abc123");
    const expiresIn = 10000000;
    const issueDate = new Date("2023-03-01T10:00:00");
    const tokenGenerator = new TokenGenerator("key");
    const token = tokenGenerator.generate(user, expiresIn, issueDate);
    expect(token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7pLOeX9nZs2DzLuYZcF5sGiCKEJKVDtph7ZPS4");
});

test("Deve validar o token do usuário", async function () {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7pLOeX9nZs2DzLuYZcF5sGiCKEJKVDtph7ZPS4";
    const tokenGenerator = new TokenGenerator("key");
    const payload = tokenGenerator.verify(token);
    expect(payload).toBeDefined();
    expect(payload.email).toBe("rodbran@gmail.com");
});

test("Deve tentar validar o token inválido", async function () {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZGJyYW5AZ21haWwuY29tIiwiaWF0IjoxNjc3Njc1NjAwMDAwLCJleHBpcmVzSW4iOjEwMDAwMDAwfQ.z8Wyk7zLuYZcF5sGiCKEJKVDtph7ZPS4";
    const tokenGenerator = new TokenGenerator("key");
    expect (() => tokenGenerator.verify(token)).toThrow(new Error("invalid signature"));
});


test("Deve tentar validar o formato JWT do token", async function () {
    const token = "HUAHAODDJOEELLEMFOJGOSDGJLNALDN5578948C85798549X7M5848990k7zLuYZcF5sGiCKEJKVDtph7ZPS4";
    const tokenGenerator = new TokenGenerator("key");
    expect (() => tokenGenerator.verify(token)).toThrow(new Error("jwt malformed"));
});


test("Deve ser informado um toke com formato JWT válido", async function () {
    const token = "";
    const tokenGenerator = new TokenGenerator("key");
    expect (() => tokenGenerator.verify(token)).toThrow(new Error("jwt must be provided"));
});