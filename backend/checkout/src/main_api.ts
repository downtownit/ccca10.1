import Checkout from "./application/usecase/Checkout";
import AxiosAdapter from "./infra/http/AxiosAdapter";
import CouponRepositoryDatabase from "./infra/repository/CouponRepositoryDatabase";
import CurrencyGatewayHttp from "./infra/gateway/CurrencyGatewayHttp";
import ExpressAdapter from "./infra/http/ExpressApadter";
import HttpController from "./infra/http/HttpController";
import OrderRepositoryDatabase from "./infra/repository/OrderRepositoryDatabase";
import PgPromise from "./infra/database/PgPromiseAdapter";
import ProductRepositoryDatabase from "./infra/repository/ProductRepositoryDatabase";
import GetProducts from "./application/usecase/GetProducts";
import AuthDecorator from "./application/decorator/AuthDecorator";
import LogDecorator from "./application/decorator/LogDecorator";

const connection = new PgPromise();
const httpClient = new AxiosAdapter;
const currencyGateway = new CurrencyGatewayHttp(httpClient);    
const productRepository = new ProductRepositoryDatabase(connection);
const couponRepository = new CouponRepositoryDatabase(connection);
const orderRepository = new OrderRepositoryDatabase(connection);
const checkout = new Checkout(currencyGateway, productRepository, couponRepository, orderRepository);
const getProducts = new GetProducts(productRepository)

const httpServer = new ExpressAdapter();
new HttpController(httpServer, new AuthDecorator(new LogDecorator(checkout)), new AuthDecorator(getProducts));
httpServer.listen(3000);