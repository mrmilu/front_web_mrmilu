[@front_web_mrmilu/network](../Network.md) / [NetworkInterfaces](../modules/NetworkInterfaces.md) / IRestDataSource

# Interface: IRestDataSource

[NetworkInterfaces](../modules/NetworkInterfaces.md).IRestDataSource

## Table of contents

### Methods

- [delete](NetworkInterfaces.IRestDataSource.md#delete)
- [get](NetworkInterfaces.IRestDataSource.md#get)
- [patch](NetworkInterfaces.IRestDataSource.md#patch)
- [post](NetworkInterfaces.IRestDataSource.md#post)
- [put](NetworkInterfaces.IRestDataSource.md#put)

## Methods

### delete

▸ `Optional` **delete**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`GetOptions`](NetworkInterfaces.GetOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/rest_data_source.ts:22](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/network/src/interfaces/rest_data_source.ts#L22)

___

### get

▸ `Optional` **get**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`GetOptions`](NetworkInterfaces.GetOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/rest_data_source.ts:14](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/network/src/interfaces/rest_data_source.ts#L14)

___

### patch

▸ `Optional` **patch**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`PostOptions`](NetworkInterfaces.PostOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/rest_data_source.ts:20](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/network/src/interfaces/rest_data_source.ts#L20)

___

### post

▸ `Optional` **post**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`PostOptions`](NetworkInterfaces.PostOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/rest_data_source.ts:16](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/network/src/interfaces/rest_data_source.ts#L16)

___

### put

▸ `Optional` **put**<`T`\>(`url`, `options?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`PostOptions`](NetworkInterfaces.PostOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[interfaces/rest_data_source.ts:18](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/network/src/interfaces/rest_data_source.ts#L18)
