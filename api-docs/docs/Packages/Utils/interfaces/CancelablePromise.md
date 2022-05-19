[@front_web_mrmilu/utils](../Utils.md) / CancelablePromise

# Interface: CancelablePromise<T\>

## Type parameters

| Name |
| :--- |
| `T`  |

## Table of contents

### Properties

- [promise](CancelablePromise.md#promise)

### Methods

- [cancel](CancelablePromise.md#cancel)
- [onCancel](CancelablePromise.md#oncancel)

## Properties

### promise

• **promise**: `Promise`<`T`\>

#### Defined in

[promise.ts:13](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/utils/src/promise.ts#L13)

## Methods

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

[promise.ts:14](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/utils/src/promise.ts#L14)

---

### onCancel

▸ **onCancel**(`callback`): `void`

#### Parameters

| Name       | Type         |
| :--------- | :----------- |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

[promise.ts:16](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/utils/src/promise.ts#L16)
