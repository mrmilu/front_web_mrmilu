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

Ƭ **AsyncState**: ``"resolved"`` \| ``"pending"`` \| ``"rejected"``

#### Defined in

[async_state.ts:3](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/async_state.ts#L3)

___

### BreakpointTypes

Ƭ **BreakpointTypes**: ``"sm"`` \| ``"md"`` \| ``"lg"``

#### Defined in

[breakpoint_match.ts:9](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/breakpoint_match.ts#L9)

## Functions

### useAsyncState

▸ **useAsyncState**(`delay?`): [`AsyncStateHookOutput`](interfaces/AsyncStateHookOutput.md)

Hook that after setting an executed promise returns its current state.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `delay` | `number` | `0` | Delay to be applied when resolving async state |

#### Returns

[`AsyncStateHookOutput`](interfaces/AsyncStateHookOutput.md)

#### Defined in

[async_state.ts:14](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/async_state.ts#L14)

___

### useBreakpointsMatch

▸ **useBreakpointsMatch**(`breakpoints?`): [`BreakpointsMatchHookOutput`](interfaces/BreakpointsMatchHookOutput.md)

Hook that based on breakpoints detects if viewport matches any of them via window.matchMedia.
Default breakpoints: {
  sm: 480,
  md: 768,
  lg: 1024
}

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `breakpoints` | `Record`<[`BreakpointTypes`](Hooks.md#breakpointtypes), `number`\> | `defaultBreakpoints` | Record of custom breakpoints corresponding to a set of sizes: sm, md and lg. |

#### Returns

[`BreakpointsMatchHookOutput`](interfaces/BreakpointsMatchHookOutput.md)

#### Defined in

[breakpoint_match.ts:32](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/breakpoint_match.ts#L32)

___

### useClickOutside

▸ **useClickOutside**(`ref`, `handler`): `void`

Hook that detects clicks outside an element and executes a handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ref` | `RefObject`<`HTMLElement`\> | React ref object |
| `handler` | (`event`: `Event`) => `void` | Event handler |

#### Returns

`void`

#### Defined in

[click_outisde.ts:9](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/click_outisde.ts#L9)

___

### useEffectStrictMode

▸ **useEffectStrictMode**(`effect`): `void`

useEffect hook for React 18 in strict mode that executes only ones in development mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | `EffectCallback` |

#### Returns

`void`

#### Defined in

[use_effect_strict_mode.ts:8](https://github.com/mrmilu/front_web_mrmilu/blob/5e11653/packages/hooks/src/use_effect_strict_mode.ts#L8)
