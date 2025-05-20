
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Symptom
 * 
 */
export type Symptom = $Result.DefaultSelection<Prisma.$SymptomPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model MedicineAvailability
 * 
 */
export type MedicineAvailability = $Result.DefaultSelection<Prisma.$MedicineAvailabilityPayload>
/**
 * Model SymptomRecommendation
 * 
 */
export type SymptomRecommendation = $Result.DefaultSelection<Prisma.$SymptomRecommendationPayload>
/**
 * Model ConsultationHistory
 * 
 */
export type ConsultationHistory = $Result.DefaultSelection<Prisma.$ConsultationHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.symptom`: Exposes CRUD operations for the **Symptom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Symptoms
    * const symptoms = await prisma.symptom.findMany()
    * ```
    */
  get symptom(): Prisma.SymptomDelegate<ExtArgs>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs>;

  /**
   * `prisma.medicineAvailability`: Exposes CRUD operations for the **MedicineAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineAvailabilities
    * const medicineAvailabilities = await prisma.medicineAvailability.findMany()
    * ```
    */
  get medicineAvailability(): Prisma.MedicineAvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.symptomRecommendation`: Exposes CRUD operations for the **SymptomRecommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SymptomRecommendations
    * const symptomRecommendations = await prisma.symptomRecommendation.findMany()
    * ```
    */
  get symptomRecommendation(): Prisma.SymptomRecommendationDelegate<ExtArgs>;

  /**
   * `prisma.consultationHistory`: Exposes CRUD operations for the **ConsultationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationHistories
    * const consultationHistories = await prisma.consultationHistory.findMany()
    * ```
    */
  get consultationHistory(): Prisma.ConsultationHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Country: 'Country',
    Symptom: 'Symptom',
    Medicine: 'Medicine',
    MedicineAvailability: 'MedicineAvailability',
    SymptomRecommendation: 'SymptomRecommendation',
    ConsultationHistory: 'ConsultationHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "country" | "symptom" | "medicine" | "medicineAvailability" | "symptomRecommendation" | "consultationHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Symptom: {
        payload: Prisma.$SymptomPayload<ExtArgs>
        fields: Prisma.SymptomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SymptomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SymptomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findFirst: {
            args: Prisma.SymptomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SymptomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          findMany: {
            args: Prisma.SymptomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          create: {
            args: Prisma.SymptomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          createMany: {
            args: Prisma.SymptomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SymptomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>[]
          }
          delete: {
            args: Prisma.SymptomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          update: {
            args: Prisma.SymptomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          deleteMany: {
            args: Prisma.SymptomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SymptomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SymptomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomPayload>
          }
          aggregate: {
            args: Prisma.SymptomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSymptom>
          }
          groupBy: {
            args: Prisma.SymptomGroupByArgs<ExtArgs>
            result: $Utils.Optional<SymptomGroupByOutputType>[]
          }
          count: {
            args: Prisma.SymptomCountArgs<ExtArgs>
            result: $Utils.Optional<SymptomCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      MedicineAvailability: {
        payload: Prisma.$MedicineAvailabilityPayload<ExtArgs>
        fields: Prisma.MedicineAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.MedicineAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          findMany: {
            args: Prisma.MedicineAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>[]
          }
          create: {
            args: Prisma.MedicineAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          createMany: {
            args: Prisma.MedicineAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.MedicineAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          update: {
            args: Prisma.MedicineAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.MedicineAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicineAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.MedicineAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineAvailability>
          }
          groupBy: {
            args: Prisma.MedicineAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      SymptomRecommendation: {
        payload: Prisma.$SymptomRecommendationPayload<ExtArgs>
        fields: Prisma.SymptomRecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SymptomRecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SymptomRecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          findFirst: {
            args: Prisma.SymptomRecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SymptomRecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          findMany: {
            args: Prisma.SymptomRecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>[]
          }
          create: {
            args: Prisma.SymptomRecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          createMany: {
            args: Prisma.SymptomRecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SymptomRecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>[]
          }
          delete: {
            args: Prisma.SymptomRecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          update: {
            args: Prisma.SymptomRecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          deleteMany: {
            args: Prisma.SymptomRecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SymptomRecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SymptomRecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SymptomRecommendationPayload>
          }
          aggregate: {
            args: Prisma.SymptomRecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSymptomRecommendation>
          }
          groupBy: {
            args: Prisma.SymptomRecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SymptomRecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SymptomRecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<SymptomRecommendationCountAggregateOutputType> | number
          }
        }
      }
      ConsultationHistory: {
        payload: Prisma.$ConsultationHistoryPayload<ExtArgs>
        fields: Prisma.ConsultationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          findFirst: {
            args: Prisma.ConsultationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          findMany: {
            args: Prisma.ConsultationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>[]
          }
          create: {
            args: Prisma.ConsultationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          createMany: {
            args: Prisma.ConsultationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>[]
          }
          delete: {
            args: Prisma.ConsultationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          update: {
            args: Prisma.ConsultationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConsultationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationHistoryPayload>
          }
          aggregate: {
            args: Prisma.ConsultationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationHistory>
          }
          groupBy: {
            args: Prisma.ConsultationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    medicines: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | CountryCountOutputTypeCountMedicinesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountMedicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAvailabilityWhereInput
  }


  /**
   * Count Type SymptomCountOutputType
   */

  export type SymptomCountOutputType = {
    recommendations: number
  }

  export type SymptomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | SymptomCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * SymptomCountOutputType without action
   */
  export type SymptomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomCountOutputType
     */
    select?: SymptomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SymptomCountOutputType without action
   */
  export type SymptomCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomRecommendationWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    availability: number
    recommendations: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | MedicineCountOutputTypeCountAvailabilityArgs
    recommendations?: boolean | MedicineCountOutputTypeCountRecommendationsArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAvailabilityWhereInput
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomRecommendationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    name: string
    code: string
    createdAt: Date
    updatedAt: Date
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicines?: boolean | Country$medicinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicines?: boolean | Country$medicinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      medicines: Prisma.$MedicineAvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicines<T extends Country$medicinesArgs<ExtArgs> = {}>(args?: Subset<T, Country$medicinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly name: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly createdAt: FieldRef<"Country", 'DateTime'>
    readonly updatedAt: FieldRef<"Country", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }

  /**
   * Country.medicines
   */
  export type Country$medicinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    where?: MedicineAvailabilityWhereInput
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    cursor?: MedicineAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineAvailabilityScalarFieldEnum | MedicineAvailabilityScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Symptom
   */

  export type AggregateSymptom = {
    _count: SymptomCountAggregateOutputType | null
    _avg: SymptomAvgAggregateOutputType | null
    _sum: SymptomSumAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  export type SymptomAvgAggregateOutputType = {
    id: number | null
  }

  export type SymptomSumAggregateOutputType = {
    id: number | null
  }

  export type SymptomMinAggregateOutputType = {
    id: number | null
    descriptionEn: string | null
    descriptionEs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SymptomMaxAggregateOutputType = {
    id: number | null
    descriptionEn: string | null
    descriptionEs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SymptomCountAggregateOutputType = {
    id: number
    descriptionEn: number
    descriptionEs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SymptomAvgAggregateInputType = {
    id?: true
  }

  export type SymptomSumAggregateInputType = {
    id?: true
  }

  export type SymptomMinAggregateInputType = {
    id?: true
    descriptionEn?: true
    descriptionEs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SymptomMaxAggregateInputType = {
    id?: true
    descriptionEn?: true
    descriptionEs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SymptomCountAggregateInputType = {
    id?: true
    descriptionEn?: true
    descriptionEs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SymptomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptom to aggregate.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Symptoms
    **/
    _count?: true | SymptomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SymptomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SymptomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SymptomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SymptomMaxAggregateInputType
  }

  export type GetSymptomAggregateType<T extends SymptomAggregateArgs> = {
        [P in keyof T & keyof AggregateSymptom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSymptom[P]>
      : GetScalarType<T[P], AggregateSymptom[P]>
  }




  export type SymptomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomWhereInput
    orderBy?: SymptomOrderByWithAggregationInput | SymptomOrderByWithAggregationInput[]
    by: SymptomScalarFieldEnum[] | SymptomScalarFieldEnum
    having?: SymptomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SymptomCountAggregateInputType | true
    _avg?: SymptomAvgAggregateInputType
    _sum?: SymptomSumAggregateInputType
    _min?: SymptomMinAggregateInputType
    _max?: SymptomMaxAggregateInputType
  }

  export type SymptomGroupByOutputType = {
    id: number
    descriptionEn: string
    descriptionEs: string
    createdAt: Date
    updatedAt: Date
    _count: SymptomCountAggregateOutputType | null
    _avg: SymptomAvgAggregateOutputType | null
    _sum: SymptomSumAggregateOutputType | null
    _min: SymptomMinAggregateOutputType | null
    _max: SymptomMaxAggregateOutputType | null
  }

  type GetSymptomGroupByPayload<T extends SymptomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SymptomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SymptomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SymptomGroupByOutputType[P]>
            : GetScalarType<T[P], SymptomGroupByOutputType[P]>
        }
      >
    >


  export type SymptomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    recommendations?: boolean | Symptom$recommendationsArgs<ExtArgs>
    _count?: boolean | SymptomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptom"]>

  export type SymptomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["symptom"]>

  export type SymptomSelectScalar = {
    id?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SymptomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recommendations?: boolean | Symptom$recommendationsArgs<ExtArgs>
    _count?: boolean | SymptomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SymptomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SymptomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Symptom"
    objects: {
      recommendations: Prisma.$SymptomRecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descriptionEn: string
      descriptionEs: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["symptom"]>
    composites: {}
  }

  type SymptomGetPayload<S extends boolean | null | undefined | SymptomDefaultArgs> = $Result.GetResult<Prisma.$SymptomPayload, S>

  type SymptomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SymptomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SymptomCountAggregateInputType | true
    }

  export interface SymptomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Symptom'], meta: { name: 'Symptom' } }
    /**
     * Find zero or one Symptom that matches the filter.
     * @param {SymptomFindUniqueArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SymptomFindUniqueArgs>(args: SelectSubset<T, SymptomFindUniqueArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Symptom that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SymptomFindUniqueOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SymptomFindUniqueOrThrowArgs>(args: SelectSubset<T, SymptomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Symptom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SymptomFindFirstArgs>(args?: SelectSubset<T, SymptomFindFirstArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Symptom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindFirstOrThrowArgs} args - Arguments to find a Symptom
     * @example
     * // Get one Symptom
     * const symptom = await prisma.symptom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SymptomFindFirstOrThrowArgs>(args?: SelectSubset<T, SymptomFindFirstOrThrowArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Symptoms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Symptoms
     * const symptoms = await prisma.symptom.findMany()
     * 
     * // Get first 10 Symptoms
     * const symptoms = await prisma.symptom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const symptomWithIdOnly = await prisma.symptom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SymptomFindManyArgs>(args?: SelectSubset<T, SymptomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Symptom.
     * @param {SymptomCreateArgs} args - Arguments to create a Symptom.
     * @example
     * // Create one Symptom
     * const Symptom = await prisma.symptom.create({
     *   data: {
     *     // ... data to create a Symptom
     *   }
     * })
     * 
     */
    create<T extends SymptomCreateArgs>(args: SelectSubset<T, SymptomCreateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Symptoms.
     * @param {SymptomCreateManyArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptom = await prisma.symptom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SymptomCreateManyArgs>(args?: SelectSubset<T, SymptomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Symptoms and returns the data saved in the database.
     * @param {SymptomCreateManyAndReturnArgs} args - Arguments to create many Symptoms.
     * @example
     * // Create many Symptoms
     * const symptom = await prisma.symptom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Symptoms and only return the `id`
     * const symptomWithIdOnly = await prisma.symptom.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SymptomCreateManyAndReturnArgs>(args?: SelectSubset<T, SymptomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Symptom.
     * @param {SymptomDeleteArgs} args - Arguments to delete one Symptom.
     * @example
     * // Delete one Symptom
     * const Symptom = await prisma.symptom.delete({
     *   where: {
     *     // ... filter to delete one Symptom
     *   }
     * })
     * 
     */
    delete<T extends SymptomDeleteArgs>(args: SelectSubset<T, SymptomDeleteArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Symptom.
     * @param {SymptomUpdateArgs} args - Arguments to update one Symptom.
     * @example
     * // Update one Symptom
     * const symptom = await prisma.symptom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SymptomUpdateArgs>(args: SelectSubset<T, SymptomUpdateArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Symptoms.
     * @param {SymptomDeleteManyArgs} args - Arguments to filter Symptoms to delete.
     * @example
     * // Delete a few Symptoms
     * const { count } = await prisma.symptom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SymptomDeleteManyArgs>(args?: SelectSubset<T, SymptomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Symptoms
     * const symptom = await prisma.symptom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SymptomUpdateManyArgs>(args: SelectSubset<T, SymptomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Symptom.
     * @param {SymptomUpsertArgs} args - Arguments to update or create a Symptom.
     * @example
     * // Update or create a Symptom
     * const symptom = await prisma.symptom.upsert({
     *   create: {
     *     // ... data to create a Symptom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Symptom we want to update
     *   }
     * })
     */
    upsert<T extends SymptomUpsertArgs>(args: SelectSubset<T, SymptomUpsertArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Symptoms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomCountArgs} args - Arguments to filter Symptoms to count.
     * @example
     * // Count the number of Symptoms
     * const count = await prisma.symptom.count({
     *   where: {
     *     // ... the filter for the Symptoms we want to count
     *   }
     * })
    **/
    count<T extends SymptomCountArgs>(
      args?: Subset<T, SymptomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SymptomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SymptomAggregateArgs>(args: Subset<T, SymptomAggregateArgs>): Prisma.PrismaPromise<GetSymptomAggregateType<T>>

    /**
     * Group by Symptom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SymptomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SymptomGroupByArgs['orderBy'] }
        : { orderBy?: SymptomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SymptomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSymptomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Symptom model
   */
  readonly fields: SymptomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Symptom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SymptomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    recommendations<T extends Symptom$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Symptom$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Symptom model
   */ 
  interface SymptomFieldRefs {
    readonly id: FieldRef<"Symptom", 'Int'>
    readonly descriptionEn: FieldRef<"Symptom", 'String'>
    readonly descriptionEs: FieldRef<"Symptom", 'String'>
    readonly createdAt: FieldRef<"Symptom", 'DateTime'>
    readonly updatedAt: FieldRef<"Symptom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Symptom findUnique
   */
  export type SymptomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findUniqueOrThrow
   */
  export type SymptomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom findFirst
   */
  export type SymptomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findFirstOrThrow
   */
  export type SymptomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptom to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Symptoms.
     */
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom findMany
   */
  export type SymptomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter, which Symptoms to fetch.
     */
    where?: SymptomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Symptoms to fetch.
     */
    orderBy?: SymptomOrderByWithRelationInput | SymptomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Symptoms.
     */
    cursor?: SymptomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Symptoms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Symptoms.
     */
    skip?: number
    distinct?: SymptomScalarFieldEnum | SymptomScalarFieldEnum[]
  }

  /**
   * Symptom create
   */
  export type SymptomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to create a Symptom.
     */
    data: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
  }

  /**
   * Symptom createMany
   */
  export type SymptomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomCreateManyInput | SymptomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Symptom createManyAndReturn
   */
  export type SymptomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Symptoms.
     */
    data: SymptomCreateManyInput | SymptomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Symptom update
   */
  export type SymptomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The data needed to update a Symptom.
     */
    data: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
    /**
     * Choose, which Symptom to update.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom updateMany
   */
  export type SymptomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Symptoms.
     */
    data: XOR<SymptomUpdateManyMutationInput, SymptomUncheckedUpdateManyInput>
    /**
     * Filter which Symptoms to update
     */
    where?: SymptomWhereInput
  }

  /**
   * Symptom upsert
   */
  export type SymptomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * The filter to search for the Symptom to update in case it exists.
     */
    where: SymptomWhereUniqueInput
    /**
     * In case the Symptom found by the `where` argument doesn't exist, create a new Symptom with this data.
     */
    create: XOR<SymptomCreateInput, SymptomUncheckedCreateInput>
    /**
     * In case the Symptom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SymptomUpdateInput, SymptomUncheckedUpdateInput>
  }

  /**
   * Symptom delete
   */
  export type SymptomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
    /**
     * Filter which Symptom to delete.
     */
    where: SymptomWhereUniqueInput
  }

  /**
   * Symptom deleteMany
   */
  export type SymptomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Symptoms to delete
     */
    where?: SymptomWhereInput
  }

  /**
   * Symptom.recommendations
   */
  export type Symptom$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    where?: SymptomRecommendationWhereInput
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    cursor?: SymptomRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SymptomRecommendationScalarFieldEnum | SymptomRecommendationScalarFieldEnum[]
  }

  /**
   * Symptom without action
   */
  export type SymptomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Symptom
     */
    select?: SymptomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineAvgAggregateOutputType = {
    id: number | null
  }

  export type MedicineSumAggregateOutputType = {
    id: number | null
  }

  export type MedicineMinAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameEs: string | null
    descriptionEn: string | null
    descriptionEs: string | null
    instructionsEn: string | null
    instructionsEs: string | null
    contraindicationsEn: string | null
    contraindicationsEs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: number | null
    nameEn: string | null
    nameEs: string | null
    descriptionEn: string | null
    descriptionEs: string | null
    instructionsEn: string | null
    instructionsEs: string | null
    contraindicationsEn: string | null
    contraindicationsEs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    nameEn: number
    nameEs: number
    descriptionEn: number
    descriptionEs: number
    instructionsEn: number
    instructionsEs: number
    contraindicationsEn: number
    contraindicationsEs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAvgAggregateInputType = {
    id?: true
  }

  export type MedicineSumAggregateInputType = {
    id?: true
  }

  export type MedicineMinAggregateInputType = {
    id?: true
    nameEn?: true
    nameEs?: true
    descriptionEn?: true
    descriptionEs?: true
    instructionsEn?: true
    instructionsEs?: true
    contraindicationsEn?: true
    contraindicationsEs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    nameEn?: true
    nameEs?: true
    descriptionEn?: true
    descriptionEs?: true
    instructionsEn?: true
    instructionsEs?: true
    contraindicationsEn?: true
    contraindicationsEs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    nameEn?: true
    nameEs?: true
    descriptionEn?: true
    descriptionEs?: true
    instructionsEn?: true
    instructionsEs?: true
    contraindicationsEn?: true
    contraindicationsEs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _avg?: MedicineAvgAggregateInputType
    _sum?: MedicineSumAggregateInputType
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: number
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt: Date
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _avg: MedicineAvgAggregateOutputType | null
    _sum: MedicineSumAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameEs?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    instructionsEn?: boolean
    instructionsEs?: boolean
    contraindicationsEn?: boolean
    contraindicationsEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    availability?: boolean | Medicine$availabilityArgs<ExtArgs>
    recommendations?: boolean | Medicine$recommendationsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nameEn?: boolean
    nameEs?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    instructionsEn?: boolean
    instructionsEs?: boolean
    contraindicationsEn?: boolean
    contraindicationsEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    nameEn?: boolean
    nameEs?: boolean
    descriptionEn?: boolean
    descriptionEs?: boolean
    instructionsEn?: boolean
    instructionsEs?: boolean
    contraindicationsEn?: boolean
    contraindicationsEs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | Medicine$availabilityArgs<ExtArgs>
    recommendations?: boolean | Medicine$recommendationsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      availability: Prisma.$MedicineAvailabilityPayload<ExtArgs>[]
      recommendations: Prisma.$SymptomRecommendationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nameEn: string
      nameEs: string
      descriptionEn: string
      descriptionEs: string
      instructionsEn: string
      instructionsEs: string
      contraindicationsEn: string
      contraindicationsEs: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    availability<T extends Medicine$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends Medicine$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */ 
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'Int'>
    readonly nameEn: FieldRef<"Medicine", 'String'>
    readonly nameEs: FieldRef<"Medicine", 'String'>
    readonly descriptionEn: FieldRef<"Medicine", 'String'>
    readonly descriptionEs: FieldRef<"Medicine", 'String'>
    readonly instructionsEn: FieldRef<"Medicine", 'String'>
    readonly instructionsEs: FieldRef<"Medicine", 'String'>
    readonly contraindicationsEn: FieldRef<"Medicine", 'String'>
    readonly contraindicationsEs: FieldRef<"Medicine", 'String'>
    readonly createdAt: FieldRef<"Medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
  }

  /**
   * Medicine.availability
   */
  export type Medicine$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    where?: MedicineAvailabilityWhereInput
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    cursor?: MedicineAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineAvailabilityScalarFieldEnum | MedicineAvailabilityScalarFieldEnum[]
  }

  /**
   * Medicine.recommendations
   */
  export type Medicine$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    where?: SymptomRecommendationWhereInput
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    cursor?: SymptomRecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SymptomRecommendationScalarFieldEnum | SymptomRecommendationScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model MedicineAvailability
   */

  export type AggregateMedicineAvailability = {
    _count: MedicineAvailabilityCountAggregateOutputType | null
    _avg: MedicineAvailabilityAvgAggregateOutputType | null
    _sum: MedicineAvailabilitySumAggregateOutputType | null
    _min: MedicineAvailabilityMinAggregateOutputType | null
    _max: MedicineAvailabilityMaxAggregateOutputType | null
  }

  export type MedicineAvailabilityAvgAggregateOutputType = {
    id: number | null
    medicineId: number | null
    countryId: number | null
  }

  export type MedicineAvailabilitySumAggregateOutputType = {
    id: number | null
    medicineId: number | null
    countryId: number | null
  }

  export type MedicineAvailabilityMinAggregateOutputType = {
    id: number | null
    medicineId: number | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineAvailabilityMaxAggregateOutputType = {
    id: number | null
    medicineId: number | null
    countryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineAvailabilityCountAggregateOutputType = {
    id: number
    medicineId: number
    countryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAvailabilityAvgAggregateInputType = {
    id?: true
    medicineId?: true
    countryId?: true
  }

  export type MedicineAvailabilitySumAggregateInputType = {
    id?: true
    medicineId?: true
    countryId?: true
  }

  export type MedicineAvailabilityMinAggregateInputType = {
    id?: true
    medicineId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineAvailabilityMaxAggregateInputType = {
    id?: true
    medicineId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineAvailabilityCountAggregateInputType = {
    id?: true
    medicineId?: true
    countryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineAvailability to aggregate.
     */
    where?: MedicineAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAvailabilities to fetch.
     */
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineAvailabilities
    **/
    _count?: true | MedicineAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineAvailabilityMaxAggregateInputType
  }

  export type GetMedicineAvailabilityAggregateType<T extends MedicineAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineAvailability[P]>
      : GetScalarType<T[P], AggregateMedicineAvailability[P]>
  }




  export type MedicineAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAvailabilityWhereInput
    orderBy?: MedicineAvailabilityOrderByWithAggregationInput | MedicineAvailabilityOrderByWithAggregationInput[]
    by: MedicineAvailabilityScalarFieldEnum[] | MedicineAvailabilityScalarFieldEnum
    having?: MedicineAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineAvailabilityCountAggregateInputType | true
    _avg?: MedicineAvailabilityAvgAggregateInputType
    _sum?: MedicineAvailabilitySumAggregateInputType
    _min?: MedicineAvailabilityMinAggregateInputType
    _max?: MedicineAvailabilityMaxAggregateInputType
  }

  export type MedicineAvailabilityGroupByOutputType = {
    id: number
    medicineId: number
    countryId: number
    createdAt: Date
    updatedAt: Date
    _count: MedicineAvailabilityCountAggregateOutputType | null
    _avg: MedicineAvailabilityAvgAggregateOutputType | null
    _sum: MedicineAvailabilitySumAggregateOutputType | null
    _min: MedicineAvailabilityMinAggregateOutputType | null
    _max: MedicineAvailabilityMaxAggregateOutputType | null
  }

  type GetMedicineAvailabilityGroupByPayload<T extends MedicineAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type MedicineAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineAvailability"]>

  export type MedicineAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicineId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineAvailability"]>

  export type MedicineAvailabilitySelectScalar = {
    id?: boolean
    medicineId?: boolean
    countryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type MedicineAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $MedicineAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineAvailability"
    objects: {
      medicine: Prisma.$MedicinePayload<ExtArgs>
      country: Prisma.$CountryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      medicineId: number
      countryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicineAvailability"]>
    composites: {}
  }

  type MedicineAvailabilityGetPayload<S extends boolean | null | undefined | MedicineAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$MedicineAvailabilityPayload, S>

  type MedicineAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicineAvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicineAvailabilityCountAggregateInputType | true
    }

  export interface MedicineAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineAvailability'], meta: { name: 'MedicineAvailability' } }
    /**
     * Find zero or one MedicineAvailability that matches the filter.
     * @param {MedicineAvailabilityFindUniqueArgs} args - Arguments to find a MedicineAvailability
     * @example
     * // Get one MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineAvailabilityFindUniqueArgs>(args: SelectSubset<T, MedicineAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MedicineAvailability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicineAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a MedicineAvailability
     * @example
     * // Get one MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MedicineAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityFindFirstArgs} args - Arguments to find a MedicineAvailability
     * @example
     * // Get one MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineAvailabilityFindFirstArgs>(args?: SelectSubset<T, MedicineAvailabilityFindFirstArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MedicineAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityFindFirstOrThrowArgs} args - Arguments to find a MedicineAvailability
     * @example
     * // Get one MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MedicineAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineAvailabilities
     * const medicineAvailabilities = await prisma.medicineAvailability.findMany()
     * 
     * // Get first 10 MedicineAvailabilities
     * const medicineAvailabilities = await prisma.medicineAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineAvailabilityWithIdOnly = await prisma.medicineAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineAvailabilityFindManyArgs>(args?: SelectSubset<T, MedicineAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MedicineAvailability.
     * @param {MedicineAvailabilityCreateArgs} args - Arguments to create a MedicineAvailability.
     * @example
     * // Create one MedicineAvailability
     * const MedicineAvailability = await prisma.medicineAvailability.create({
     *   data: {
     *     // ... data to create a MedicineAvailability
     *   }
     * })
     * 
     */
    create<T extends MedicineAvailabilityCreateArgs>(args: SelectSubset<T, MedicineAvailabilityCreateArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MedicineAvailabilities.
     * @param {MedicineAvailabilityCreateManyArgs} args - Arguments to create many MedicineAvailabilities.
     * @example
     * // Create many MedicineAvailabilities
     * const medicineAvailability = await prisma.medicineAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineAvailabilityCreateManyArgs>(args?: SelectSubset<T, MedicineAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineAvailabilities and returns the data saved in the database.
     * @param {MedicineAvailabilityCreateManyAndReturnArgs} args - Arguments to create many MedicineAvailabilities.
     * @example
     * // Create many MedicineAvailabilities
     * const medicineAvailability = await prisma.medicineAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineAvailabilities and only return the `id`
     * const medicineAvailabilityWithIdOnly = await prisma.medicineAvailability.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MedicineAvailability.
     * @param {MedicineAvailabilityDeleteArgs} args - Arguments to delete one MedicineAvailability.
     * @example
     * // Delete one MedicineAvailability
     * const MedicineAvailability = await prisma.medicineAvailability.delete({
     *   where: {
     *     // ... filter to delete one MedicineAvailability
     *   }
     * })
     * 
     */
    delete<T extends MedicineAvailabilityDeleteArgs>(args: SelectSubset<T, MedicineAvailabilityDeleteArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MedicineAvailability.
     * @param {MedicineAvailabilityUpdateArgs} args - Arguments to update one MedicineAvailability.
     * @example
     * // Update one MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineAvailabilityUpdateArgs>(args: SelectSubset<T, MedicineAvailabilityUpdateArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MedicineAvailabilities.
     * @param {MedicineAvailabilityDeleteManyArgs} args - Arguments to filter MedicineAvailabilities to delete.
     * @example
     * // Delete a few MedicineAvailabilities
     * const { count } = await prisma.medicineAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineAvailabilityDeleteManyArgs>(args?: SelectSubset<T, MedicineAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineAvailabilities
     * const medicineAvailability = await prisma.medicineAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineAvailabilityUpdateManyArgs>(args: SelectSubset<T, MedicineAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MedicineAvailability.
     * @param {MedicineAvailabilityUpsertArgs} args - Arguments to update or create a MedicineAvailability.
     * @example
     * // Update or create a MedicineAvailability
     * const medicineAvailability = await prisma.medicineAvailability.upsert({
     *   create: {
     *     // ... data to create a MedicineAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineAvailability we want to update
     *   }
     * })
     */
    upsert<T extends MedicineAvailabilityUpsertArgs>(args: SelectSubset<T, MedicineAvailabilityUpsertArgs<ExtArgs>>): Prisma__MedicineAvailabilityClient<$Result.GetResult<Prisma.$MedicineAvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MedicineAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityCountArgs} args - Arguments to filter MedicineAvailabilities to count.
     * @example
     * // Count the number of MedicineAvailabilities
     * const count = await prisma.medicineAvailability.count({
     *   where: {
     *     // ... the filter for the MedicineAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends MedicineAvailabilityCountArgs>(
      args?: Subset<T, MedicineAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAvailabilityAggregateArgs>(args: Subset<T, MedicineAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetMedicineAvailabilityAggregateType<T>>

    /**
     * Group by MedicineAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: MedicineAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineAvailability model
   */
  readonly fields: MedicineAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicineAvailability model
   */ 
  interface MedicineAvailabilityFieldRefs {
    readonly id: FieldRef<"MedicineAvailability", 'Int'>
    readonly medicineId: FieldRef<"MedicineAvailability", 'Int'>
    readonly countryId: FieldRef<"MedicineAvailability", 'Int'>
    readonly createdAt: FieldRef<"MedicineAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicineAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicineAvailability findUnique
   */
  export type MedicineAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAvailability to fetch.
     */
    where: MedicineAvailabilityWhereUniqueInput
  }

  /**
   * MedicineAvailability findUniqueOrThrow
   */
  export type MedicineAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAvailability to fetch.
     */
    where: MedicineAvailabilityWhereUniqueInput
  }

  /**
   * MedicineAvailability findFirst
   */
  export type MedicineAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAvailability to fetch.
     */
    where?: MedicineAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAvailabilities to fetch.
     */
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineAvailabilities.
     */
    cursor?: MedicineAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineAvailabilities.
     */
    distinct?: MedicineAvailabilityScalarFieldEnum | MedicineAvailabilityScalarFieldEnum[]
  }

  /**
   * MedicineAvailability findFirstOrThrow
   */
  export type MedicineAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAvailability to fetch.
     */
    where?: MedicineAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAvailabilities to fetch.
     */
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineAvailabilities.
     */
    cursor?: MedicineAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineAvailabilities.
     */
    distinct?: MedicineAvailabilityScalarFieldEnum | MedicineAvailabilityScalarFieldEnum[]
  }

  /**
   * MedicineAvailability findMany
   */
  export type MedicineAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAvailabilities to fetch.
     */
    where?: MedicineAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAvailabilities to fetch.
     */
    orderBy?: MedicineAvailabilityOrderByWithRelationInput | MedicineAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineAvailabilities.
     */
    cursor?: MedicineAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAvailabilities.
     */
    skip?: number
    distinct?: MedicineAvailabilityScalarFieldEnum | MedicineAvailabilityScalarFieldEnum[]
  }

  /**
   * MedicineAvailability create
   */
  export type MedicineAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineAvailability.
     */
    data: XOR<MedicineAvailabilityCreateInput, MedicineAvailabilityUncheckedCreateInput>
  }

  /**
   * MedicineAvailability createMany
   */
  export type MedicineAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineAvailabilities.
     */
    data: MedicineAvailabilityCreateManyInput | MedicineAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineAvailability createManyAndReturn
   */
  export type MedicineAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MedicineAvailabilities.
     */
    data: MedicineAvailabilityCreateManyInput | MedicineAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineAvailability update
   */
  export type MedicineAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineAvailability.
     */
    data: XOR<MedicineAvailabilityUpdateInput, MedicineAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which MedicineAvailability to update.
     */
    where: MedicineAvailabilityWhereUniqueInput
  }

  /**
   * MedicineAvailability updateMany
   */
  export type MedicineAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineAvailabilities.
     */
    data: XOR<MedicineAvailabilityUpdateManyMutationInput, MedicineAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which MedicineAvailabilities to update
     */
    where?: MedicineAvailabilityWhereInput
  }

  /**
   * MedicineAvailability upsert
   */
  export type MedicineAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineAvailability to update in case it exists.
     */
    where: MedicineAvailabilityWhereUniqueInput
    /**
     * In case the MedicineAvailability found by the `where` argument doesn't exist, create a new MedicineAvailability with this data.
     */
    create: XOR<MedicineAvailabilityCreateInput, MedicineAvailabilityUncheckedCreateInput>
    /**
     * In case the MedicineAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineAvailabilityUpdateInput, MedicineAvailabilityUncheckedUpdateInput>
  }

  /**
   * MedicineAvailability delete
   */
  export type MedicineAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which MedicineAvailability to delete.
     */
    where: MedicineAvailabilityWhereUniqueInput
  }

  /**
   * MedicineAvailability deleteMany
   */
  export type MedicineAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineAvailabilities to delete
     */
    where?: MedicineAvailabilityWhereInput
  }

  /**
   * MedicineAvailability without action
   */
  export type MedicineAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAvailability
     */
    select?: MedicineAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model SymptomRecommendation
   */

  export type AggregateSymptomRecommendation = {
    _count: SymptomRecommendationCountAggregateOutputType | null
    _avg: SymptomRecommendationAvgAggregateOutputType | null
    _sum: SymptomRecommendationSumAggregateOutputType | null
    _min: SymptomRecommendationMinAggregateOutputType | null
    _max: SymptomRecommendationMaxAggregateOutputType | null
  }

  export type SymptomRecommendationAvgAggregateOutputType = {
    id: number | null
    symptomId: number | null
    medicineId: number | null
    priority: number | null
  }

  export type SymptomRecommendationSumAggregateOutputType = {
    id: number | null
    symptomId: number | null
    medicineId: number | null
    priority: number | null
  }

  export type SymptomRecommendationMinAggregateOutputType = {
    id: number | null
    symptomId: number | null
    medicineId: number | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SymptomRecommendationMaxAggregateOutputType = {
    id: number | null
    symptomId: number | null
    medicineId: number | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SymptomRecommendationCountAggregateOutputType = {
    id: number
    symptomId: number
    medicineId: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SymptomRecommendationAvgAggregateInputType = {
    id?: true
    symptomId?: true
    medicineId?: true
    priority?: true
  }

  export type SymptomRecommendationSumAggregateInputType = {
    id?: true
    symptomId?: true
    medicineId?: true
    priority?: true
  }

  export type SymptomRecommendationMinAggregateInputType = {
    id?: true
    symptomId?: true
    medicineId?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SymptomRecommendationMaxAggregateInputType = {
    id?: true
    symptomId?: true
    medicineId?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SymptomRecommendationCountAggregateInputType = {
    id?: true
    symptomId?: true
    medicineId?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SymptomRecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SymptomRecommendation to aggregate.
     */
    where?: SymptomRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SymptomRecommendations to fetch.
     */
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SymptomRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SymptomRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SymptomRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SymptomRecommendations
    **/
    _count?: true | SymptomRecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SymptomRecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SymptomRecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SymptomRecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SymptomRecommendationMaxAggregateInputType
  }

  export type GetSymptomRecommendationAggregateType<T extends SymptomRecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateSymptomRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSymptomRecommendation[P]>
      : GetScalarType<T[P], AggregateSymptomRecommendation[P]>
  }




  export type SymptomRecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SymptomRecommendationWhereInput
    orderBy?: SymptomRecommendationOrderByWithAggregationInput | SymptomRecommendationOrderByWithAggregationInput[]
    by: SymptomRecommendationScalarFieldEnum[] | SymptomRecommendationScalarFieldEnum
    having?: SymptomRecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SymptomRecommendationCountAggregateInputType | true
    _avg?: SymptomRecommendationAvgAggregateInputType
    _sum?: SymptomRecommendationSumAggregateInputType
    _min?: SymptomRecommendationMinAggregateInputType
    _max?: SymptomRecommendationMaxAggregateInputType
  }

  export type SymptomRecommendationGroupByOutputType = {
    id: number
    symptomId: number
    medicineId: number
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: SymptomRecommendationCountAggregateOutputType | null
    _avg: SymptomRecommendationAvgAggregateOutputType | null
    _sum: SymptomRecommendationSumAggregateOutputType | null
    _min: SymptomRecommendationMinAggregateOutputType | null
    _max: SymptomRecommendationMaxAggregateOutputType | null
  }

  type GetSymptomRecommendationGroupByPayload<T extends SymptomRecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SymptomRecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SymptomRecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SymptomRecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], SymptomRecommendationGroupByOutputType[P]>
        }
      >
    >


  export type SymptomRecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symptomId?: boolean
    medicineId?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptomRecommendation"]>

  export type SymptomRecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symptomId?: boolean
    medicineId?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["symptomRecommendation"]>

  export type SymptomRecommendationSelectScalar = {
    id?: boolean
    symptomId?: boolean
    medicineId?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SymptomRecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type SymptomRecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    symptom?: boolean | SymptomDefaultArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $SymptomRecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SymptomRecommendation"
    objects: {
      symptom: Prisma.$SymptomPayload<ExtArgs>
      medicine: Prisma.$MedicinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      symptomId: number
      medicineId: number
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["symptomRecommendation"]>
    composites: {}
  }

  type SymptomRecommendationGetPayload<S extends boolean | null | undefined | SymptomRecommendationDefaultArgs> = $Result.GetResult<Prisma.$SymptomRecommendationPayload, S>

  type SymptomRecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SymptomRecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SymptomRecommendationCountAggregateInputType | true
    }

  export interface SymptomRecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SymptomRecommendation'], meta: { name: 'SymptomRecommendation' } }
    /**
     * Find zero or one SymptomRecommendation that matches the filter.
     * @param {SymptomRecommendationFindUniqueArgs} args - Arguments to find a SymptomRecommendation
     * @example
     * // Get one SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SymptomRecommendationFindUniqueArgs>(args: SelectSubset<T, SymptomRecommendationFindUniqueArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SymptomRecommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SymptomRecommendationFindUniqueOrThrowArgs} args - Arguments to find a SymptomRecommendation
     * @example
     * // Get one SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SymptomRecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, SymptomRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SymptomRecommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationFindFirstArgs} args - Arguments to find a SymptomRecommendation
     * @example
     * // Get one SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SymptomRecommendationFindFirstArgs>(args?: SelectSubset<T, SymptomRecommendationFindFirstArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SymptomRecommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationFindFirstOrThrowArgs} args - Arguments to find a SymptomRecommendation
     * @example
     * // Get one SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SymptomRecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, SymptomRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SymptomRecommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SymptomRecommendations
     * const symptomRecommendations = await prisma.symptomRecommendation.findMany()
     * 
     * // Get first 10 SymptomRecommendations
     * const symptomRecommendations = await prisma.symptomRecommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const symptomRecommendationWithIdOnly = await prisma.symptomRecommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SymptomRecommendationFindManyArgs>(args?: SelectSubset<T, SymptomRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SymptomRecommendation.
     * @param {SymptomRecommendationCreateArgs} args - Arguments to create a SymptomRecommendation.
     * @example
     * // Create one SymptomRecommendation
     * const SymptomRecommendation = await prisma.symptomRecommendation.create({
     *   data: {
     *     // ... data to create a SymptomRecommendation
     *   }
     * })
     * 
     */
    create<T extends SymptomRecommendationCreateArgs>(args: SelectSubset<T, SymptomRecommendationCreateArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SymptomRecommendations.
     * @param {SymptomRecommendationCreateManyArgs} args - Arguments to create many SymptomRecommendations.
     * @example
     * // Create many SymptomRecommendations
     * const symptomRecommendation = await prisma.symptomRecommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SymptomRecommendationCreateManyArgs>(args?: SelectSubset<T, SymptomRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SymptomRecommendations and returns the data saved in the database.
     * @param {SymptomRecommendationCreateManyAndReturnArgs} args - Arguments to create many SymptomRecommendations.
     * @example
     * // Create many SymptomRecommendations
     * const symptomRecommendation = await prisma.symptomRecommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SymptomRecommendations and only return the `id`
     * const symptomRecommendationWithIdOnly = await prisma.symptomRecommendation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SymptomRecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, SymptomRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SymptomRecommendation.
     * @param {SymptomRecommendationDeleteArgs} args - Arguments to delete one SymptomRecommendation.
     * @example
     * // Delete one SymptomRecommendation
     * const SymptomRecommendation = await prisma.symptomRecommendation.delete({
     *   where: {
     *     // ... filter to delete one SymptomRecommendation
     *   }
     * })
     * 
     */
    delete<T extends SymptomRecommendationDeleteArgs>(args: SelectSubset<T, SymptomRecommendationDeleteArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SymptomRecommendation.
     * @param {SymptomRecommendationUpdateArgs} args - Arguments to update one SymptomRecommendation.
     * @example
     * // Update one SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SymptomRecommendationUpdateArgs>(args: SelectSubset<T, SymptomRecommendationUpdateArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SymptomRecommendations.
     * @param {SymptomRecommendationDeleteManyArgs} args - Arguments to filter SymptomRecommendations to delete.
     * @example
     * // Delete a few SymptomRecommendations
     * const { count } = await prisma.symptomRecommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SymptomRecommendationDeleteManyArgs>(args?: SelectSubset<T, SymptomRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SymptomRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SymptomRecommendations
     * const symptomRecommendation = await prisma.symptomRecommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SymptomRecommendationUpdateManyArgs>(args: SelectSubset<T, SymptomRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SymptomRecommendation.
     * @param {SymptomRecommendationUpsertArgs} args - Arguments to update or create a SymptomRecommendation.
     * @example
     * // Update or create a SymptomRecommendation
     * const symptomRecommendation = await prisma.symptomRecommendation.upsert({
     *   create: {
     *     // ... data to create a SymptomRecommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SymptomRecommendation we want to update
     *   }
     * })
     */
    upsert<T extends SymptomRecommendationUpsertArgs>(args: SelectSubset<T, SymptomRecommendationUpsertArgs<ExtArgs>>): Prisma__SymptomRecommendationClient<$Result.GetResult<Prisma.$SymptomRecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SymptomRecommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationCountArgs} args - Arguments to filter SymptomRecommendations to count.
     * @example
     * // Count the number of SymptomRecommendations
     * const count = await prisma.symptomRecommendation.count({
     *   where: {
     *     // ... the filter for the SymptomRecommendations we want to count
     *   }
     * })
    **/
    count<T extends SymptomRecommendationCountArgs>(
      args?: Subset<T, SymptomRecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SymptomRecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SymptomRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SymptomRecommendationAggregateArgs>(args: Subset<T, SymptomRecommendationAggregateArgs>): Prisma.PrismaPromise<GetSymptomRecommendationAggregateType<T>>

    /**
     * Group by SymptomRecommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SymptomRecommendationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SymptomRecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SymptomRecommendationGroupByArgs['orderBy'] }
        : { orderBy?: SymptomRecommendationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SymptomRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSymptomRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SymptomRecommendation model
   */
  readonly fields: SymptomRecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SymptomRecommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SymptomRecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    symptom<T extends SymptomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SymptomDefaultArgs<ExtArgs>>): Prisma__SymptomClient<$Result.GetResult<Prisma.$SymptomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SymptomRecommendation model
   */ 
  interface SymptomRecommendationFieldRefs {
    readonly id: FieldRef<"SymptomRecommendation", 'Int'>
    readonly symptomId: FieldRef<"SymptomRecommendation", 'Int'>
    readonly medicineId: FieldRef<"SymptomRecommendation", 'Int'>
    readonly priority: FieldRef<"SymptomRecommendation", 'Int'>
    readonly createdAt: FieldRef<"SymptomRecommendation", 'DateTime'>
    readonly updatedAt: FieldRef<"SymptomRecommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SymptomRecommendation findUnique
   */
  export type SymptomRecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which SymptomRecommendation to fetch.
     */
    where: SymptomRecommendationWhereUniqueInput
  }

  /**
   * SymptomRecommendation findUniqueOrThrow
   */
  export type SymptomRecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which SymptomRecommendation to fetch.
     */
    where: SymptomRecommendationWhereUniqueInput
  }

  /**
   * SymptomRecommendation findFirst
   */
  export type SymptomRecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which SymptomRecommendation to fetch.
     */
    where?: SymptomRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SymptomRecommendations to fetch.
     */
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SymptomRecommendations.
     */
    cursor?: SymptomRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SymptomRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SymptomRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SymptomRecommendations.
     */
    distinct?: SymptomRecommendationScalarFieldEnum | SymptomRecommendationScalarFieldEnum[]
  }

  /**
   * SymptomRecommendation findFirstOrThrow
   */
  export type SymptomRecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which SymptomRecommendation to fetch.
     */
    where?: SymptomRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SymptomRecommendations to fetch.
     */
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SymptomRecommendations.
     */
    cursor?: SymptomRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SymptomRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SymptomRecommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SymptomRecommendations.
     */
    distinct?: SymptomRecommendationScalarFieldEnum | SymptomRecommendationScalarFieldEnum[]
  }

  /**
   * SymptomRecommendation findMany
   */
  export type SymptomRecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter, which SymptomRecommendations to fetch.
     */
    where?: SymptomRecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SymptomRecommendations to fetch.
     */
    orderBy?: SymptomRecommendationOrderByWithRelationInput | SymptomRecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SymptomRecommendations.
     */
    cursor?: SymptomRecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SymptomRecommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SymptomRecommendations.
     */
    skip?: number
    distinct?: SymptomRecommendationScalarFieldEnum | SymptomRecommendationScalarFieldEnum[]
  }

  /**
   * SymptomRecommendation create
   */
  export type SymptomRecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a SymptomRecommendation.
     */
    data: XOR<SymptomRecommendationCreateInput, SymptomRecommendationUncheckedCreateInput>
  }

  /**
   * SymptomRecommendation createMany
   */
  export type SymptomRecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SymptomRecommendations.
     */
    data: SymptomRecommendationCreateManyInput | SymptomRecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SymptomRecommendation createManyAndReturn
   */
  export type SymptomRecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SymptomRecommendations.
     */
    data: SymptomRecommendationCreateManyInput | SymptomRecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SymptomRecommendation update
   */
  export type SymptomRecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a SymptomRecommendation.
     */
    data: XOR<SymptomRecommendationUpdateInput, SymptomRecommendationUncheckedUpdateInput>
    /**
     * Choose, which SymptomRecommendation to update.
     */
    where: SymptomRecommendationWhereUniqueInput
  }

  /**
   * SymptomRecommendation updateMany
   */
  export type SymptomRecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SymptomRecommendations.
     */
    data: XOR<SymptomRecommendationUpdateManyMutationInput, SymptomRecommendationUncheckedUpdateManyInput>
    /**
     * Filter which SymptomRecommendations to update
     */
    where?: SymptomRecommendationWhereInput
  }

  /**
   * SymptomRecommendation upsert
   */
  export type SymptomRecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the SymptomRecommendation to update in case it exists.
     */
    where: SymptomRecommendationWhereUniqueInput
    /**
     * In case the SymptomRecommendation found by the `where` argument doesn't exist, create a new SymptomRecommendation with this data.
     */
    create: XOR<SymptomRecommendationCreateInput, SymptomRecommendationUncheckedCreateInput>
    /**
     * In case the SymptomRecommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SymptomRecommendationUpdateInput, SymptomRecommendationUncheckedUpdateInput>
  }

  /**
   * SymptomRecommendation delete
   */
  export type SymptomRecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
    /**
     * Filter which SymptomRecommendation to delete.
     */
    where: SymptomRecommendationWhereUniqueInput
  }

  /**
   * SymptomRecommendation deleteMany
   */
  export type SymptomRecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SymptomRecommendations to delete
     */
    where?: SymptomRecommendationWhereInput
  }

  /**
   * SymptomRecommendation without action
   */
  export type SymptomRecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SymptomRecommendation
     */
    select?: SymptomRecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SymptomRecommendationInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationHistory
   */

  export type AggregateConsultationHistory = {
    _count: ConsultationHistoryCountAggregateOutputType | null
    _avg: ConsultationHistoryAvgAggregateOutputType | null
    _sum: ConsultationHistorySumAggregateOutputType | null
    _min: ConsultationHistoryMinAggregateOutputType | null
    _max: ConsultationHistoryMaxAggregateOutputType | null
  }

  export type ConsultationHistoryAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type ConsultationHistorySumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type ConsultationHistoryMinAggregateOutputType = {
    id: number | null
    selectedSymptoms: string | null
    age: number | null
    isPregnant: boolean | null
    allergies: string | null
    currentMedications: string | null
    recommendations: string | null
    language: string | null
    countryCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationHistoryMaxAggregateOutputType = {
    id: number | null
    selectedSymptoms: string | null
    age: number | null
    isPregnant: boolean | null
    allergies: string | null
    currentMedications: string | null
    recommendations: string | null
    language: string | null
    countryCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultationHistoryCountAggregateOutputType = {
    id: number
    selectedSymptoms: number
    age: number
    isPregnant: number
    allergies: number
    currentMedications: number
    recommendations: number
    language: number
    countryCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultationHistoryAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type ConsultationHistorySumAggregateInputType = {
    id?: true
    age?: true
  }

  export type ConsultationHistoryMinAggregateInputType = {
    id?: true
    selectedSymptoms?: true
    age?: true
    isPregnant?: true
    allergies?: true
    currentMedications?: true
    recommendations?: true
    language?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationHistoryMaxAggregateInputType = {
    id?: true
    selectedSymptoms?: true
    age?: true
    isPregnant?: true
    allergies?: true
    currentMedications?: true
    recommendations?: true
    language?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultationHistoryCountAggregateInputType = {
    id?: true
    selectedSymptoms?: true
    age?: true
    isPregnant?: true
    allergies?: true
    currentMedications?: true
    recommendations?: true
    language?: true
    countryCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationHistory to aggregate.
     */
    where?: ConsultationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationHistories to fetch.
     */
    orderBy?: ConsultationHistoryOrderByWithRelationInput | ConsultationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationHistories
    **/
    _count?: true | ConsultationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationHistoryMaxAggregateInputType
  }

  export type GetConsultationHistoryAggregateType<T extends ConsultationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationHistory[P]>
      : GetScalarType<T[P], AggregateConsultationHistory[P]>
  }




  export type ConsultationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationHistoryWhereInput
    orderBy?: ConsultationHistoryOrderByWithAggregationInput | ConsultationHistoryOrderByWithAggregationInput[]
    by: ConsultationHistoryScalarFieldEnum[] | ConsultationHistoryScalarFieldEnum
    having?: ConsultationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationHistoryCountAggregateInputType | true
    _avg?: ConsultationHistoryAvgAggregateInputType
    _sum?: ConsultationHistorySumAggregateInputType
    _min?: ConsultationHistoryMinAggregateInputType
    _max?: ConsultationHistoryMaxAggregateInputType
  }

  export type ConsultationHistoryGroupByOutputType = {
    id: number
    selectedSymptoms: string
    age: number | null
    isPregnant: boolean | null
    allergies: string | null
    currentMedications: string | null
    recommendations: string
    language: string
    countryCode: string
    createdAt: Date
    updatedAt: Date
    _count: ConsultationHistoryCountAggregateOutputType | null
    _avg: ConsultationHistoryAvgAggregateOutputType | null
    _sum: ConsultationHistorySumAggregateOutputType | null
    _min: ConsultationHistoryMinAggregateOutputType | null
    _max: ConsultationHistoryMaxAggregateOutputType | null
  }

  type GetConsultationHistoryGroupByPayload<T extends ConsultationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectedSymptoms?: boolean
    age?: boolean
    isPregnant?: boolean
    allergies?: boolean
    currentMedications?: boolean
    recommendations?: boolean
    language?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultationHistory"]>

  export type ConsultationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    selectedSymptoms?: boolean
    age?: boolean
    isPregnant?: boolean
    allergies?: boolean
    currentMedications?: boolean
    recommendations?: boolean
    language?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["consultationHistory"]>

  export type ConsultationHistorySelectScalar = {
    id?: boolean
    selectedSymptoms?: boolean
    age?: boolean
    isPregnant?: boolean
    allergies?: boolean
    currentMedications?: boolean
    recommendations?: boolean
    language?: boolean
    countryCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ConsultationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      selectedSymptoms: string
      age: number | null
      isPregnant: boolean | null
      allergies: string | null
      currentMedications: string | null
      recommendations: string
      language: string
      countryCode: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consultationHistory"]>
    composites: {}
  }

  type ConsultationHistoryGetPayload<S extends boolean | null | undefined | ConsultationHistoryDefaultArgs> = $Result.GetResult<Prisma.$ConsultationHistoryPayload, S>

  type ConsultationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConsultationHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultationHistoryCountAggregateInputType | true
    }

  export interface ConsultationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationHistory'], meta: { name: 'ConsultationHistory' } }
    /**
     * Find zero or one ConsultationHistory that matches the filter.
     * @param {ConsultationHistoryFindUniqueArgs} args - Arguments to find a ConsultationHistory
     * @example
     * // Get one ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationHistoryFindUniqueArgs>(args: SelectSubset<T, ConsultationHistoryFindUniqueArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ConsultationHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConsultationHistoryFindUniqueOrThrowArgs} args - Arguments to find a ConsultationHistory
     * @example
     * // Get one ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ConsultationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryFindFirstArgs} args - Arguments to find a ConsultationHistory
     * @example
     * // Get one ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationHistoryFindFirstArgs>(args?: SelectSubset<T, ConsultationHistoryFindFirstArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ConsultationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryFindFirstOrThrowArgs} args - Arguments to find a ConsultationHistory
     * @example
     * // Get one ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ConsultationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationHistories
     * const consultationHistories = await prisma.consultationHistory.findMany()
     * 
     * // Get first 10 ConsultationHistories
     * const consultationHistories = await prisma.consultationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationHistoryWithIdOnly = await prisma.consultationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationHistoryFindManyArgs>(args?: SelectSubset<T, ConsultationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ConsultationHistory.
     * @param {ConsultationHistoryCreateArgs} args - Arguments to create a ConsultationHistory.
     * @example
     * // Create one ConsultationHistory
     * const ConsultationHistory = await prisma.consultationHistory.create({
     *   data: {
     *     // ... data to create a ConsultationHistory
     *   }
     * })
     * 
     */
    create<T extends ConsultationHistoryCreateArgs>(args: SelectSubset<T, ConsultationHistoryCreateArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ConsultationHistories.
     * @param {ConsultationHistoryCreateManyArgs} args - Arguments to create many ConsultationHistories.
     * @example
     * // Create many ConsultationHistories
     * const consultationHistory = await prisma.consultationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationHistoryCreateManyArgs>(args?: SelectSubset<T, ConsultationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationHistories and returns the data saved in the database.
     * @param {ConsultationHistoryCreateManyAndReturnArgs} args - Arguments to create many ConsultationHistories.
     * @example
     * // Create many ConsultationHistories
     * const consultationHistory = await prisma.consultationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationHistories and only return the `id`
     * const consultationHistoryWithIdOnly = await prisma.consultationHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ConsultationHistory.
     * @param {ConsultationHistoryDeleteArgs} args - Arguments to delete one ConsultationHistory.
     * @example
     * // Delete one ConsultationHistory
     * const ConsultationHistory = await prisma.consultationHistory.delete({
     *   where: {
     *     // ... filter to delete one ConsultationHistory
     *   }
     * })
     * 
     */
    delete<T extends ConsultationHistoryDeleteArgs>(args: SelectSubset<T, ConsultationHistoryDeleteArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ConsultationHistory.
     * @param {ConsultationHistoryUpdateArgs} args - Arguments to update one ConsultationHistory.
     * @example
     * // Update one ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationHistoryUpdateArgs>(args: SelectSubset<T, ConsultationHistoryUpdateArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ConsultationHistories.
     * @param {ConsultationHistoryDeleteManyArgs} args - Arguments to filter ConsultationHistories to delete.
     * @example
     * // Delete a few ConsultationHistories
     * const { count } = await prisma.consultationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationHistoryDeleteManyArgs>(args?: SelectSubset<T, ConsultationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationHistories
     * const consultationHistory = await prisma.consultationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationHistoryUpdateManyArgs>(args: SelectSubset<T, ConsultationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConsultationHistory.
     * @param {ConsultationHistoryUpsertArgs} args - Arguments to update or create a ConsultationHistory.
     * @example
     * // Update or create a ConsultationHistory
     * const consultationHistory = await prisma.consultationHistory.upsert({
     *   create: {
     *     // ... data to create a ConsultationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationHistory we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationHistoryUpsertArgs>(args: SelectSubset<T, ConsultationHistoryUpsertArgs<ExtArgs>>): Prisma__ConsultationHistoryClient<$Result.GetResult<Prisma.$ConsultationHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ConsultationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryCountArgs} args - Arguments to filter ConsultationHistories to count.
     * @example
     * // Count the number of ConsultationHistories
     * const count = await prisma.consultationHistory.count({
     *   where: {
     *     // ... the filter for the ConsultationHistories we want to count
     *   }
     * })
    **/
    count<T extends ConsultationHistoryCountArgs>(
      args?: Subset<T, ConsultationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationHistoryAggregateArgs>(args: Subset<T, ConsultationHistoryAggregateArgs>): Prisma.PrismaPromise<GetConsultationHistoryAggregateType<T>>

    /**
     * Group by ConsultationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationHistory model
   */
  readonly fields: ConsultationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationHistory model
   */ 
  interface ConsultationHistoryFieldRefs {
    readonly id: FieldRef<"ConsultationHistory", 'Int'>
    readonly selectedSymptoms: FieldRef<"ConsultationHistory", 'String'>
    readonly age: FieldRef<"ConsultationHistory", 'Int'>
    readonly isPregnant: FieldRef<"ConsultationHistory", 'Boolean'>
    readonly allergies: FieldRef<"ConsultationHistory", 'String'>
    readonly currentMedications: FieldRef<"ConsultationHistory", 'String'>
    readonly recommendations: FieldRef<"ConsultationHistory", 'String'>
    readonly language: FieldRef<"ConsultationHistory", 'String'>
    readonly countryCode: FieldRef<"ConsultationHistory", 'String'>
    readonly createdAt: FieldRef<"ConsultationHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"ConsultationHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationHistory findUnique
   */
  export type ConsultationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter, which ConsultationHistory to fetch.
     */
    where: ConsultationHistoryWhereUniqueInput
  }

  /**
   * ConsultationHistory findUniqueOrThrow
   */
  export type ConsultationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter, which ConsultationHistory to fetch.
     */
    where: ConsultationHistoryWhereUniqueInput
  }

  /**
   * ConsultationHistory findFirst
   */
  export type ConsultationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter, which ConsultationHistory to fetch.
     */
    where?: ConsultationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationHistories to fetch.
     */
    orderBy?: ConsultationHistoryOrderByWithRelationInput | ConsultationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationHistories.
     */
    cursor?: ConsultationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationHistories.
     */
    distinct?: ConsultationHistoryScalarFieldEnum | ConsultationHistoryScalarFieldEnum[]
  }

  /**
   * ConsultationHistory findFirstOrThrow
   */
  export type ConsultationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter, which ConsultationHistory to fetch.
     */
    where?: ConsultationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationHistories to fetch.
     */
    orderBy?: ConsultationHistoryOrderByWithRelationInput | ConsultationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationHistories.
     */
    cursor?: ConsultationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationHistories.
     */
    distinct?: ConsultationHistoryScalarFieldEnum | ConsultationHistoryScalarFieldEnum[]
  }

  /**
   * ConsultationHistory findMany
   */
  export type ConsultationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter, which ConsultationHistories to fetch.
     */
    where?: ConsultationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationHistories to fetch.
     */
    orderBy?: ConsultationHistoryOrderByWithRelationInput | ConsultationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationHistories.
     */
    cursor?: ConsultationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationHistories.
     */
    skip?: number
    distinct?: ConsultationHistoryScalarFieldEnum | ConsultationHistoryScalarFieldEnum[]
  }

  /**
   * ConsultationHistory create
   */
  export type ConsultationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * The data needed to create a ConsultationHistory.
     */
    data: XOR<ConsultationHistoryCreateInput, ConsultationHistoryUncheckedCreateInput>
  }

  /**
   * ConsultationHistory createMany
   */
  export type ConsultationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationHistories.
     */
    data: ConsultationHistoryCreateManyInput | ConsultationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationHistory createManyAndReturn
   */
  export type ConsultationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ConsultationHistories.
     */
    data: ConsultationHistoryCreateManyInput | ConsultationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationHistory update
   */
  export type ConsultationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * The data needed to update a ConsultationHistory.
     */
    data: XOR<ConsultationHistoryUpdateInput, ConsultationHistoryUncheckedUpdateInput>
    /**
     * Choose, which ConsultationHistory to update.
     */
    where: ConsultationHistoryWhereUniqueInput
  }

  /**
   * ConsultationHistory updateMany
   */
  export type ConsultationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationHistories.
     */
    data: XOR<ConsultationHistoryUpdateManyMutationInput, ConsultationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationHistories to update
     */
    where?: ConsultationHistoryWhereInput
  }

  /**
   * ConsultationHistory upsert
   */
  export type ConsultationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * The filter to search for the ConsultationHistory to update in case it exists.
     */
    where: ConsultationHistoryWhereUniqueInput
    /**
     * In case the ConsultationHistory found by the `where` argument doesn't exist, create a new ConsultationHistory with this data.
     */
    create: XOR<ConsultationHistoryCreateInput, ConsultationHistoryUncheckedCreateInput>
    /**
     * In case the ConsultationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationHistoryUpdateInput, ConsultationHistoryUncheckedUpdateInput>
  }

  /**
   * ConsultationHistory delete
   */
  export type ConsultationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
    /**
     * Filter which ConsultationHistory to delete.
     */
    where: ConsultationHistoryWhereUniqueInput
  }

  /**
   * ConsultationHistory deleteMany
   */
  export type ConsultationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationHistories to delete
     */
    where?: ConsultationHistoryWhereInput
  }

  /**
   * ConsultationHistory without action
   */
  export type ConsultationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationHistory
     */
    select?: ConsultationHistorySelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const SymptomScalarFieldEnum: {
    id: 'id',
    descriptionEn: 'descriptionEn',
    descriptionEs: 'descriptionEs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SymptomScalarFieldEnum = (typeof SymptomScalarFieldEnum)[keyof typeof SymptomScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    nameEn: 'nameEn',
    nameEs: 'nameEs',
    descriptionEn: 'descriptionEn',
    descriptionEs: 'descriptionEs',
    instructionsEn: 'instructionsEn',
    instructionsEs: 'instructionsEs',
    contraindicationsEn: 'contraindicationsEn',
    contraindicationsEs: 'contraindicationsEs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const MedicineAvailabilityScalarFieldEnum: {
    id: 'id',
    medicineId: 'medicineId',
    countryId: 'countryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineAvailabilityScalarFieldEnum = (typeof MedicineAvailabilityScalarFieldEnum)[keyof typeof MedicineAvailabilityScalarFieldEnum]


  export const SymptomRecommendationScalarFieldEnum: {
    id: 'id',
    symptomId: 'symptomId',
    medicineId: 'medicineId',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SymptomRecommendationScalarFieldEnum = (typeof SymptomRecommendationScalarFieldEnum)[keyof typeof SymptomRecommendationScalarFieldEnum]


  export const ConsultationHistoryScalarFieldEnum: {
    id: 'id',
    selectedSymptoms: 'selectedSymptoms',
    age: 'age',
    isPregnant: 'isPregnant',
    allergies: 'allergies',
    currentMedications: 'currentMedications',
    recommendations: 'recommendations',
    language: 'language',
    countryCode: 'countryCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultationHistoryScalarFieldEnum = (typeof ConsultationHistoryScalarFieldEnum)[keyof typeof ConsultationHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    name?: StringFilter<"Country"> | string
    code?: StringFilter<"Country"> | string
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    medicines?: MedicineAvailabilityListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicines?: MedicineAvailabilityOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    name?: StringFilter<"Country"> | string
    createdAt?: DateTimeFilter<"Country"> | Date | string
    updatedAt?: DateTimeFilter<"Country"> | Date | string
    medicines?: MedicineAvailabilityListRelationFilter
  }, "id" | "code">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    name?: StringWithAggregatesFilter<"Country"> | string
    code?: StringWithAggregatesFilter<"Country"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Country"> | Date | string
  }

  export type SymptomWhereInput = {
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    id?: IntFilter<"Symptom"> | number
    descriptionEn?: StringFilter<"Symptom"> | string
    descriptionEs?: StringFilter<"Symptom"> | string
    createdAt?: DateTimeFilter<"Symptom"> | Date | string
    updatedAt?: DateTimeFilter<"Symptom"> | Date | string
    recommendations?: SymptomRecommendationListRelationFilter
  }

  export type SymptomOrderByWithRelationInput = {
    id?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    recommendations?: SymptomRecommendationOrderByRelationAggregateInput
  }

  export type SymptomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SymptomWhereInput | SymptomWhereInput[]
    OR?: SymptomWhereInput[]
    NOT?: SymptomWhereInput | SymptomWhereInput[]
    descriptionEn?: StringFilter<"Symptom"> | string
    descriptionEs?: StringFilter<"Symptom"> | string
    createdAt?: DateTimeFilter<"Symptom"> | Date | string
    updatedAt?: DateTimeFilter<"Symptom"> | Date | string
    recommendations?: SymptomRecommendationListRelationFilter
  }, "id">

  export type SymptomOrderByWithAggregationInput = {
    id?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SymptomCountOrderByAggregateInput
    _avg?: SymptomAvgOrderByAggregateInput
    _max?: SymptomMaxOrderByAggregateInput
    _min?: SymptomMinOrderByAggregateInput
    _sum?: SymptomSumOrderByAggregateInput
  }

  export type SymptomScalarWhereWithAggregatesInput = {
    AND?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    OR?: SymptomScalarWhereWithAggregatesInput[]
    NOT?: SymptomScalarWhereWithAggregatesInput | SymptomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Symptom"> | number
    descriptionEn?: StringWithAggregatesFilter<"Symptom"> | string
    descriptionEs?: StringWithAggregatesFilter<"Symptom"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Symptom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Symptom"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: IntFilter<"Medicine"> | number
    nameEn?: StringFilter<"Medicine"> | string
    nameEs?: StringFilter<"Medicine"> | string
    descriptionEn?: StringFilter<"Medicine"> | string
    descriptionEs?: StringFilter<"Medicine"> | string
    instructionsEn?: StringFilter<"Medicine"> | string
    instructionsEs?: StringFilter<"Medicine"> | string
    contraindicationsEn?: StringFilter<"Medicine"> | string
    contraindicationsEs?: StringFilter<"Medicine"> | string
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    availability?: MedicineAvailabilityListRelationFilter
    recommendations?: SymptomRecommendationListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameEs?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    instructionsEn?: SortOrder
    instructionsEs?: SortOrder
    contraindicationsEn?: SortOrder
    contraindicationsEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    availability?: MedicineAvailabilityOrderByRelationAggregateInput
    recommendations?: SymptomRecommendationOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    nameEn?: StringFilter<"Medicine"> | string
    nameEs?: StringFilter<"Medicine"> | string
    descriptionEn?: StringFilter<"Medicine"> | string
    descriptionEs?: StringFilter<"Medicine"> | string
    instructionsEn?: StringFilter<"Medicine"> | string
    instructionsEs?: StringFilter<"Medicine"> | string
    contraindicationsEn?: StringFilter<"Medicine"> | string
    contraindicationsEs?: StringFilter<"Medicine"> | string
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    availability?: MedicineAvailabilityListRelationFilter
    recommendations?: SymptomRecommendationListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameEs?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    instructionsEn?: SortOrder
    instructionsEs?: SortOrder
    contraindicationsEn?: SortOrder
    contraindicationsEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _avg?: MedicineAvgOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
    _sum?: MedicineSumOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Medicine"> | number
    nameEn?: StringWithAggregatesFilter<"Medicine"> | string
    nameEs?: StringWithAggregatesFilter<"Medicine"> | string
    descriptionEn?: StringWithAggregatesFilter<"Medicine"> | string
    descriptionEs?: StringWithAggregatesFilter<"Medicine"> | string
    instructionsEn?: StringWithAggregatesFilter<"Medicine"> | string
    instructionsEs?: StringWithAggregatesFilter<"Medicine"> | string
    contraindicationsEn?: StringWithAggregatesFilter<"Medicine"> | string
    contraindicationsEs?: StringWithAggregatesFilter<"Medicine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

  export type MedicineAvailabilityWhereInput = {
    AND?: MedicineAvailabilityWhereInput | MedicineAvailabilityWhereInput[]
    OR?: MedicineAvailabilityWhereInput[]
    NOT?: MedicineAvailabilityWhereInput | MedicineAvailabilityWhereInput[]
    id?: IntFilter<"MedicineAvailability"> | number
    medicineId?: IntFilter<"MedicineAvailability"> | number
    countryId?: IntFilter<"MedicineAvailability"> | number
    createdAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
    country?: XOR<CountryRelationFilter, CountryWhereInput>
  }

  export type MedicineAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicine?: MedicineOrderByWithRelationInput
    country?: CountryOrderByWithRelationInput
  }

  export type MedicineAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    medicineId_countryId?: MedicineAvailabilityMedicineIdCountryIdCompoundUniqueInput
    AND?: MedicineAvailabilityWhereInput | MedicineAvailabilityWhereInput[]
    OR?: MedicineAvailabilityWhereInput[]
    NOT?: MedicineAvailabilityWhereInput | MedicineAvailabilityWhereInput[]
    medicineId?: IntFilter<"MedicineAvailability"> | number
    countryId?: IntFilter<"MedicineAvailability"> | number
    createdAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
    country?: XOR<CountryRelationFilter, CountryWhereInput>
  }, "id" | "medicineId_countryId">

  export type MedicineAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineAvailabilityCountOrderByAggregateInput
    _avg?: MedicineAvailabilityAvgOrderByAggregateInput
    _max?: MedicineAvailabilityMaxOrderByAggregateInput
    _min?: MedicineAvailabilityMinOrderByAggregateInput
    _sum?: MedicineAvailabilitySumOrderByAggregateInput
  }

  export type MedicineAvailabilityScalarWhereWithAggregatesInput = {
    AND?: MedicineAvailabilityScalarWhereWithAggregatesInput | MedicineAvailabilityScalarWhereWithAggregatesInput[]
    OR?: MedicineAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: MedicineAvailabilityScalarWhereWithAggregatesInput | MedicineAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MedicineAvailability"> | number
    medicineId?: IntWithAggregatesFilter<"MedicineAvailability"> | number
    countryId?: IntWithAggregatesFilter<"MedicineAvailability"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicineAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicineAvailability"> | Date | string
  }

  export type SymptomRecommendationWhereInput = {
    AND?: SymptomRecommendationWhereInput | SymptomRecommendationWhereInput[]
    OR?: SymptomRecommendationWhereInput[]
    NOT?: SymptomRecommendationWhereInput | SymptomRecommendationWhereInput[]
    id?: IntFilter<"SymptomRecommendation"> | number
    symptomId?: IntFilter<"SymptomRecommendation"> | number
    medicineId?: IntFilter<"SymptomRecommendation"> | number
    priority?: IntFilter<"SymptomRecommendation"> | number
    createdAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
    symptom?: XOR<SymptomRelationFilter, SymptomWhereInput>
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }

  export type SymptomRecommendationOrderByWithRelationInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    symptom?: SymptomOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
  }

  export type SymptomRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symptomId_medicineId?: SymptomRecommendationSymptomIdMedicineIdCompoundUniqueInput
    AND?: SymptomRecommendationWhereInput | SymptomRecommendationWhereInput[]
    OR?: SymptomRecommendationWhereInput[]
    NOT?: SymptomRecommendationWhereInput | SymptomRecommendationWhereInput[]
    symptomId?: IntFilter<"SymptomRecommendation"> | number
    medicineId?: IntFilter<"SymptomRecommendation"> | number
    priority?: IntFilter<"SymptomRecommendation"> | number
    createdAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
    symptom?: XOR<SymptomRelationFilter, SymptomWhereInput>
    medicine?: XOR<MedicineRelationFilter, MedicineWhereInput>
  }, "id" | "symptomId_medicineId">

  export type SymptomRecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SymptomRecommendationCountOrderByAggregateInput
    _avg?: SymptomRecommendationAvgOrderByAggregateInput
    _max?: SymptomRecommendationMaxOrderByAggregateInput
    _min?: SymptomRecommendationMinOrderByAggregateInput
    _sum?: SymptomRecommendationSumOrderByAggregateInput
  }

  export type SymptomRecommendationScalarWhereWithAggregatesInput = {
    AND?: SymptomRecommendationScalarWhereWithAggregatesInput | SymptomRecommendationScalarWhereWithAggregatesInput[]
    OR?: SymptomRecommendationScalarWhereWithAggregatesInput[]
    NOT?: SymptomRecommendationScalarWhereWithAggregatesInput | SymptomRecommendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SymptomRecommendation"> | number
    symptomId?: IntWithAggregatesFilter<"SymptomRecommendation"> | number
    medicineId?: IntWithAggregatesFilter<"SymptomRecommendation"> | number
    priority?: IntWithAggregatesFilter<"SymptomRecommendation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SymptomRecommendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SymptomRecommendation"> | Date | string
  }

  export type ConsultationHistoryWhereInput = {
    AND?: ConsultationHistoryWhereInput | ConsultationHistoryWhereInput[]
    OR?: ConsultationHistoryWhereInput[]
    NOT?: ConsultationHistoryWhereInput | ConsultationHistoryWhereInput[]
    id?: IntFilter<"ConsultationHistory"> | number
    selectedSymptoms?: StringFilter<"ConsultationHistory"> | string
    age?: IntNullableFilter<"ConsultationHistory"> | number | null
    isPregnant?: BoolNullableFilter<"ConsultationHistory"> | boolean | null
    allergies?: StringNullableFilter<"ConsultationHistory"> | string | null
    currentMedications?: StringNullableFilter<"ConsultationHistory"> | string | null
    recommendations?: StringFilter<"ConsultationHistory"> | string
    language?: StringFilter<"ConsultationHistory"> | string
    countryCode?: StringFilter<"ConsultationHistory"> | string
    createdAt?: DateTimeFilter<"ConsultationHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationHistory"> | Date | string
  }

  export type ConsultationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    selectedSymptoms?: SortOrder
    age?: SortOrderInput | SortOrder
    isPregnant?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    currentMedications?: SortOrderInput | SortOrder
    recommendations?: SortOrder
    language?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultationHistoryWhereInput | ConsultationHistoryWhereInput[]
    OR?: ConsultationHistoryWhereInput[]
    NOT?: ConsultationHistoryWhereInput | ConsultationHistoryWhereInput[]
    selectedSymptoms?: StringFilter<"ConsultationHistory"> | string
    age?: IntNullableFilter<"ConsultationHistory"> | number | null
    isPregnant?: BoolNullableFilter<"ConsultationHistory"> | boolean | null
    allergies?: StringNullableFilter<"ConsultationHistory"> | string | null
    currentMedications?: StringNullableFilter<"ConsultationHistory"> | string | null
    recommendations?: StringFilter<"ConsultationHistory"> | string
    language?: StringFilter<"ConsultationHistory"> | string
    countryCode?: StringFilter<"ConsultationHistory"> | string
    createdAt?: DateTimeFilter<"ConsultationHistory"> | Date | string
    updatedAt?: DateTimeFilter<"ConsultationHistory"> | Date | string
  }, "id">

  export type ConsultationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    selectedSymptoms?: SortOrder
    age?: SortOrderInput | SortOrder
    isPregnant?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    currentMedications?: SortOrderInput | SortOrder
    recommendations?: SortOrder
    language?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultationHistoryCountOrderByAggregateInput
    _avg?: ConsultationHistoryAvgOrderByAggregateInput
    _max?: ConsultationHistoryMaxOrderByAggregateInput
    _min?: ConsultationHistoryMinOrderByAggregateInput
    _sum?: ConsultationHistorySumOrderByAggregateInput
  }

  export type ConsultationHistoryScalarWhereWithAggregatesInput = {
    AND?: ConsultationHistoryScalarWhereWithAggregatesInput | ConsultationHistoryScalarWhereWithAggregatesInput[]
    OR?: ConsultationHistoryScalarWhereWithAggregatesInput[]
    NOT?: ConsultationHistoryScalarWhereWithAggregatesInput | ConsultationHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConsultationHistory"> | number
    selectedSymptoms?: StringWithAggregatesFilter<"ConsultationHistory"> | string
    age?: IntNullableWithAggregatesFilter<"ConsultationHistory"> | number | null
    isPregnant?: BoolNullableWithAggregatesFilter<"ConsultationHistory"> | boolean | null
    allergies?: StringNullableWithAggregatesFilter<"ConsultationHistory"> | string | null
    currentMedications?: StringNullableWithAggregatesFilter<"ConsultationHistory"> | string | null
    recommendations?: StringWithAggregatesFilter<"ConsultationHistory"> | string
    language?: StringWithAggregatesFilter<"ConsultationHistory"> | string
    countryCode?: StringWithAggregatesFilter<"ConsultationHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ConsultationHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConsultationHistory"> | Date | string
  }

  export type CountryCreateInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: MedicineAvailabilityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    medicines?: MedicineAvailabilityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: MedicineAvailabilityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicines?: MedicineAvailabilityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomCreateInput = {
    descriptionEn: string
    descriptionEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: SymptomRecommendationCreateNestedManyWithoutSymptomInput
  }

  export type SymptomUncheckedCreateInput = {
    id?: number
    descriptionEn: string
    descriptionEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: SymptomRecommendationUncheckedCreateNestedManyWithoutSymptomInput
  }

  export type SymptomUpdateInput = {
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: SymptomRecommendationUpdateManyWithoutSymptomNestedInput
  }

  export type SymptomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: SymptomRecommendationUncheckedUpdateManyWithoutSymptomNestedInput
  }

  export type SymptomCreateManyInput = {
    id?: number
    descriptionEn: string
    descriptionEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomUpdateManyMutationInput = {
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: MedicineAvailabilityCreateNestedManyWithoutMedicineInput
    recommendations?: SymptomRecommendationCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: number
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: MedicineAvailabilityUncheckedCreateNestedManyWithoutMedicineInput
    recommendations?: SymptomRecommendationUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: MedicineAvailabilityUpdateManyWithoutMedicineNestedInput
    recommendations?: SymptomRecommendationUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: MedicineAvailabilityUncheckedUpdateManyWithoutMedicineNestedInput
    recommendations?: SymptomRecommendationUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: number
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutAvailabilityInput
    country: CountryCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineAvailabilityUncheckedCreateInput = {
    id?: number
    medicineId: number
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutAvailabilityNestedInput
    country?: CountryUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityCreateManyInput = {
    id?: number
    medicineId: number
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationCreateInput = {
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
    symptom: SymptomCreateNestedOneWithoutRecommendationsInput
    medicine: MedicineCreateNestedOneWithoutRecommendationsInput
  }

  export type SymptomRecommendationUncheckedCreateInput = {
    id?: number
    symptomId: number
    medicineId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationUpdateInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    symptom?: SymptomUpdateOneRequiredWithoutRecommendationsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type SymptomRecommendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationCreateManyInput = {
    id?: number
    symptomId: number
    medicineId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationUpdateManyMutationInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationHistoryCreateInput = {
    selectedSymptoms: string
    age?: number | null
    isPregnant?: boolean | null
    allergies?: string | null
    currentMedications?: string | null
    recommendations: string
    language: string
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationHistoryUncheckedCreateInput = {
    id?: number
    selectedSymptoms: string
    age?: number | null
    isPregnant?: boolean | null
    allergies?: string | null
    currentMedications?: string | null
    recommendations: string
    language: string
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationHistoryUpdateInput = {
    selectedSymptoms?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isPregnant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    currentMedications?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedSymptoms?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isPregnant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    currentMedications?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationHistoryCreateManyInput = {
    id?: number
    selectedSymptoms: string
    age?: number | null
    isPregnant?: boolean | null
    allergies?: string | null
    currentMedications?: string | null
    recommendations: string
    language: string
    countryCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultationHistoryUpdateManyMutationInput = {
    selectedSymptoms?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isPregnant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    currentMedications?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    selectedSymptoms?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    isPregnant?: NullableBoolFieldUpdateOperationsInput | boolean | null
    allergies?: NullableStringFieldUpdateOperationsInput | string | null
    currentMedications?: NullableStringFieldUpdateOperationsInput | string | null
    recommendations?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MedicineAvailabilityListRelationFilter = {
    every?: MedicineAvailabilityWhereInput
    some?: MedicineAvailabilityWhereInput
    none?: MedicineAvailabilityWhereInput
  }

  export type MedicineAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SymptomRecommendationListRelationFilter = {
    every?: SymptomRecommendationWhereInput
    some?: SymptomRecommendationWhereInput
    none?: SymptomRecommendationWhereInput
  }

  export type SymptomRecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SymptomCountOrderByAggregateInput = {
    id?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SymptomMaxOrderByAggregateInput = {
    id?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomMinOrderByAggregateInput = {
    id?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameEs?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    instructionsEn?: SortOrder
    instructionsEs?: SortOrder
    contraindicationsEn?: SortOrder
    contraindicationsEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameEs?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    instructionsEn?: SortOrder
    instructionsEs?: SortOrder
    contraindicationsEn?: SortOrder
    contraindicationsEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    nameEn?: SortOrder
    nameEs?: SortOrder
    descriptionEn?: SortOrder
    descriptionEs?: SortOrder
    instructionsEn?: SortOrder
    instructionsEs?: SortOrder
    contraindicationsEn?: SortOrder
    contraindicationsEs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MedicineRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type MedicineAvailabilityMedicineIdCountryIdCompoundUniqueInput = {
    medicineId: number
    countryId: number
  }

  export type MedicineAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
  }

  export type MedicineAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    medicineId?: SortOrder
    countryId?: SortOrder
  }

  export type SymptomRelationFilter = {
    is?: SymptomWhereInput
    isNot?: SymptomWhereInput
  }

  export type SymptomRecommendationSymptomIdMedicineIdCompoundUniqueInput = {
    symptomId: number
    medicineId: number
  }

  export type SymptomRecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomRecommendationAvgOrderByAggregateInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
  }

  export type SymptomRecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomRecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SymptomRecommendationSumOrderByAggregateInput = {
    id?: SortOrder
    symptomId?: SortOrder
    medicineId?: SortOrder
    priority?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConsultationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    selectedSymptoms?: SortOrder
    age?: SortOrder
    isPregnant?: SortOrder
    allergies?: SortOrder
    currentMedications?: SortOrder
    recommendations?: SortOrder
    language?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type ConsultationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    selectedSymptoms?: SortOrder
    age?: SortOrder
    isPregnant?: SortOrder
    allergies?: SortOrder
    currentMedications?: SortOrder
    recommendations?: SortOrder
    language?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    selectedSymptoms?: SortOrder
    age?: SortOrder
    isPregnant?: SortOrder
    allergies?: SortOrder
    currentMedications?: SortOrder
    recommendations?: SortOrder
    language?: SortOrder
    countryCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultationHistorySumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MedicineAvailabilityCreateNestedManyWithoutCountryInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput> | MedicineAvailabilityCreateWithoutCountryInput[] | MedicineAvailabilityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutCountryInput | MedicineAvailabilityCreateOrConnectWithoutCountryInput[]
    createMany?: MedicineAvailabilityCreateManyCountryInputEnvelope
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
  }

  export type MedicineAvailabilityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput> | MedicineAvailabilityCreateWithoutCountryInput[] | MedicineAvailabilityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutCountryInput | MedicineAvailabilityCreateOrConnectWithoutCountryInput[]
    createMany?: MedicineAvailabilityCreateManyCountryInputEnvelope
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MedicineAvailabilityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput> | MedicineAvailabilityCreateWithoutCountryInput[] | MedicineAvailabilityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutCountryInput | MedicineAvailabilityCreateOrConnectWithoutCountryInput[]
    upsert?: MedicineAvailabilityUpsertWithWhereUniqueWithoutCountryInput | MedicineAvailabilityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: MedicineAvailabilityCreateManyCountryInputEnvelope
    set?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    disconnect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    delete?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    update?: MedicineAvailabilityUpdateWithWhereUniqueWithoutCountryInput | MedicineAvailabilityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MedicineAvailabilityUpdateManyWithWhereWithoutCountryInput | MedicineAvailabilityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicineAvailabilityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput> | MedicineAvailabilityCreateWithoutCountryInput[] | MedicineAvailabilityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutCountryInput | MedicineAvailabilityCreateOrConnectWithoutCountryInput[]
    upsert?: MedicineAvailabilityUpsertWithWhereUniqueWithoutCountryInput | MedicineAvailabilityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: MedicineAvailabilityCreateManyCountryInputEnvelope
    set?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    disconnect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    delete?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    update?: MedicineAvailabilityUpdateWithWhereUniqueWithoutCountryInput | MedicineAvailabilityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: MedicineAvailabilityUpdateManyWithWhereWithoutCountryInput | MedicineAvailabilityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
  }

  export type SymptomRecommendationCreateNestedManyWithoutSymptomInput = {
    create?: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput> | SymptomRecommendationCreateWithoutSymptomInput[] | SymptomRecommendationUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutSymptomInput | SymptomRecommendationCreateOrConnectWithoutSymptomInput[]
    createMany?: SymptomRecommendationCreateManySymptomInputEnvelope
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
  }

  export type SymptomRecommendationUncheckedCreateNestedManyWithoutSymptomInput = {
    create?: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput> | SymptomRecommendationCreateWithoutSymptomInput[] | SymptomRecommendationUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutSymptomInput | SymptomRecommendationCreateOrConnectWithoutSymptomInput[]
    createMany?: SymptomRecommendationCreateManySymptomInputEnvelope
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
  }

  export type SymptomRecommendationUpdateManyWithoutSymptomNestedInput = {
    create?: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput> | SymptomRecommendationCreateWithoutSymptomInput[] | SymptomRecommendationUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutSymptomInput | SymptomRecommendationCreateOrConnectWithoutSymptomInput[]
    upsert?: SymptomRecommendationUpsertWithWhereUniqueWithoutSymptomInput | SymptomRecommendationUpsertWithWhereUniqueWithoutSymptomInput[]
    createMany?: SymptomRecommendationCreateManySymptomInputEnvelope
    set?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    disconnect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    delete?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    update?: SymptomRecommendationUpdateWithWhereUniqueWithoutSymptomInput | SymptomRecommendationUpdateWithWhereUniqueWithoutSymptomInput[]
    updateMany?: SymptomRecommendationUpdateManyWithWhereWithoutSymptomInput | SymptomRecommendationUpdateManyWithWhereWithoutSymptomInput[]
    deleteMany?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
  }

  export type SymptomRecommendationUncheckedUpdateManyWithoutSymptomNestedInput = {
    create?: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput> | SymptomRecommendationCreateWithoutSymptomInput[] | SymptomRecommendationUncheckedCreateWithoutSymptomInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutSymptomInput | SymptomRecommendationCreateOrConnectWithoutSymptomInput[]
    upsert?: SymptomRecommendationUpsertWithWhereUniqueWithoutSymptomInput | SymptomRecommendationUpsertWithWhereUniqueWithoutSymptomInput[]
    createMany?: SymptomRecommendationCreateManySymptomInputEnvelope
    set?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    disconnect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    delete?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    update?: SymptomRecommendationUpdateWithWhereUniqueWithoutSymptomInput | SymptomRecommendationUpdateWithWhereUniqueWithoutSymptomInput[]
    updateMany?: SymptomRecommendationUpdateManyWithWhereWithoutSymptomInput | SymptomRecommendationUpdateManyWithWhereWithoutSymptomInput[]
    deleteMany?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
  }

  export type MedicineAvailabilityCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput> | MedicineAvailabilityCreateWithoutMedicineInput[] | MedicineAvailabilityUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutMedicineInput | MedicineAvailabilityCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicineAvailabilityCreateManyMedicineInputEnvelope
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
  }

  export type SymptomRecommendationCreateNestedManyWithoutMedicineInput = {
    create?: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput> | SymptomRecommendationCreateWithoutMedicineInput[] | SymptomRecommendationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutMedicineInput | SymptomRecommendationCreateOrConnectWithoutMedicineInput[]
    createMany?: SymptomRecommendationCreateManyMedicineInputEnvelope
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
  }

  export type MedicineAvailabilityUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput> | MedicineAvailabilityCreateWithoutMedicineInput[] | MedicineAvailabilityUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutMedicineInput | MedicineAvailabilityCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicineAvailabilityCreateManyMedicineInputEnvelope
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
  }

  export type SymptomRecommendationUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput> | SymptomRecommendationCreateWithoutMedicineInput[] | SymptomRecommendationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutMedicineInput | SymptomRecommendationCreateOrConnectWithoutMedicineInput[]
    createMany?: SymptomRecommendationCreateManyMedicineInputEnvelope
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
  }

  export type MedicineAvailabilityUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput> | MedicineAvailabilityCreateWithoutMedicineInput[] | MedicineAvailabilityUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutMedicineInput | MedicineAvailabilityCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicineAvailabilityUpsertWithWhereUniqueWithoutMedicineInput | MedicineAvailabilityUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicineAvailabilityCreateManyMedicineInputEnvelope
    set?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    disconnect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    delete?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    update?: MedicineAvailabilityUpdateWithWhereUniqueWithoutMedicineInput | MedicineAvailabilityUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicineAvailabilityUpdateManyWithWhereWithoutMedicineInput | MedicineAvailabilityUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
  }

  export type SymptomRecommendationUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput> | SymptomRecommendationCreateWithoutMedicineInput[] | SymptomRecommendationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutMedicineInput | SymptomRecommendationCreateOrConnectWithoutMedicineInput[]
    upsert?: SymptomRecommendationUpsertWithWhereUniqueWithoutMedicineInput | SymptomRecommendationUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: SymptomRecommendationCreateManyMedicineInputEnvelope
    set?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    disconnect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    delete?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    update?: SymptomRecommendationUpdateWithWhereUniqueWithoutMedicineInput | SymptomRecommendationUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: SymptomRecommendationUpdateManyWithWhereWithoutMedicineInput | SymptomRecommendationUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
  }

  export type MedicineAvailabilityUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput> | MedicineAvailabilityCreateWithoutMedicineInput[] | MedicineAvailabilityUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAvailabilityCreateOrConnectWithoutMedicineInput | MedicineAvailabilityCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicineAvailabilityUpsertWithWhereUniqueWithoutMedicineInput | MedicineAvailabilityUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicineAvailabilityCreateManyMedicineInputEnvelope
    set?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    disconnect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    delete?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    connect?: MedicineAvailabilityWhereUniqueInput | MedicineAvailabilityWhereUniqueInput[]
    update?: MedicineAvailabilityUpdateWithWhereUniqueWithoutMedicineInput | MedicineAvailabilityUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicineAvailabilityUpdateManyWithWhereWithoutMedicineInput | MedicineAvailabilityUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
  }

  export type SymptomRecommendationUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput> | SymptomRecommendationCreateWithoutMedicineInput[] | SymptomRecommendationUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: SymptomRecommendationCreateOrConnectWithoutMedicineInput | SymptomRecommendationCreateOrConnectWithoutMedicineInput[]
    upsert?: SymptomRecommendationUpsertWithWhereUniqueWithoutMedicineInput | SymptomRecommendationUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: SymptomRecommendationCreateManyMedicineInputEnvelope
    set?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    disconnect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    delete?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    connect?: SymptomRecommendationWhereUniqueInput | SymptomRecommendationWhereUniqueInput[]
    update?: SymptomRecommendationUpdateWithWhereUniqueWithoutMedicineInput | SymptomRecommendationUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: SymptomRecommendationUpdateManyWithWhereWithoutMedicineInput | SymptomRecommendationUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
  }

  export type MedicineCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<MedicineCreateWithoutAvailabilityInput, MedicineUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutAvailabilityInput
    connect?: MedicineWhereUniqueInput
  }

  export type CountryCreateNestedOneWithoutMedicinesInput = {
    create?: XOR<CountryCreateWithoutMedicinesInput, CountryUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutMedicinesInput
    connect?: CountryWhereUniqueInput
  }

  export type MedicineUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<MedicineCreateWithoutAvailabilityInput, MedicineUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutAvailabilityInput
    upsert?: MedicineUpsertWithoutAvailabilityInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutAvailabilityInput, MedicineUpdateWithoutAvailabilityInput>, MedicineUncheckedUpdateWithoutAvailabilityInput>
  }

  export type CountryUpdateOneRequiredWithoutMedicinesNestedInput = {
    create?: XOR<CountryCreateWithoutMedicinesInput, CountryUncheckedCreateWithoutMedicinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutMedicinesInput
    upsert?: CountryUpsertWithoutMedicinesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutMedicinesInput, CountryUpdateWithoutMedicinesInput>, CountryUncheckedUpdateWithoutMedicinesInput>
  }

  export type SymptomCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<SymptomCreateWithoutRecommendationsInput, SymptomUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: SymptomCreateOrConnectWithoutRecommendationsInput
    connect?: SymptomWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<MedicineCreateWithoutRecommendationsInput, MedicineUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutRecommendationsInput
    connect?: MedicineWhereUniqueInput
  }

  export type SymptomUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<SymptomCreateWithoutRecommendationsInput, SymptomUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: SymptomCreateOrConnectWithoutRecommendationsInput
    upsert?: SymptomUpsertWithoutRecommendationsInput
    connect?: SymptomWhereUniqueInput
    update?: XOR<XOR<SymptomUpdateToOneWithWhereWithoutRecommendationsInput, SymptomUpdateWithoutRecommendationsInput>, SymptomUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MedicineUpdateOneRequiredWithoutRecommendationsNestedInput = {
    create?: XOR<MedicineCreateWithoutRecommendationsInput, MedicineUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutRecommendationsInput
    upsert?: MedicineUpsertWithoutRecommendationsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutRecommendationsInput, MedicineUpdateWithoutRecommendationsInput>, MedicineUncheckedUpdateWithoutRecommendationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MedicineAvailabilityCreateWithoutCountryInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutAvailabilityInput
  }

  export type MedicineAvailabilityUncheckedCreateWithoutCountryInput = {
    id?: number
    medicineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityCreateOrConnectWithoutCountryInput = {
    where: MedicineAvailabilityWhereUniqueInput
    create: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput>
  }

  export type MedicineAvailabilityCreateManyCountryInputEnvelope = {
    data: MedicineAvailabilityCreateManyCountryInput | MedicineAvailabilityCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type MedicineAvailabilityUpsertWithWhereUniqueWithoutCountryInput = {
    where: MedicineAvailabilityWhereUniqueInput
    update: XOR<MedicineAvailabilityUpdateWithoutCountryInput, MedicineAvailabilityUncheckedUpdateWithoutCountryInput>
    create: XOR<MedicineAvailabilityCreateWithoutCountryInput, MedicineAvailabilityUncheckedCreateWithoutCountryInput>
  }

  export type MedicineAvailabilityUpdateWithWhereUniqueWithoutCountryInput = {
    where: MedicineAvailabilityWhereUniqueInput
    data: XOR<MedicineAvailabilityUpdateWithoutCountryInput, MedicineAvailabilityUncheckedUpdateWithoutCountryInput>
  }

  export type MedicineAvailabilityUpdateManyWithWhereWithoutCountryInput = {
    where: MedicineAvailabilityScalarWhereInput
    data: XOR<MedicineAvailabilityUpdateManyMutationInput, MedicineAvailabilityUncheckedUpdateManyWithoutCountryInput>
  }

  export type MedicineAvailabilityScalarWhereInput = {
    AND?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
    OR?: MedicineAvailabilityScalarWhereInput[]
    NOT?: MedicineAvailabilityScalarWhereInput | MedicineAvailabilityScalarWhereInput[]
    id?: IntFilter<"MedicineAvailability"> | number
    medicineId?: IntFilter<"MedicineAvailability"> | number
    countryId?: IntFilter<"MedicineAvailability"> | number
    createdAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAvailability"> | Date | string
  }

  export type SymptomRecommendationCreateWithoutSymptomInput = {
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medicine: MedicineCreateNestedOneWithoutRecommendationsInput
  }

  export type SymptomRecommendationUncheckedCreateWithoutSymptomInput = {
    id?: number
    medicineId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationCreateOrConnectWithoutSymptomInput = {
    where: SymptomRecommendationWhereUniqueInput
    create: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput>
  }

  export type SymptomRecommendationCreateManySymptomInputEnvelope = {
    data: SymptomRecommendationCreateManySymptomInput | SymptomRecommendationCreateManySymptomInput[]
    skipDuplicates?: boolean
  }

  export type SymptomRecommendationUpsertWithWhereUniqueWithoutSymptomInput = {
    where: SymptomRecommendationWhereUniqueInput
    update: XOR<SymptomRecommendationUpdateWithoutSymptomInput, SymptomRecommendationUncheckedUpdateWithoutSymptomInput>
    create: XOR<SymptomRecommendationCreateWithoutSymptomInput, SymptomRecommendationUncheckedCreateWithoutSymptomInput>
  }

  export type SymptomRecommendationUpdateWithWhereUniqueWithoutSymptomInput = {
    where: SymptomRecommendationWhereUniqueInput
    data: XOR<SymptomRecommendationUpdateWithoutSymptomInput, SymptomRecommendationUncheckedUpdateWithoutSymptomInput>
  }

  export type SymptomRecommendationUpdateManyWithWhereWithoutSymptomInput = {
    where: SymptomRecommendationScalarWhereInput
    data: XOR<SymptomRecommendationUpdateManyMutationInput, SymptomRecommendationUncheckedUpdateManyWithoutSymptomInput>
  }

  export type SymptomRecommendationScalarWhereInput = {
    AND?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
    OR?: SymptomRecommendationScalarWhereInput[]
    NOT?: SymptomRecommendationScalarWhereInput | SymptomRecommendationScalarWhereInput[]
    id?: IntFilter<"SymptomRecommendation"> | number
    symptomId?: IntFilter<"SymptomRecommendation"> | number
    medicineId?: IntFilter<"SymptomRecommendation"> | number
    priority?: IntFilter<"SymptomRecommendation"> | number
    createdAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
    updatedAt?: DateTimeFilter<"SymptomRecommendation"> | Date | string
  }

  export type MedicineAvailabilityCreateWithoutMedicineInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    country: CountryCreateNestedOneWithoutMedicinesInput
  }

  export type MedicineAvailabilityUncheckedCreateWithoutMedicineInput = {
    id?: number
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityCreateOrConnectWithoutMedicineInput = {
    where: MedicineAvailabilityWhereUniqueInput
    create: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput>
  }

  export type MedicineAvailabilityCreateManyMedicineInputEnvelope = {
    data: MedicineAvailabilityCreateManyMedicineInput | MedicineAvailabilityCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type SymptomRecommendationCreateWithoutMedicineInput = {
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
    symptom: SymptomCreateNestedOneWithoutRecommendationsInput
  }

  export type SymptomRecommendationUncheckedCreateWithoutMedicineInput = {
    id?: number
    symptomId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationCreateOrConnectWithoutMedicineInput = {
    where: SymptomRecommendationWhereUniqueInput
    create: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput>
  }

  export type SymptomRecommendationCreateManyMedicineInputEnvelope = {
    data: SymptomRecommendationCreateManyMedicineInput | SymptomRecommendationCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type MedicineAvailabilityUpsertWithWhereUniqueWithoutMedicineInput = {
    where: MedicineAvailabilityWhereUniqueInput
    update: XOR<MedicineAvailabilityUpdateWithoutMedicineInput, MedicineAvailabilityUncheckedUpdateWithoutMedicineInput>
    create: XOR<MedicineAvailabilityCreateWithoutMedicineInput, MedicineAvailabilityUncheckedCreateWithoutMedicineInput>
  }

  export type MedicineAvailabilityUpdateWithWhereUniqueWithoutMedicineInput = {
    where: MedicineAvailabilityWhereUniqueInput
    data: XOR<MedicineAvailabilityUpdateWithoutMedicineInput, MedicineAvailabilityUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicineAvailabilityUpdateManyWithWhereWithoutMedicineInput = {
    where: MedicineAvailabilityScalarWhereInput
    data: XOR<MedicineAvailabilityUpdateManyMutationInput, MedicineAvailabilityUncheckedUpdateManyWithoutMedicineInput>
  }

  export type SymptomRecommendationUpsertWithWhereUniqueWithoutMedicineInput = {
    where: SymptomRecommendationWhereUniqueInput
    update: XOR<SymptomRecommendationUpdateWithoutMedicineInput, SymptomRecommendationUncheckedUpdateWithoutMedicineInput>
    create: XOR<SymptomRecommendationCreateWithoutMedicineInput, SymptomRecommendationUncheckedCreateWithoutMedicineInput>
  }

  export type SymptomRecommendationUpdateWithWhereUniqueWithoutMedicineInput = {
    where: SymptomRecommendationWhereUniqueInput
    data: XOR<SymptomRecommendationUpdateWithoutMedicineInput, SymptomRecommendationUncheckedUpdateWithoutMedicineInput>
  }

  export type SymptomRecommendationUpdateManyWithWhereWithoutMedicineInput = {
    where: SymptomRecommendationScalarWhereInput
    data: XOR<SymptomRecommendationUpdateManyMutationInput, SymptomRecommendationUncheckedUpdateManyWithoutMedicineInput>
  }

  export type MedicineCreateWithoutAvailabilityInput = {
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: SymptomRecommendationCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutAvailabilityInput = {
    id?: number
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: SymptomRecommendationUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutAvailabilityInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutAvailabilityInput, MedicineUncheckedCreateWithoutAvailabilityInput>
  }

  export type CountryCreateWithoutMedicinesInput = {
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryUncheckedCreateWithoutMedicinesInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CountryCreateOrConnectWithoutMedicinesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutMedicinesInput, CountryUncheckedCreateWithoutMedicinesInput>
  }

  export type MedicineUpsertWithoutAvailabilityInput = {
    update: XOR<MedicineUpdateWithoutAvailabilityInput, MedicineUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<MedicineCreateWithoutAvailabilityInput, MedicineUncheckedCreateWithoutAvailabilityInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutAvailabilityInput, MedicineUncheckedUpdateWithoutAvailabilityInput>
  }

  export type MedicineUpdateWithoutAvailabilityInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: SymptomRecommendationUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: SymptomRecommendationUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type CountryUpsertWithoutMedicinesInput = {
    update: XOR<CountryUpdateWithoutMedicinesInput, CountryUncheckedUpdateWithoutMedicinesInput>
    create: XOR<CountryCreateWithoutMedicinesInput, CountryUncheckedCreateWithoutMedicinesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutMedicinesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutMedicinesInput, CountryUncheckedUpdateWithoutMedicinesInput>
  }

  export type CountryUpdateWithoutMedicinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountryUncheckedUpdateWithoutMedicinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomCreateWithoutRecommendationsInput = {
    descriptionEn: string
    descriptionEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    descriptionEn: string
    descriptionEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomCreateOrConnectWithoutRecommendationsInput = {
    where: SymptomWhereUniqueInput
    create: XOR<SymptomCreateWithoutRecommendationsInput, SymptomUncheckedCreateWithoutRecommendationsInput>
  }

  export type MedicineCreateWithoutRecommendationsInput = {
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: MedicineAvailabilityCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateWithoutRecommendationsInput = {
    id?: number
    nameEn: string
    nameEs: string
    descriptionEn: string
    descriptionEs: string
    instructionsEn: string
    instructionsEs: string
    contraindicationsEn: string
    contraindicationsEs: string
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: MedicineAvailabilityUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineCreateOrConnectWithoutRecommendationsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutRecommendationsInput, MedicineUncheckedCreateWithoutRecommendationsInput>
  }

  export type SymptomUpsertWithoutRecommendationsInput = {
    update: XOR<SymptomUpdateWithoutRecommendationsInput, SymptomUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<SymptomCreateWithoutRecommendationsInput, SymptomUncheckedCreateWithoutRecommendationsInput>
    where?: SymptomWhereInput
  }

  export type SymptomUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: SymptomWhereInput
    data: XOR<SymptomUpdateWithoutRecommendationsInput, SymptomUncheckedUpdateWithoutRecommendationsInput>
  }

  export type SymptomUpdateWithoutRecommendationsInput = {
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUpsertWithoutRecommendationsInput = {
    update: XOR<MedicineUpdateWithoutRecommendationsInput, MedicineUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<MedicineCreateWithoutRecommendationsInput, MedicineUncheckedCreateWithoutRecommendationsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutRecommendationsInput, MedicineUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MedicineUpdateWithoutRecommendationsInput = {
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: MedicineAvailabilityUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateWithoutRecommendationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nameEn?: StringFieldUpdateOperationsInput | string
    nameEs?: StringFieldUpdateOperationsInput | string
    descriptionEn?: StringFieldUpdateOperationsInput | string
    descriptionEs?: StringFieldUpdateOperationsInput | string
    instructionsEn?: StringFieldUpdateOperationsInput | string
    instructionsEs?: StringFieldUpdateOperationsInput | string
    contraindicationsEn?: StringFieldUpdateOperationsInput | string
    contraindicationsEs?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: MedicineAvailabilityUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineAvailabilityCreateManyCountryInput = {
    id?: number
    medicineId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityUpdateWithoutCountryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type MedicineAvailabilityUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationCreateManySymptomInput = {
    id?: number
    medicineId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationUpdateWithoutSymptomInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicine?: MedicineUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type SymptomRecommendationUncheckedUpdateWithoutSymptomInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationUncheckedUpdateManyWithoutSymptomInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicineId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityCreateManyMedicineInput = {
    id?: number
    countryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SymptomRecommendationCreateManyMedicineInput = {
    id?: number
    symptomId: number
    priority: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAvailabilityUpdateWithoutMedicineInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountryUpdateOneRequiredWithoutMedicinesNestedInput
  }

  export type MedicineAvailabilityUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAvailabilityUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationUpdateWithoutMedicineInput = {
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    symptom?: SymptomUpdateOneRequiredWithoutRecommendationsNestedInput
  }

  export type SymptomRecommendationUncheckedUpdateWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SymptomRecommendationUncheckedUpdateManyWithoutMedicineInput = {
    id?: IntFieldUpdateOperationsInput | number
    symptomId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SymptomCountOutputTypeDefaultArgs instead
     */
    export type SymptomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SymptomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineCountOutputTypeDefaultArgs instead
     */
    export type MedicineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SymptomDefaultArgs instead
     */
    export type SymptomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SymptomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineDefaultArgs instead
     */
    export type MedicineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicineAvailabilityDefaultArgs instead
     */
    export type MedicineAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicineAvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SymptomRecommendationDefaultArgs instead
     */
    export type SymptomRecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SymptomRecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultationHistoryDefaultArgs instead
     */
    export type ConsultationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultationHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}