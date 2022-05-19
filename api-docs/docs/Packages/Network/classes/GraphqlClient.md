[@front_web_mrmilu/network](../Network.md) / GraphqlClient

# Class: GraphqlClient

Graphql client abstraction of Apollo client.

## Table of contents

### Constructors

- [constructor](GraphqlClient.md#constructor)

### Properties

- [client](GraphqlClient.md#client)

### Methods

- [mutate](GraphqlClient.md#mutate)
- [query](GraphqlClient.md#query)

## Constructors

### constructor

• **new GraphqlClient**(`uri`, `possibleTypes?`)

#### Parameters

| Name             | Type               |
| :--------------- | :----------------- |
| `uri`            | `string`           |
| `possibleTypes?` | `PossibleTypesMap` |

#### Defined in

[graphql_client.ts:17](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/network/src/graphql_client.ts#L17)

## Properties

### client

• `Private` **client**: `ApolloClient`<`NormalizedCacheObject`\>

#### Defined in

[graphql_client.ts:15](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/network/src/graphql_client.ts#L15)

## Methods

### mutate

▸ **mutate**<`T`, `V`\>(`mutation`, `variables?`, `options?`): `Promise`<`T`\>

Graphql client mutate method

#### Type parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `T`  | `T`                            |
| `V`  | `Record`<`string`, `unknown`\> |

#### Parameters

| Name         | Type                                               |
| :----------- | :------------------------------------------------- |
| `mutation`   | `DocumentNode`                                     |
| `variables?` | `V`                                                |
| `options?`   | [`MutationOptions`](../Network.md#mutationoptions) |

#### Returns

`Promise`<`T`\>

#### Defined in

[graphql_client.ts:45](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/network/src/graphql_client.ts#L45)

---

### query

▸ **query**<`T`, `V`\>(`query`, `variables?`, `options?`): `Promise`<`T`\>

Graphql client query method

#### Type parameters

| Name | Type                           |
| :--- | :----------------------------- |
| `T`  | `T`                            |
| `V`  | `Record`<`string`, `unknown`\> |

#### Parameters

| Name         | Type                                         |
| :----------- | :------------------------------------------- |
| `query`      | `DocumentNode`                               |
| `variables?` | `V`                                          |
| `options?`   | [`QueryOptions`](../Network.md#queryoptions) |

#### Returns

`Promise`<`T`\>

#### Defined in

[graphql_client.ts:73](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/network/src/graphql_client.ts#L73)
