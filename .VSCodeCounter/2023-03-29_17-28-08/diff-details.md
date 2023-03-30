# Diff Details

Date : 2023-03-29 17:28:08

Directory /Users/downtownit/development/branas.io/ccca10.1

Total : 44 files,  10568 codes, 94 comments, 532 blanks, all 11194 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [backend/auth/README.md](/backend/auth/README.md) | Markdown | 2 | 0 | 0 | 2 |
| [backend/auth/create.sql](/backend/auth/create.sql) | SQL | 36 | 0 | 7 | 43 |
| [backend/auth/drop.sql](/backend/auth/drop.sql) | SQL | 4 | 1 | 0 | 5 |
| [backend/auth/jest.config.js](/backend/auth/jest.config.js) | JavaScript | 4 | 1 | 0 | 5 |
| [backend/auth/package-lock.json](/backend/auth/package-lock.json) | JSON | 7,260 | 0 | 1 | 7,261 |
| [backend/auth/package.json](/backend/auth/package.json) | JSON | 34 | 0 | 1 | 35 |
| [backend/auth/src/application/repository/UserRepository.ts](/backend/auth/src/application/repository/UserRepository.ts) | TypeScript | 5 | 0 | 1 | 6 |
| [backend/auth/src/application/usecase/Login.ts](/backend/auth/src/application/usecase/Login.ts) | TypeScript | 28 | 0 | 6 | 34 |
| [backend/auth/src/application/usecase/Signup.ts](/backend/auth/src/application/usecase/Signup.ts) | TypeScript | 14 | 1 | 5 | 20 |
| [backend/auth/src/application/usecase/Verify.ts](/backend/auth/src/application/usecase/Verify.ts) | TypeScript | 9 | 1 | 3 | 13 |
| [backend/auth/src/domain/entity/Email.ts](/backend/auth/src/domain/entity/Email.ts) | TypeScript | 17 | 1 | 4 | 22 |
| [backend/auth/src/domain/entity/Password.ts](/backend/auth/src/domain/entity/Password.ts) | TypeScript | 25 | 0 | 6 | 31 |
| [backend/auth/src/domain/entity/TokenGenerator.ts](/backend/auth/src/domain/entity/TokenGenerator.ts) | TypeScript | 12 | 1 | 4 | 17 |
| [backend/auth/src/domain/entity/User.ts](/backend/auth/src/domain/entity/User.ts) | TypeScript | 15 | 0 | 3 | 18 |
| [backend/auth/src/infra/database/Connection.ts](/backend/auth/src/infra/database/Connection.ts) | TypeScript | 4 | 0 | 1 | 5 |
| [backend/auth/src/infra/database/PgPromiseAdapter.ts](/backend/auth/src/infra/database/PgPromiseAdapter.ts) | TypeScript | 14 | 0 | 5 | 19 |
| [backend/auth/src/infra/http/AxiosAdapter.ts](/backend/auth/src/infra/http/AxiosAdapter.ts) | TypeScript | 19 | 0 | 5 | 24 |
| [backend/auth/src/infra/http/ExpressApadter.ts](/backend/auth/src/infra/http/ExpressApadter.ts) | TypeScript | 26 | 0 | 4 | 30 |
| [backend/auth/src/infra/http/HapiAdapter.ts](/backend/auth/src/infra/http/HapiAdapter.ts) | TypeScript | 31 | 0 | 5 | 36 |
| [backend/auth/src/infra/http/HttpClient.ts](/backend/auth/src/infra/http/HttpClient.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/auth/src/infra/http/HttpController.ts](/backend/auth/src/infra/http/HttpController.ts) | TypeScript | 25 | 0 | 5 | 30 |
| [backend/auth/src/infra/http/HttpServer.ts](/backend/auth/src/infra/http/HttpServer.ts) | TypeScript | 4 | 0 | 0 | 4 |
| [backend/auth/src/main_api.ts](/backend/auth/src/main_api.ts) | TypeScript | 22 | 0 | 1 | 23 |
| [backend/auth/test/integration/Signup.test.ts](/backend/auth/test/integration/Signup.test.ts) | TypeScript | 25 | 0 | 4 | 29 |
| [backend/auth/test/integration/Verify.test.ts](/backend/auth/test/integration/Verify.test.ts) | TypeScript | 6 | 0 | 1 | 7 |
| [backend/auth/test/integration/api.test.ts](/backend/auth/test/integration/api.test.ts) | TypeScript | 18 | 0 | 4 | 22 |
| [backend/auth/test/unit/Email.test.ts](/backend/auth/test/unit/Email.test.ts) | TypeScript | 8 | 0 | 2 | 10 |
| [backend/auth/test/unit/Password.test.ts](/backend/auth/test/unit/Password.test.ts) | TypeScript | 11 | 0 | 3 | 14 |
| [backend/auth/test/unit/TokenGenerator.test.ts](/backend/auth/test/unit/TokenGenerator.test.ts) | TypeScript | 32 | 0 | 7 | 39 |
| [backend/auth/test/unit/User.test.ts](/backend/auth/test/unit/User.test.ts) | TypeScript | 11 | 0 | 2 | 13 |
| [backend/auth/tsconfig.json](/backend/auth/tsconfig.json) | JSON with Comments | 16 | 83 | 9 | 108 |
| [backend/auth/yarn-error.log](/backend/auth/yarn-error.log) | Log | 2,715 | 0 | 425 | 3,140 |
| [backend/checkout/src/application/gateway/FreightGateway.ts](/backend/checkout/src/application/gateway/FreightGateway.ts) | TypeScript | 2 | 0 | 0 | 2 |
| [backend/checkout/test/integration/Checkout.test.ts](/backend/checkout/test/integration/Checkout.test.ts) | TypeScript | 15 | 0 | 0 | 15 |
| [backend/freight/src/application/repository/ZipcodeRepository.ts](/backend/freight/src/application/repository/ZipcodeRepository.ts) | TypeScript | 4 | 0 | 2 | 6 |
| [backend/freight/src/application/usecase/CalculateFreight.ts](/backend/freight/src/application/usecase/CalculateFreight.ts) | TypeScript | 12 | 0 | 0 | 12 |
| [backend/freight/src/domain/entity/Coord.ts](/backend/freight/src/domain/entity/Coord.ts) | TypeScript | 4 | 1 | 0 | 5 |
| [backend/freight/src/domain/entity/DistanceCalculator.ts](/backend/freight/src/domain/entity/DistanceCalculator.ts) | TypeScript | 17 | 1 | 2 | 20 |
| [backend/freight/src/domain/entity/Zipcode.ts](/backend/freight/src/domain/entity/Zipcode.ts) | TypeScript | 7 | 1 | 2 | 10 |
| [backend/freight/src/main_api.ts](/backend/freight/src/main_api.ts) | TypeScript | 12 | 1 | -2 | 11 |
| [backend/freight/test/integration/CalculateFreight.test.ts](/backend/freight/test/integration/CalculateFreight.test.ts) | TypeScript | 39 | 0 | 6 | 45 |
| [backend/freight/test/integration/SimulateFreight.test.ts](/backend/freight/test/integration/SimulateFreight.test.ts) | TypeScript | -18 | 0 | -5 | -23 |
| [backend/freight/test/integration/api.test.ts](/backend/freight/test/integration/api.test.ts) | TypeScript | 10 | 0 | 1 | 11 |
| [backend/freight/test/unit/DistanceCalculator.test.ts](/backend/freight/test/unit/DistanceCalculator.test.ts) | TypeScript | 8 | 1 | 2 | 11 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details