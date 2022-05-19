# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/mrmilu/front_web_mrmilu/compare/v1.1.1...v1.2.0) (2022-05-19)


### Features

* **hooks:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([b3e9fad](https://github.com/mrmilu/front_web_mrmilu/commit/b3e9fad3d01f17f59db2c6a4a2c5913f0269a906))
* **network:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([bef0591](https://github.com/mrmilu/front_web_mrmilu/commit/bef0591a43284bb4474aed9dcaa0c33ec6a73af8))
* **root:** added docosaurus to show auto generated typedoc markdown files ([0c58f9d](https://github.com/mrmilu/front_web_mrmilu/commit/0c58f9dd1cbb791340d8fd192b1c6cf19f084ffc))
* **utils:** added typedoc.json config, exporting some interfaces and added JSDoc comments ([23ccd6a](https://github.com/mrmilu/front_web_mrmilu/commit/23ccd6af8c4f9f3cb741caaad8beeae93536811e))


### Bug Fixes

* **root:** added to github action test_coverage fetch-depth 0 ([519bfc5](https://github.com/mrmilu/front_web_mrmilu/commit/519bfc5b3047c57a930388e8e37621c5735b82ec))

### [1.1.1](https://github.com/mrmilu/front_web_mrmilu/compare/v1.1.0...v1.1.1) (2022-05-18)


### Bug Fixes

* **hooks:** added @babel/runtime as peerDepedency ([7006e38](https://github.com/mrmilu/front_web_mrmilu/commit/7006e38c0e26c576375aad04fb78a90345a59d5a))
* **network:** added @babel/runtime as peerDepedency ([5af316d](https://github.com/mrmilu/front_web_mrmilu/commit/5af316daa53b4162c00a723400d9e105a4688187))
* **root:** removed babel-runtime from root, completed readme and added babel-runtime to babel config ([1371e54](https://github.com/mrmilu/front_web_mrmilu/commit/1371e54e4662ef687e63fb59b762246defedb867))
* **services:** added @babel/runtime as peerDepedency ([c74b545](https://github.com/mrmilu/front_web_mrmilu/commit/c74b545526cc75d8fd6a188536ccefa23d53c8bd))
* **utils:** added @babel/runtime as peerDepedency ([1c9acfa](https://github.com/mrmilu/front_web_mrmilu/commit/1c9acfa29d8d3af3e9d606b50cb4ccee1b6ad566))

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
