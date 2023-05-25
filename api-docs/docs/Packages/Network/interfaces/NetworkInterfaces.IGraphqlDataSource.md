[@front_web_mrmilu/network](../Network.md) / [NetworkInterfaces](../modules/NetworkInterfaces.md) / IGraphqlDataSource

# Interface: IGraphqlDataSource

[NetworkInterfaces](../modules/NetworkInterfaces.md).IGraphqlDataSource

## Table of contents

### Methods

- [mutate](NetworkInterfaces.IGraphqlDataSource.md#mutate)
- [query](NetworkInterfaces.IGraphqlDataSource.md#query)

## Methods

### mutate

▸ **mutate**<`T`, `V`\>(`mutation`, `variables?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `V` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutation` | `DocumentNode` |
| `variables?` | `V` |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/graphql_data_source.ts:4](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/network/src/interfaces/graphql_data_source.ts#L4)

___

### query

▸ **query**<`T`, `V`\>(`query`, `variables?`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `V` | `Record`<`string`, `unknown`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `DocumentNode` |
| `variables?` | `V` |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/graphql_data_source.ts:5](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/network/src/interfaces/graphql_data_source.ts#L5)
