import pgp from "pg-promise";
import CouponRepository from "./CouponRepository";

export default class CouponRepositoryDatabase implements CouponRepository{

    async getCoupon (code: string): Promise<any> {
        const connection = pgp()("postgres://downtownit:123456@localhost:5432/downtownit");
        const [couponData] = await connection.query("select * from cccat10.coupon where code = $1", [code]);
        await connection.$pool.end();
        console.log(couponData.body);
        return couponData;
    }
}