## Front Web Mr.Milú package

This package collects a handful amount of methods, classes, interfaces, hooks and more that can and should be reused
across any Mr.Milú project.

### Usage

Install dependencies

```shell
yarn
```

Build packages with any of this **two alternatives**:

- Create files and symlinks in the dist folders

```shell
yarn dev
```

- Build packages and watch for changes (works as `yarn build` but watches for changes)

```shell
yarn watch
```

### Add new package

Create folder inside `packages` with it's corresponding `src` folder and `index.ts`
entrypoint. It should look like this: `packages/my_new_package/src/index.ts`.

Inside package folder run `yarn init`, answer the questions (owner should be always Mr.Milú and version
must match current packages versions).

Once finished run the following command `yarn preconstruct init`, this will modify
the `package.json` file created by _yarn_ with ES Modules and CommonJS entrypoint for built package.

Finally, add to `package.json` the following property: `"sideEffects: false"`. **Avoid side effects at
all** between package parts, because with this property we are telling bundlers that code splitting
can be used between package parts (more info [here](https://stackoverflow.com/a/49203452/3416714)).

Now you can develop yor package exporting the desired methods, classes, etc. in the `index.ts` file.
