import Zipcode from "../../domain/entity/ZipCode";

export default interface ZipcodeRepository {
	get (code: string): Promise<Zipcode | undefined>;
}
