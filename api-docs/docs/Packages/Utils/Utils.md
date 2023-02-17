@front_web_mrmilu/utils

# @front_web_mrmilu/utils

## Table of contents

### Classes

- [CookieUtils](classes/CookieUtils.md)

### Interfaces

- [CancelablePromise](interfaces/CancelablePromise.md)

### Functions

- [makeCancelable](Utils.md#makecancelable)
- [timeout](Utils.md#timeout)

## Functions

### makeCancelable

▸ **makeCancelable**<`T`\>(`promise`): [`CancelablePromise`](interfaces/CancelablePromise.md)<`T`\>

Function that lets you cancel then and catch chain of a promise.

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `promise` | `Promise`<`T`\> |

#### Returns

[`CancelablePromise`](interfaces/CancelablePromise.md)<`T`\>

#### Defined in

[promise.ts:23](https://github.com/mrmilu/front_web_mrmilu/blob/a26d51a/packages/utils/src/promise.ts#L23)

---

### timeout

▸ **timeout**(`miliseconds`): `Promise`<`void`\>

Promised based setTimeout

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `miliseconds` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[promise.ts:5](https://github.com/mrmilu/front_web_mrmilu/blob/a26d51a/packages/utils/src/promise.ts#L5)
