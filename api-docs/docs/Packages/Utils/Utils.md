@front_web_mrmilu/utils

# @front_web_mrmilu/utils

## Table of contents

### Classes

- [CookieUtils](classes/CookieUtils.md)

### Interfaces

- [CancelablePromise](interfaces/CancelablePromise.md)
- [SuspendedValue](interfaces/SuspendedValue.md)

### Functions

- [loadYupExtensions](Utils.md#loadyupextensions)
- [makeCancelable](Utils.md#makecancelable)
- [timeout](Utils.md#timeout)
- [wrapPromise](Utils.md#wrappromise)
- [wrapPromisePending](Utils.md#wrappromisepending)

## Functions

### loadYupExtensions

▸ **loadYupExtensions**(): `void`

#### Returns

`void`

#### Defined in

[yup_extensions.ts:11](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/utils/src/yup_extensions.ts#L11)

___

### makeCancelable

▸ **makeCancelable**<`T`\>(`promise`): [`CancelablePromise`](interfaces/CancelablePromise.md)<`T`\>

Function that lets you cancel then and catch chain of a promise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |

#### Returns

[`CancelablePromise`](interfaces/CancelablePromise.md)<`T`\>

#### Defined in

[promise.ts:23](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/utils/src/promise.ts#L23)

___

### timeout

▸ **timeout**(`miliseconds`): `Promise`<`void`\>

Promised based setTimeout

#### Parameters

| Name | Type |
| :------ | :------ |
| `miliseconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[promise.ts:5](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/utils/src/promise.ts#L5)

___

### wrapPromise

▸ **wrapPromise**<`T`\>(`promise`): [`SuspendedValue`](interfaces/SuspendedValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`\> |

#### Returns

[`SuspendedValue`](interfaces/SuspendedValue.md)<`T`\>

#### Defined in

[suspense_promise.ts:8](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/utils/src/suspense_promise.ts#L8)

___

### wrapPromisePending

▸ **wrapPromisePending**<`T`\>(): [`SuspendedValue`](interfaces/SuspendedValue.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`SuspendedValue`](interfaces/SuspendedValue.md)<`T`\>

#### Defined in

[suspense_promise.ts:39](https://github.com/mrmilu/front_web_mrmilu/blob/a9bdea5/packages/utils/src/suspense_promise.ts#L39)
