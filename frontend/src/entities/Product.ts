import format from "../formatter/MoneyFormatter";

export default class Product {

	constructor (readonly idProduct: number, readonly description: string, readonly price: number) {
	}

	getFormattedPrice () {
		return format(this.price);
	}
}
