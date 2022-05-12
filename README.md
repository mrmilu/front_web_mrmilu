## Front Web Mr.Milú package

![](./coverage/badge.svg)

This package collects a handful amount of methods, classes, interfaces, hooks and more that can and should be reused
across any Mr.Milú project.

### Usage

Add [yalc](https://github.com/wclr/yalc) to your computer if you don't already have it

```shell
yarn global add yalc
```

Install dependencies

```shell
yarn
```

Build packages with any of this **two alternatives**:

- Builds packages

```shell
yarn build
```

- Build packages, watch for changes and pushes to yalc repo
  (it will automatically push changes to yalc)

```shell
yarn watch
```

#### Development process

If you want to test a package in your project the best way is to develop under `watch`
script because it automatically pushes to yalc local repository.

So to stay in sync with the feature you are developing in your project you must
link to yalc repo even though you have added to your `package.json` the real package depenedency

```json
{
  "dependencies": {
    "@front_web_mrmilu/services": "mrmilu/front_web_mrmilu#@front_web_mrmilu/services-v1.0.1"
  }
}
```

_This is not necessary to develop but if you already have it installed it won't interfere_

To link your package to your project with yalc run the following command

```shell
yalc link "@front_web_mrmilu/services" # here put the name of your package of choice
```

### Add new package

Create folder inside `packages`, with the package name (without prefix @front_web_mrimilu) and with it's corresponding `src` folder and `index.ts`
entrypoint. It should look like this: `packages/my_new_package/src/index.ts`.

Inside package folder run `yarn init`, answer the questions (owner should be always Mr.Milú and **version
MUST MATCH current packages versions**).

Once finished run the following command `yarn preconstruct init`, this will modify
the `package.json` file created by _yarn_ with ES Modules and CommonJS entrypoint for built package.

Add to `package.json` the following property: `"sideEffects: false"`. **Avoid side effects at
all** between package parts, because with this property we are telling bundlers that code splitting
can be used between package parts (more info [here](https://stackoverflow.com/a/49203452/3416714)).

Also, you will need to add the following script that it would be used by `yarn watch`
to push changes on change:

```json
{
  "scripts": {
    "yalc-push": "yalc push --private"
  }
}
```

Finally, publish the new package to `yalc`. To accomplish this go to the package dir and run
the following command

```shell
yalc publish
```

Now you can develop yor package exporting the desired methods, classes, etc. in the `index.ts` file.

### Committing changes

This project uses **conventional commits** and extends its usage. Each time you make a commit
it's obligatory to add a scope to your commit. This way when we make a release the automatically
generated changelog will show the scope of the commit. The accepted scopes
are: **root** and any package name **without** the prefix **@front_web_mrmilu**.

### Publishing release

Once you have finished your changes and done the commits correctly you
have to bump package versions and update changelog. This is done automatically
by running the following command:

```shell
yarn release
```

Once **standard version** updates packages versions and changelog you are able to both
push tags and publish packages. To achieve this, do the following:

```shell
git push --follow-tags origin master
yarn gitpkg-publish
```
