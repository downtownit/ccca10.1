# Details

Date : 2023-03-11 22:00:45

Directory /Users/downtownit/development/branas.io/ccca10.1

Total : 132 files,  32303 codes, 358 comments, 1679 blanks, all 34340 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/catalog/README.md](/backend/catalog/README.md) | Markdown | 2 | 0 | 0 | 2 |
| [backend/catalog/create.sql](/backend/catalog/create.sql) | SQL | 36 | 0 | 7 | 43 |
| [backend/catalog/drop.sql](/backend/catalog/drop.sql) | SQL | 4 | 1 | 0 | 5 |
| [backend/catalog/jest.config.js](/backend/catalog/jest.config.js) | JavaScript | 4 | 1 | 0 | 5 |
| [backend/catalog/package-lock.json](/backend/catalog/package-lock.json) | JSON | 7,260 | 0 | 1 | 7,261 |
| [backend/catalog/package.json](/backend/catalog/package.json) | JSON | 32 | 0 | 1 | 33 |
| [backend/catalog/src/application/repository/ProductRepository.ts](/backend/catalog/src/application/repository/ProductRepository.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [backend/catalog/src/application/usecase/GetProduct.ts](/backend/catalog/src/application/usecase/GetProduct.ts) | TypeScript | 26 | 0 | 4 | 30 |
| [backend/catalog/src/application/usecase/GetProducts.ts](/backend/catalog/src/application/usecase/GetProducts.ts) | TypeScript | 22 | 0 | 4 | 26 |
| [backend/catalog/src/domain/entity/Product.ts](/backend/catalog/src/domain/entity/Product.ts) | TypeScript | 11 | 0 | 3 | 14 |
| [backend/catalog/src/infra/database/Connection.ts](/backend/catalog/src/infra/database/Connection.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/catalog/src/infra/database/PgPromiseAdapter.ts](/backend/catalog/src/infra/database/PgPromiseAdapter.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [backend/catalog/src/infra/http/AxiosAdapter.ts](/backend/catalog/src/infra/http/AxiosAdapter.ts) | TypeScript | 19 | 0 | 5 | 24 |
| [backend/catalog/src/infra/http/ExpressApadter.ts](/backend/catalog/src/infra/http/ExpressApadter.ts) | TypeScript | 26 | 0 | 4 | 30 |
| [backend/catalog/src/infra/http/HapiAdapter.ts](/backend/catalog/src/infra/http/HapiAdapter.ts) | TypeScript | 31 | 0 | 5 | 36 |
| [backend/catalog/src/infra/http/HttpClient.ts](/backend/catalog/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/catalog/src/infra/http/HttpController.ts](/backend/catalog/src/infra/http/HttpController.ts) | TypeScript | 19 | 0 | 4 | 23 |
| [backend/catalog/src/infra/http/HttpServer.ts](/backend/catalog/src/infra/http/HttpServer.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/catalog/src/infra/repository/ProductRepositoryDatabase.ts](/backend/catalog/src/infra/repository/ProductRepositoryDatabase.ts) | TypeScript | 19 | 0 | 6 | 25 |
| [backend/catalog/src/main_api.ts](/backend/catalog/src/main_api.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/catalog/test/integration/GetProduct.test.ts](/backend/catalog/test/integration/GetProduct.test.ts) | TypeScript | 15 | 0 | 1 | 16 |
| [backend/catalog/test/integration/GetProducts.test.ts](/backend/catalog/test/integration/GetProducts.test.ts) | TypeScript | 11 | 0 | 1 | 12 |
| [backend/catalog/test/integration/api.test.ts](/backend/catalog/test/integration/api.test.ts) | TypeScript | 20 | 0 | 3 | 23 |
| [backend/catalog/test/unit/Product.test.ts](/backend/catalog/test/unit/Product.test.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/catalog/tsconfig.json](/backend/catalog/tsconfig.json) | JSON with Comments | 16 | 83 | 9 | 108 |
| [backend/catalog/yarn-error.log](/backend/catalog/yarn-error.log) | Log | 2,715 | 0 | 425 | 3,140 |
| [backend/checkout/README.md](/backend/checkout/README.md) | Markdown | 2 | 0 | 0 | 2 |
| [backend/checkout/create.sql](/backend/checkout/create.sql) | SQL | 36 | 0 | 7 | 43 |
| [backend/checkout/drop.sql](/backend/checkout/drop.sql) | SQL | 4 | 1 | 0 | 5 |
| [backend/checkout/jest.config.js](/backend/checkout/jest.config.js) | JavaScript | 4 | 1 | 0 | 5 |
| [backend/checkout/package-lock.json](/backend/checkout/package-lock.json) | JSON | 7,260 | 0 | 1 | 7,261 |
| [backend/checkout/package.json](/backend/checkout/package.json) | JSON | 32 | 0 | 1 | 33 |
| [backend/checkout/src/application/gateway/CatalogGateway.ts](/backend/checkout/src/application/gateway/CatalogGateway.ts) | TypeScript | 5 | 0 | 1 | 6 |
| [backend/checkout/src/application/gateway/CurrencyGateway.ts](/backend/checkout/src/application/gateway/CurrencyGateway.ts) | TypeScript | 3 | 0 | 0 | 3 |
| [backend/checkout/src/application/gateway/FreightGateway.ts](/backend/checkout/src/application/gateway/FreightGateway.ts) | TypeScript | 15 | 0 | 2 | 17 |
| [backend/checkout/src/application/repository/CouponRepository.ts](/backend/checkout/src/application/repository/CouponRepository.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/src/application/repository/OrderRepository.ts](/backend/checkout/src/application/repository/OrderRepository.ts) | TypeScript | 6 | 0 | 2 | 8 |
| [backend/checkout/src/application/repository/ProductRepository.ts](/backend/checkout/src/application/repository/ProductRepository.ts) | TypeScript | 5 | 0 | 2 | 7 |
| [backend/checkout/src/application/usecase/Checkout.ts](/backend/checkout/src/application/usecase/Checkout.ts) | TypeScript | 67 | 1 | 7 | 75 |
| [backend/checkout/src/application/usecase/GetOrder.ts](/backend/checkout/src/application/usecase/GetOrder.ts) | TypeScript | 21 | 0 | 6 | 27 |
| [backend/checkout/src/application/usecase/GetProducts.ts](/backend/checkout/src/application/usecase/GetProducts.ts) | TypeScript | 22 | 0 | 4 | 26 |
| [backend/checkout/src/application/usecase/SimulateFreight.ts](/backend/checkout/src/application/usecase/SimulateFreight.ts) | TypeScript | 32 | 0 | 5 | 37 |
| [backend/checkout/src/application/usecase/ValidateCoupon.ts](/backend/checkout/src/application/usecase/ValidateCoupon.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [backend/checkout/src/domain/entity/Coupon.ts](/backend/checkout/src/domain/entity/Coupon.ts) | TypeScript | 10 | 0 | 3 | 13 |
| [backend/checkout/src/domain/entity/Cpf.ts](/backend/checkout/src/domain/entity/Cpf.ts) | TypeScript | 39 | 0 | 7 | 46 |
| [backend/checkout/src/domain/entity/CurrencyTable.ts](/backend/checkout/src/domain/entity/CurrencyTable.ts) | TypeScript | 14 | 0 | 4 | 18 |
| [backend/checkout/src/domain/entity/Item.ts](/backend/checkout/src/domain/entity/Item.ts) | TypeScript | 4 | 0 | 3 | 7 |
| [backend/checkout/src/domain/entity/Order.ts](/backend/checkout/src/domain/entity/Order.ts) | TypeScript | 41 | 0 | 6 | 47 |
| [backend/checkout/src/domain/entity/Product.ts](/backend/checkout/src/domain/entity/Product.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [backend/checkout/src/infra/cli/CLIController.ts](/backend/checkout/src/infra/cli/CLIController.ts) | TypeScript | 42 | 0 | 2 | 44 |
| [backend/checkout/src/infra/cli/CLIHandler.ts](/backend/checkout/src/infra/cli/CLIHandler.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/checkout/src/infra/cli/CLIHandlerNode.ts](/backend/checkout/src/infra/cli/CLIHandlerNode.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/checkout/src/infra/database/Connection.ts](/backend/checkout/src/infra/database/Connection.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/src/infra/database/PgPromiseAdapter.ts](/backend/checkout/src/infra/database/PgPromiseAdapter.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [backend/checkout/src/infra/gateway/CatalogGatewayHttp.ts](/backend/checkout/src/infra/gateway/CatalogGatewayHttp.ts) | TypeScript | 19 | 0 | 4 | 23 |
| [backend/checkout/src/infra/gateway/CurrencyGatewayHttp.ts](/backend/checkout/src/infra/gateway/CurrencyGatewayHttp.ts) | TypeScript | 10 | 0 | 3 | 13 |
| [backend/checkout/src/infra/gateway/FreightGatewayHttp.ts](/backend/checkout/src/infra/gateway/FreightGatewayHttp.ts) | TypeScript | 10 | 0 | 4 | 14 |
| [backend/checkout/src/infra/http/AxiosAdapter.ts](/backend/checkout/src/infra/http/AxiosAdapter.ts) | TypeScript | 12 | 0 | 3 | 15 |
| [backend/checkout/src/infra/http/ExpressApadter.ts](/backend/checkout/src/infra/http/ExpressApadter.ts) | TypeScript | 26 | 0 | 4 | 30 |
| [backend/checkout/src/infra/http/HapiAdapter.ts](/backend/checkout/src/infra/http/HapiAdapter.ts) | TypeScript | 31 | 0 | 5 | 36 |
| [backend/checkout/src/infra/http/HttpClient.ts](/backend/checkout/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/checkout/src/infra/http/HttpController.ts](/backend/checkout/src/infra/http/HttpController.ts) | TypeScript | 19 | 0 | 3 | 22 |
| [backend/checkout/src/infra/http/HttpServer.ts](/backend/checkout/src/infra/http/HttpServer.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/checkout/src/infra/repository/CouponRepositoryDatabase.ts](/backend/checkout/src/infra/repository/CouponRepositoryDatabase.ts) | TypeScript | 11 | 0 | 5 | 16 |
| [backend/checkout/src/infra/repository/OrderRepositoryDatabase.ts](/backend/checkout/src/infra/repository/OrderRepositoryDatabase.ts) | TypeScript | 27 | 0 | 6 | 33 |
| [backend/checkout/src/infra/repository/ProductRepositoryDatabase.ts](/backend/checkout/src/infra/repository/ProductRepositoryDatabase.ts) | TypeScript | 19 | 0 | 6 | 25 |
| [backend/checkout/src/main_api.ts](/backend/checkout/src/main_api.ts) | TypeScript | 21 | 0 | 3 | 24 |
| [backend/checkout/src/main_cli.ts](/backend/checkout/src/main_cli.ts) | TypeScript | 18 | 0 | 2 | 20 |
| [backend/checkout/test/integration/Checkout.test.ts](/backend/checkout/test/integration/Checkout.test.ts) | TypeScript | 281 | 0 | 23 | 304 |
| [backend/checkout/test/integration/SimulateFreight.test.ts](/backend/checkout/test/integration/SimulateFreight.test.ts) | TypeScript | 29 | 0 | 4 | 33 |
| [backend/checkout/test/integration/ValidateCoupon.test.ts](/backend/checkout/test/integration/ValidateCoupon.test.ts) | TypeScript | 26 | 0 | 6 | 32 |
| [backend/checkout/test/integration/api.test.ts](/backend/checkout/test/integration/api.test.ts) | TypeScript | 123 | 13 | 12 | 148 |
| [backend/checkout/test/integration/cli.test.ts](/backend/checkout/test/integration/cli.test.ts) | TypeScript | 33 | 0 | 2 | 35 |
| [backend/checkout/test/integration/getProducts.test.ts](/backend/checkout/test/integration/getProducts.test.ts) | TypeScript | 11 | 0 | 1 | 12 |
| [backend/checkout/test/unit/Coupon.test.ts](/backend/checkout/test/unit/Coupon.test.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [backend/checkout/test/unit/Cpf.test.ts](/backend/checkout/test/unit/Cpf.test.ts) | TypeScript | 26 | 0 | 6 | 32 |
| [backend/checkout/test/unit/Order.test.ts](/backend/checkout/test/unit/Order.test.ts) | TypeScript | 54 | 0 | 7 | 61 |
| [backend/checkout/test/unit/Product.test.ts](/backend/checkout/test/unit/Product.test.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/tsconfig.json](/backend/checkout/tsconfig.json) | JSON with Comments | 16 | 83 | 9 | 108 |
| [backend/checkout/yarn-error.log](/backend/checkout/yarn-error.log) | Log | 2,715 | 0 | 425 | 3,140 |
| [backend/currency/package.json](/backend/currency/package.json) | JSON | 13 | 0 | 1 | 14 |
| [backend/currency/src/main_api.ts](/backend/currency/src/main_api.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [backend/currency/tsconfig.json](/backend/currency/tsconfig.json) | JSON with Comments | 10 | 85 | 9 | 104 |
| [backend/freight/README.md](/backend/freight/README.md) | Markdown | 2 | 0 | 0 | 2 |
| [backend/freight/create.sql](/backend/freight/create.sql) | SQL | 36 | 0 | 7 | 43 |
| [backend/freight/drop.sql](/backend/freight/drop.sql) | SQL | 4 | 1 | 0 | 5 |
| [backend/freight/jest.config.js](/backend/freight/jest.config.js) | JavaScript | 4 | 1 | 0 | 5 |
| [backend/freight/package-lock.json](/backend/freight/package-lock.json) | JSON | 7,260 | 0 | 1 | 7,261 |
| [backend/freight/package.json](/backend/freight/package.json) | JSON | 32 | 0 | 1 | 33 |
| [backend/freight/src/application/usecase/CalculateFreight.ts](/backend/freight/src/application/usecase/CalculateFreight.ts) | TypeScript | 23 | 0 | 5 | 28 |
| [backend/freight/src/domain/entity/FreightCalculator.ts](/backend/freight/src/domain/entity/FreightCalculator.ts) | TypeScript | 8 | 0 | 0 | 8 |
| [backend/freight/src/infra/database/Connection.ts](/backend/freight/src/infra/database/Connection.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/freight/src/infra/database/PgPromiseAdapter.ts](/backend/freight/src/infra/database/PgPromiseAdapter.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [backend/freight/src/infra/http/AxiosAdapter.ts](/backend/freight/src/infra/http/AxiosAdapter.ts) | TypeScript | 12 | 0 | 3 | 15 |
| [backend/freight/src/infra/http/ExpressApadter.ts](/backend/freight/src/infra/http/ExpressApadter.ts) | TypeScript | 26 | 0 | 4 | 30 |
| [backend/freight/src/infra/http/HapiAdapter.ts](/backend/freight/src/infra/http/HapiAdapter.ts) | TypeScript | 31 | 0 | 5 | 36 |
| [backend/freight/src/infra/http/HttpClient.ts](/backend/freight/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/freight/src/infra/http/HttpController.ts](/backend/freight/src/infra/http/HttpController.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/freight/src/infra/http/HttpServer.ts](/backend/freight/src/infra/http/HttpServer.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/freight/src/main_api.ts](/backend/freight/src/main_api.ts) | TypeScript | 11 | 0 | 3 | 14 |
| [backend/freight/test/integration/SimulateFreight.test.ts](/backend/freight/test/integration/SimulateFreight.test.ts) | TypeScript | 18 | 0 | 5 | 23 |
| [backend/freight/test/integration/api.test.ts](/backend/freight/test/integration/api.test.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/freight/test/unit/FreightCalculator.test.ts](/backend/freight/test/unit/FreightCalculator.test.ts) | TypeScript | 13 | 0 | 3 | 16 |
| [backend/freight/tsconfig.json](/backend/freight/tsconfig.json) | JSON with Comments | 16 | 83 | 9 | 108 |
| [backend/freight/yarn-error.log](/backend/freight/yarn-error.log) | Log | 2,715 | 0 | 425 | 3,140 |
| [frontend/README.md](/frontend/README.md) | Markdown | 11 | 0 | 8 | 19 |
| [frontend/index.html](/frontend/index.html) | HTML | 13 | 0 | 1 | 14 |
| [frontend/package.json](/frontend/package.json) | JSON | 25 | 0 | 1 | 26 |
| [frontend/public/vite.svg](/frontend/public/vite.svg) | XML | 1 | 0 | 0 | 1 |
| [frontend/src/App.vue](/frontend/src/App.vue) | vue | 8 | 0 | 4 | 12 |
| [frontend/src/assets/vue.svg](/frontend/src/assets/vue.svg) | XML | 1 | 0 | 0 | 1 |
| [frontend/src/entities/Item.ts](/frontend/src/entities/Item.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [frontend/src/entities/Order.ts](/frontend/src/entities/Order.ts) | TypeScript | 18 | 0 | 3 | 21 |
| [frontend/src/entities/Product.ts](/frontend/src/entities/Product.ts) | TypeScript | 8 | 0 | 4 | 12 |
| [frontend/src/formatter/MoneyFormatter.ts](/frontend/src/formatter/MoneyFormatter.ts) | TypeScript | 3 | 0 | 0 | 3 |
| [frontend/src/gateways/CheckoutGateway.ts](/frontend/src/gateways/CheckoutGateway.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [frontend/src/gateways/CheckoutGatwayHttp.ts](/frontend/src/gateways/CheckoutGatwayHttp.ts) | TypeScript | 19 | 0 | 1 | 20 |
| [frontend/src/infra/http/AxiosAdapter.ts](/frontend/src/infra/http/AxiosAdapter.ts) | TypeScript | 12 | 0 | 4 | 16 |
| [frontend/src/infra/http/FetchAdapter.ts](/frontend/src/infra/http/FetchAdapter.ts) | TypeScript | 18 | 0 | 4 | 22 |
| [frontend/src/infra/http/HttpClient.ts](/frontend/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [frontend/src/main.ts](/frontend/src/main.ts) | TypeScript | 11 | 1 | 2 | 14 |
| [frontend/src/shims-vue.d.ts](/frontend/src/shims-vue.d.ts) | TypeScript | 5 | 0 | 0 | 5 |
| [frontend/src/style.css](/frontend/src/style.css) | CSS | 61 | 0 | 5 | 66 |
| [frontend/src/views/CheckoutView.vue](/frontend/src/views/CheckoutView.vue) | vue | 41 | 0 | 8 | 49 |
| [frontend/src/vite-env.d.ts](/frontend/src/vite-env.d.ts) | TypeScript | 0 | 1 | 1 | 2 |
| [frontend/test/CheckoutView.test.ts](/frontend/test/CheckoutView.test.ts) | TypeScript | 51 | 0 | 4 | 55 |
| [frontend/test/Order.test.ts](/frontend/test/Order.test.ts) | TypeScript | 13 | 0 | 1 | 14 |
| [frontend/test/test.ts](/frontend/test/test.ts) | TypeScript | 0 | 0 | 1 | 1 |
| [frontend/tsconfig.json](/frontend/tsconfig.json) | JSON with Comments | 20 | 0 | 1 | 21 |
| [frontend/tsconfig.node.json](/frontend/tsconfig.node.json) | JSON | 9 | 0 | 1 | 10 |
| [frontend/vite.config.ts](/frontend/vite.config.ts) | TypeScript | 8 | 2 | 2 | 12 |
| [package.json](/package.json) | JSON | 6 | 0 | 1 | 7 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)