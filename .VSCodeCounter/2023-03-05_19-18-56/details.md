# Details

Date : 2023-03-05 19:18:56

Directory /Users/downtownit/development/branas.io/ccca10.1

Total : 53 files,  11291 codes, 86 comments, 621 blanks, all 11998 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/checkout/README.md](/backend/checkout/README.md) | Markdown | 2 | 0 | 0 | 2 |
| [backend/checkout/create.sql](/backend/checkout/create.sql) | SQL | 36 | 0 | 7 | 43 |
| [backend/checkout/drop.sql](/backend/checkout/drop.sql) | SQL | 4 | 1 | 0 | 5 |
| [backend/checkout/jest.config.js](/backend/checkout/jest.config.js) | JavaScript | 4 | 1 | 0 | 5 |
| [backend/checkout/package-lock.json](/backend/checkout/package-lock.json) | JSON | 7,260 | 0 | 1 | 7,261 |
| [backend/checkout/package.json](/backend/checkout/package.json) | JSON | 33 | 0 | 1 | 34 |
| [backend/checkout/src/api.ts](/backend/checkout/src/api.ts) | TypeScript | 28 | 0 | 3 | 31 |
| [backend/checkout/src/application/gateway/CurrencyGateway.ts](/backend/checkout/src/application/gateway/CurrencyGateway.ts) | TypeScript | 3 | 0 | 0 | 3 |
| [backend/checkout/src/application/repository/CouponRepository.ts](/backend/checkout/src/application/repository/CouponRepository.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/src/application/repository/OrderRepository.ts](/backend/checkout/src/application/repository/OrderRepository.ts) | TypeScript | 6 | 0 | 2 | 8 |
| [backend/checkout/src/application/repository/ProductRepository.ts](/backend/checkout/src/application/repository/ProductRepository.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [backend/checkout/src/application/usecase/Checkout.ts](/backend/checkout/src/application/usecase/Checkout.ts) | TypeScript | 61 | 0 | 6 | 67 |
| [backend/checkout/src/application/usecase/GetOrder.ts](/backend/checkout/src/application/usecase/GetOrder.ts) | TypeScript | 21 | 0 | 6 | 27 |
| [backend/checkout/src/application/usecase/SimulateFreight.ts](/backend/checkout/src/application/usecase/SimulateFreight.ts) | TypeScript | 27 | 0 | 5 | 32 |
| [backend/checkout/src/application/usecase/ValidateCoupon.ts](/backend/checkout/src/application/usecase/ValidateCoupon.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [backend/checkout/src/cli.ts](/backend/checkout/src/cli.ts) | TypeScript | 40 | 0 | 2 | 42 |
| [backend/checkout/src/domain/entity/Coupon.ts](/backend/checkout/src/domain/entity/Coupon.ts) | TypeScript | 10 | 0 | 3 | 13 |
| [backend/checkout/src/domain/entity/Cpf.ts](/backend/checkout/src/domain/entity/Cpf.ts) | TypeScript | 39 | 0 | 7 | 46 |
| [backend/checkout/src/domain/entity/CurrencyTable.ts](/backend/checkout/src/domain/entity/CurrencyTable.ts) | TypeScript | 14 | 0 | 4 | 18 |
| [backend/checkout/src/domain/entity/FreightCalculator.ts](/backend/checkout/src/domain/entity/FreightCalculator.ts) | TypeScript | 9 | 0 | 1 | 10 |
| [backend/checkout/src/domain/entity/Item.ts](/backend/checkout/src/domain/entity/Item.ts) | TypeScript | 4 | 0 | 3 | 7 |
| [backend/checkout/src/domain/entity/Order.ts](/backend/checkout/src/domain/entity/Order.ts) | TypeScript | 41 | 0 | 6 | 47 |
| [backend/checkout/src/domain/entity/Product.ts](/backend/checkout/src/domain/entity/Product.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [backend/checkout/src/infra/cli/CLIController.ts](/backend/checkout/src/infra/cli/CLIController.ts) | TypeScript | 42 | 0 | 2 | 44 |
| [backend/checkout/src/infra/cli/CLIHandler.ts](/backend/checkout/src/infra/cli/CLIHandler.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/checkout/src/infra/cli/CLIHandlerNode.ts](/backend/checkout/src/infra/cli/CLIHandlerNode.ts) | TypeScript | 13 | 0 | 2 | 15 |
| [backend/checkout/src/infra/database/Connection.ts](/backend/checkout/src/infra/database/Connection.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/src/infra/database/PgPromiseAdapter.ts](/backend/checkout/src/infra/database/PgPromiseAdapter.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [backend/checkout/src/infra/gateway/CurrencyGatewayHttp.ts](/backend/checkout/src/infra/gateway/CurrencyGatewayHttp.ts) | TypeScript | 10 | 0 | 3 | 13 |
| [backend/checkout/src/infra/http/AxiosAdapter.ts](/backend/checkout/src/infra/http/AxiosAdapter.ts) | TypeScript | 12 | 0 | 3 | 15 |
| [backend/checkout/src/infra/http/ExpressApadter.ts](/backend/checkout/src/infra/http/ExpressApadter.ts) | TypeScript | 24 | 0 | 5 | 29 |
| [backend/checkout/src/infra/http/HapiAdapter.ts](/backend/checkout/src/infra/http/HapiAdapter.ts) | TypeScript | 31 | 0 | 5 | 36 |
| [backend/checkout/src/infra/http/HttpClient.ts](/backend/checkout/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/checkout/src/infra/http/HttpController.ts](/backend/checkout/src/infra/http/HttpController.ts) | TypeScript | 10 | 0 | 1 | 11 |
| [backend/checkout/src/infra/http/HttpServer.ts](/backend/checkout/src/infra/http/HttpServer.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/checkout/src/infra/repository/CouponRepositoryDatabase.ts](/backend/checkout/src/infra/repository/CouponRepositoryDatabase.ts) | TypeScript | 11 | 0 | 5 | 16 |
| [backend/checkout/src/infra/repository/OrderRepositoryDatabase.ts](/backend/checkout/src/infra/repository/OrderRepositoryDatabase.ts) | TypeScript | 27 | 0 | 6 | 33 |
| [backend/checkout/src/infra/repository/ProductRepositoryDatabase.ts](/backend/checkout/src/infra/repository/ProductRepositoryDatabase.ts) | TypeScript | 11 | 0 | 4 | 15 |
| [backend/checkout/src/main_api.ts](/backend/checkout/src/main_api.ts) | TypeScript | 20 | 1 | 3 | 24 |
| [backend/checkout/src/main_api_currency.ts](/backend/checkout/src/main_api_currency.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [backend/checkout/src/main_cli.ts](/backend/checkout/src/main_cli.ts) | TypeScript | 18 | 0 | 2 | 20 |
| [backend/checkout/test/integration/Checkout.test.ts](/backend/checkout/test/integration/Checkout.test.ts) | TypeScript | 287 | 0 | 24 | 311 |
| [backend/checkout/test/integration/SimulateFreight.test.ts](/backend/checkout/test/integration/SimulateFreight.test.ts) | TypeScript | 29 | 0 | 4 | 33 |
| [backend/checkout/test/integration/ValidateCoupon.test.ts](/backend/checkout/test/integration/ValidateCoupon.test.ts) | TypeScript | 26 | 0 | 6 | 32 |
| [backend/checkout/test/integration/api.test.ts](/backend/checkout/test/integration/api.test.ts) | TypeScript | 129 | 0 | 11 | 140 |
| [backend/checkout/test/integration/cli.test.ts](/backend/checkout/test/integration/cli.test.ts) | TypeScript | 33 | 0 | 2 | 35 |
| [backend/checkout/test/unit/Coupon.test.ts](/backend/checkout/test/unit/Coupon.test.ts) | TypeScript | 9 | 0 | 4 | 13 |
| [backend/checkout/test/unit/Cpf.test.ts](/backend/checkout/test/unit/Cpf.test.ts) | TypeScript | 26 | 0 | 6 | 32 |
| [backend/checkout/test/unit/FreightCalculator.test.ts](/backend/checkout/test/unit/FreightCalculator.test.ts) | TypeScript | 17 | 0 | 3 | 20 |
| [backend/checkout/test/unit/Order.test.ts](/backend/checkout/test/unit/Order.test.ts) | TypeScript | 54 | 0 | 7 | 61 |
| [backend/checkout/test/unit/Product.test.ts](/backend/checkout/test/unit/Product.test.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/checkout/tsconfig.json](/backend/checkout/tsconfig.json) | JSON with Comments | 16 | 83 | 9 | 108 |
| [backend/checkout/yarn-error.log](/backend/checkout/yarn-error.log) | Log | 2,715 | 0 | 425 | 3,140 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)