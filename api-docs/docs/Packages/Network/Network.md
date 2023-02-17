@front_web_mrmilu/network

# @front_web_mrmilu/network

## Table of contents

### Namespaces

- [NetworkInterfaces](modules/NetworkInterfaces.md)

### Classes

- [GraphqlClient](classes/GraphqlClient.md)

### Type aliases

- [MutationOptions](Network.md#mutationoptions)
- [QueryOptions](Network.md#queryoptions)

## Type aliases

### MutationOptions

Ƭ **MutationOptions**: `Object`

#### Type declaration

| Name           | Type                           |
| :------------- | :----------------------------- |
| `fetchPolicy?` | `MutationFetchPolicy`          |
| `headers`      | `Record`<`string`, `unknown`\> |

#### Defined in

[graphql_client.ts:9](https://github.com/mrmilu/front_web_mrmilu/blob/a26d51a/packages/network/src/graphql_client.ts#L9)

---

### QueryOptions

Ƭ **QueryOptions**: `Object`

#### Type declaration

| Name           | Type                           |
| :------------- | :----------------------------- |
| `fetchPolicy?` | `FetchPolicy`                  |
| `headers`      | `Record`<`string`, `unknown`\> |

#### Defined in

[graphql_client.ts:8](https://github.com/mrmilu/front_web_mrmilu/blob/a26d51a/packages/network/src/graphql_client.ts#L8)
