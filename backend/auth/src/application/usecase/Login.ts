import TokenGenerator from "../../domain/entity/TokenGenerator";
import UserRepository from "../repository/UserRepository";

export default class Login {
    
    constructor (readonly userRepository: UserRepository) {

    }

    async execute (input: Input): Promise<Output> {
        const user = await this.userRepository.get(input.email);
        if (!user) throw new Error("Validation failed");
        const isPasswordValid = await user.validatePassword(input.password);
        if (!isPasswordValid) throw new Error("Validation failed");
        const tokenGenerator = new TokenGenerator("key");
        if (typeof input.date === "string") {
            input.date = new Date(input.date);
        }
        const token = tokenGenerator.generate(user, 10000000, input.date);
        return {
            token
        }
    }
}

type Input = { 
    email: string,
    password: string,
    date: Date | string
}

type Output = {
    token: string
}