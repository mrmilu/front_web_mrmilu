[@front_web_mrmilu/services](../Services.md) / TagManagerService

# Class: TagManagerService

Google tag manager service for sending events to data layer

## Table of contents

### Constructors

- [constructor](TagManagerService.md#constructor)

### Properties

- [dataLayer](TagManagerService.md#datalayer)

### Methods

- [sendEvent](TagManagerService.md#sendevent)

## Constructors

### constructor

• **new TagManagerService**()

#### Defined in

[tag_manager_service.ts:19](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/services/src/tag_manager_service.ts#L19)

## Properties

### dataLayer

• `Private` `Readonly` **dataLayer**: `unknown`[] = `null`

#### Defined in

[tag_manager_service.ts:17](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/services/src/tag_manager_service.ts#L17)

## Methods

### sendEvent

▸ **sendEvent**(`name`, `parameters?`): `void`

Tag manager push to data layer method

#### Parameters

| Name          | Type                          |
| :------------ | :---------------------------- |
| `name`        | `string`                      |
| `parameters?` | `Record`<`string`, `string`\> |

#### Returns

`void`

#### Defined in

[tag_manager_service.ts:31](https://github.com/mrmilu/front_web_mrmilu/blob/f23b242/packages/services/src/tag_manager_service.ts#L31)
