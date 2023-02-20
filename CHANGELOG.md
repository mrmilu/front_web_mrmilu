# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.6.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.5.0...v1.6.0) (2023-02-20)

### Features

- edit eslintrc to apply rules of hooks to custom hook ([dcf8e8a](https://github.com/mrmilu/front_web_mrmilu/commit/dcf8e8aa16e5138be457f13e0528f83f1932b150))
- **hooks:** add comment to disable eslint warning ([2dfed59](https://github.com/mrmilu/front_web_mrmilu/commit/2dfed59ba96604f4f14b7fe15418c30b002576c5))
- **hooks:** change use effect strict mode hook ([dec4ea7](https://github.com/mrmilu/front_web_mrmilu/commit/dec4ea7ca563acfa5203f886ab3d4f12193c5981))
- **hooks:** create useEffectRunOnce hook instead of modifying useEffectStrictMode hook ([6297ba2](https://github.com/mrmilu/front_web_mrmilu/commit/6297ba20e64b98433f58c4bd9a1ae88ece653263))

## [1.5.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.4.0...v1.5.0) (2023-02-17)

### Features

- add components package with safe image component ([6590fe0](https://github.com/mrmilu/front_web_mrmilu/commit/6590fe0630733c7121362d401f8e5dce378e8cbe))
- **components:** change package name to react components ([db6bb13](https://github.com/mrmilu/front_web_mrmilu/commit/db6bb13555ced4726c3cf6fa7e81ffe66c8a4188))
- **react components:** change package name ([779b522](https://github.com/mrmilu/front_web_mrmilu/commit/779b5228e9043e13fe4cd906dd398960cfc22eba))
- **safe image component:** add tests ([35a2d71](https://github.com/mrmilu/front_web_mrmilu/commit/35a2d7179b43daa4380a04aefccd11754269b53f))

### Bug Fixes

- change file name in package json ([0ac71ad](https://github.com/mrmilu/front_web_mrmilu/commit/0ac71ad1e16b3954a26e185905c4cea6a41bc4ab))
- **react-components:** change package version ([7a36b80](https://github.com/mrmilu/front_web_mrmilu/commit/7a36b806c0f8dd7b0ed50d50f0d93c29564c99d8))
- **react-components:** use jsx ([8ae2da0](https://github.com/mrmilu/front_web_mrmilu/commit/8ae2da040771bd643818ed1df00c74fc4f352dea))
- **root:** add babel react preset ([c0fff1b](https://github.com/mrmilu/front_web_mrmilu/commit/c0fff1bb954d31e2be4ac4372cde67dff9e4fdd0))
- **root:** remove caret from dependency ([d99c79e](https://github.com/mrmilu/front_web_mrmilu/commit/d99c79ed10b395f15fc26051707f3d9c22a1b041))
- **typedoc:** do not change hooks typedoc ([8fbed75](https://github.com/mrmilu/front_web_mrmilu/commit/8fbed75f20c3374cee49e0a1168c8e505ebb764b))

## [1.4.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.3.0...v1.4.0) (2022-06-14)

### Features

- **root:** dropped gitpkg publish and publishing in npm ([85f5cfa](https://github.com/mrmilu/front_web_mrmilu/commit/85f5cfa09c28702d5575bec27863bebeb5ac4e1e))

## [1.3.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.2.0...v1.3.0) (2022-06-13)

### Features

- **utils:** getCookie method possibility to pass cookies string and defaulted to document.cookie ([d604508](https://github.com/mrmilu/front_web_mrmilu/commit/d60450899aa453c481d801cc93fc61312086489f))

### Bug Fixes

- **root:** release action removed yarn cache ([df34e4d](https://github.com/mrmilu/front_web_mrmilu/commit/df34e4df1a2a864933970097b97f1afc9c7cb1c6))

## [1.2.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.1.1...v1.2.0) (2022-05-19)

### Features

- **hooks:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([b3e9fad](https://github.com/mrmilu/front_web_mrmilu/commit/b3e9fad3d01f17f59db2c6a4a2c5913f0269a906))
- **network:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([bef0591](https://github.com/mrmilu/front_web_mrmilu/commit/bef0591a43284bb4474aed9dcaa0c33ec6a73af8))
- **root:** added docosaurus to show auto generated typedoc markdown files ([0c58f9d](https://github.com/mrmilu/front_web_mrmilu/commit/0c58f9dd1cbb791340d8fd192b1c6cf19f084ffc))
- **utils:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([23ccd6a](https://github.com/mrmilu/front_web_mrmilu/commit/23ccd6af8c4f9f3cb741caaad8beeae93536811e))

### Bug Fixes

- **root:** added to github action test_coverage fetch-depth 0 ([519bfc5](https://github.com/mrmilu/front_web_mrmilu/commit/519bfc5b3047c57a930388e8e37621c5735b82ec))

### [1.1.1](https://github.com/mrmilu/front_web_mrmilu/compare/v1.1.0...v1.1.1) (2022-05-18)

### Bug Fixes

- **hooks:** added @babel/runtime as peerDepedency ([7006e38](https://github.com/mrmilu/front_web_mrmilu/commit/7006e38c0e26c576375aad04fb78a90345a59d5a))
- **network:** added @babel/runtime as peerDepedency ([5af316d](https://github.com/mrmilu/front_web_mrmilu/commit/5af316daa53b4162c00a723400d9e105a4688187))
- **root:** removed babel-runtime from root, completed readme and added babel-runtime to babel config ([1371e54](https://github.com/mrmilu/front_web_mrmilu/commit/1371e54e4662ef687e63fb59b762246defedb867))
- **services:** added @babel/runtime as peerDepedency ([c74b545](https://github.com/mrmilu/front_web_mrmilu/commit/c74b545526cc75d8fd6a188536ccefa23d53c8bd))
- **utils:** added @babel/runtime as peerDepedency ([1c9acfa](https://github.com/mrmilu/front_web_mrmilu/commit/1c9acfa29d8d3af3e9d606b50cb4ccee1b6ad566))

## [1.1.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.0.1...v1.1.0) (2022-05-12)

### Features

- **hooks:** added use effect once hook ([88e57ab](https://github.com/mrmilu/front_web_mrmilu/commit/88e57ab196a06c47735a14705c8d230d94630a67))
- **root:** updated deps ([e6576bb](https://github.com/mrmilu/front_web_mrmilu/commit/e6576bb383881aa3965f95725becb147159e3073))

### Bug Fixes

- **hooks:** changed breakpoint_match.ts SSR check logic to make it simple to ignore coverage in test ([0562c00](https://github.com/mrmilu/front_web_mrmilu/commit/0562c007513b1c586ab5b789b7b3bf00bb972797))
- **root:** fixed eslint colliding versions ([b71eb96](https://github.com/mrmilu/front_web_mrmilu/commit/b71eb96573c0b29000984c723e6655a33b802cbc))

### [1.0.1](https://github.com/mrmilu/front_web_mrmilu/compare/v1.0.0...v1.0.1) (2022-05-10)

### Bug Fixes

- **root:** changed husky hooks ([433ca5c](https://github.com/mrmilu/front_web_mrmilu/commit/433ca5cc1b0e61569bc230315745fddff3079d52))
- **root:** fixed clashing babel config between preconstruct and jest ([ad10e63](https://github.com/mrmilu/front_web_mrmilu/commit/ad10e639b8dd09e013fad9f6af3768739b73c20a))
- **root:** fixed wrong push branch for tags ([07ff8d8](https://github.com/mrmilu/front_web_mrmilu/commit/07ff8d89c8bfcf1e261bcaf6bfd00a09179b5ab1))
- **root:** github actiona added node environment ([a5781f0](https://github.com/mrmilu/front_web_mrmilu/commit/a5781f0608924cf9ae8e4fb9212da725fe6b20f7))
- **root:** husky hook order ([1ca7391](https://github.com/mrmilu/front_web_mrmilu/commit/1ca73915ed5fab5ecc98da75b74976f6a2e57ad5))
- **root:** missed adding coverage in test workflow ([c17155b](https://github.com/mrmilu/front_web_mrmilu/commit/c17155ba3e5252e749f7004bbc5fb16402184d8d))
- **root:** removed git commit and push from test:badges ([1a02091](https://github.com/mrmilu/front_web_mrmilu/commit/1a0209148cf1f35dd4b6b3cc35f17b874baab0b3))
- **root:** worng yml format for workflow ([96bafd4](https://github.com/mrmilu/front_web_mrmilu/commit/96bafd47cd3c22c824bf878603ffad423e80d170))
- **root:** wrong multiline run ([9cde987](https://github.com/mrmilu/front_web_mrmilu/commit/9cde9873bdb3a294b44023f43bfa99bece2eb3e3))
- **root:** wrong no verify flag ([d7f41f0](https://github.com/mrmilu/front_web_mrmilu/commit/d7f41f05c56fc42669bd61a786ad676b42e48f1e))
- **utils:** added yup tests and fixed isNumber validation ([b6198ef](https://github.com/mrmilu/front_web_mrmilu/commit/b6198ef34c0974ac642c7209e8ad63e0abb93075))

## 1.0.0 (2022-05-04)

### Features

- added cookie utils ([6157a55](https://github.com/mrmilu/front_web_mrmilu/commit/6157a559fa6334dfa1a83192cce8386d5a858dbc))
- **hooks:** added package hooks ([a30a1f2](https://github.com/mrmilu/front_web_mrmilu/commit/a30a1f241a4e9ef3aeda6dfafa0c1a572ed1ef5a))
- **network:** added network package ([cc5dbba](https://github.com/mrmilu/front_web_mrmilu/commit/cc5dbba45e555f8a2fbbdfe1ad23f2ebebe2915a))
- **root:** testing changelong ([cd3b9b2](https://github.com/mrmilu/front_web_mrmilu/commit/cd3b9b29eda7b7ac7bfd37428ea3aeed02bcfca0))
- **utils:** added cookie utils tests ([d057fba](https://github.com/mrmilu/front_web_mrmilu/commit/d057fbae427986d973e2a13a5bd3179e4595c25f))
- **utils:** added middleware gate function ([8fdef21](https://github.com/mrmilu/front_web_mrmilu/commit/8fdef21cd061c42d35304b47544bc49ed0cae58d))
- **utils:** added promise and yup extensions ([28982e3](https://github.com/mrmilu/front_web_mrmilu/commit/28982e353d84ba95dd6bb1285b5d9f6707cf6c1e))

### Bug Fixes

- reseted package versions ([558843b](https://github.com/mrmilu/front_web_mrmilu/commit/558843b08334c8db38e32b36791f17af3507bcb0))
- **root:** added patch script ([474fd10](https://github.com/mrmilu/front_web_mrmilu/commit/474fd102a08cc62d02fd738838008dcd540b2b70))
- **root:** fixing standard version config ([ffb51f6](https://github.com/mrmilu/front_web_mrmilu/commit/ffb51f667c78afa8711cb487e5f72490e0f6eebc))
- **root:** readdirSync commonjs import ([018229a](https://github.com/mrmilu/front_web_mrmilu/commit/018229a9e59fe15d91484cb5ab374f9640b70e18))
