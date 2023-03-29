[@front_web_mrmilu/utils](../Utils.md) / CookieUtils

# Class: CookieUtils

Static class with a set of cookie utils

## Table of contents

### Constructors

- [constructor](CookieUtils.md#constructor)

### Methods

- [cookieExpirationDate](CookieUtils.md#cookieexpirationdate)
- [eraseCookie](CookieUtils.md#erasecookie)
- [getCookie](CookieUtils.md#getcookie)
- [setCookie](CookieUtils.md#setcookie)

## Constructors

### constructor

• **new CookieUtils**()

## Methods

### cookieExpirationDate

▸ `Static` **cookieExpirationDate**(`days?`): `Date`

Generates an expiration date based in a amount of days

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `days` | `number` | `365` |

#### Returns

`Date`

#### Defined in

[cookie.ts:47](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/utils/src/cookie.ts#L47)

___

### eraseCookie

▸ `Static` **eraseCookie**(`name`): `void`

Erases cookie from document

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

[cookie.ts:39](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/utils/src/cookie.ts#L39)

___

### getCookie

▸ `Static` **getCookie**(`name`, `cookies?`): `string`

Gets cookie from document or provided cookie string

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `cookies?` | `string` | `document.cookie` |

#### Returns

`string`

#### Defined in

[cookie.ts:24](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/utils/src/cookie.ts#L24)

___

### setCookie

▸ `Static` **setCookie**(`name`, `value?`, `days?`): `void`

Sets cookie in document

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `value` | `string` | `""` |
| `days` | `number` | `365` |

#### Returns

`void`

#### Defined in

[cookie.ts:11](https://github.com/mrmilu/front_web_mrmilu/blob/f39c3e6/packages/utils/src/cookie.ts#L11)
