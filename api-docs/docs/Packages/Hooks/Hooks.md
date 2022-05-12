@front_web_mrmilu/hooks

# @front_web_mrmilu/hooks

## Table of contents

### Interfaces

- [AsyncStateHookOutput](interfaces/AsyncStateHookOutput.md)
- [BreakpointsMatchHookOutput](interfaces/BreakpointsMatchHookOutput.md)

### Type aliases

- [AsyncState](Hooks.md#asyncstate)
- [BreakpointTypes](Hooks.md#breakpointtypes)

### Functions

- [useAsyncState](Hooks.md#useasyncstate)
- [useBreakpointsMatch](Hooks.md#usebreakpointsmatch)
- [useClickOutside](Hooks.md#useclickoutside)
- [useEffectStrictMode](Hooks.md#useeffectstrictmode)

## Type aliases

### AsyncState

Ƭ **AsyncState**: `"resolved"` \| `"pending"` \| `"rejected"`

#### Defined in

[async_state.ts:3](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/async_state.ts#L3)

---

### BreakpointTypes

Ƭ **BreakpointTypes**: `"sm"` \| `"md"` \| `"lg"`

#### Defined in

[breakpoint_match.ts:9](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/breakpoint_match.ts#L9)

## Functions

### useAsyncState

▸ **useAsyncState**(`delay?`): [`AsyncStateHookOutput`](interfaces/AsyncStateHookOutput.md)

Hook that after a setting an executed promise renders its current state.

#### Parameters

| Name    | Type     | Default value | Description                                    |
| :------ | :------- | :------------ | :--------------------------------------------- |
| `delay` | `number` | `0`           | Delay to be applied when resolving async state |

#### Returns

[`AsyncStateHookOutput`](interfaces/AsyncStateHookOutput.md)

#### Defined in

[async_state.ts:14](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/async_state.ts#L14)

---

### useBreakpointsMatch

▸ **useBreakpointsMatch**(`breakpoints?`): [`BreakpointsMatchHookOutput`](interfaces/BreakpointsMatchHookOutput.md)

#### Parameters

| Name          | Type                                                               | Default value        |
| :------------ | :----------------------------------------------------------------- | :------------------- |
| `breakpoints` | `Record`<[`BreakpointTypes`](Hooks.md#breakpointtypes), `number`\> | `defaultBreakpoints` |

#### Returns

[`BreakpointsMatchHookOutput`](interfaces/BreakpointsMatchHookOutput.md)

#### Defined in

[breakpoint_match.ts:23](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/breakpoint_match.ts#L23)

---

### useClickOutside

▸ **useClickOutside**(`ref`, `handler`): `void`

#### Parameters

| Name      | Type                         |
| :-------- | :--------------------------- |
| `ref`     | `RefObject`<`HTMLElement`\>  |
| `handler` | (`event`: `Event`) => `void` |

#### Returns

`void`

#### Defined in

[click_outisde.ts:4](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/click_outisde.ts#L4)

---

### useEffectStrictMode

▸ **useEffectStrictMode**(`effect`): `void`

#### Parameters

| Name     | Type             |
| :------- | :--------------- |
| `effect` | `EffectCallback` |

#### Returns

`void`

#### Defined in

[use_effect_strict_mode.ts:4](https://github.com/mrmilu/front_web_mrmilu/blob/dde8b62/packages/hooks/src/use_effect_strict_mode.ts#L4)
