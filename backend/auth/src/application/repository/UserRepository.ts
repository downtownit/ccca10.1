import User from "../../domain/entity/User";

export default interface UserRepository {
    save (use: User): Promise<void>;
    get (email: string): Promise<User>;
}