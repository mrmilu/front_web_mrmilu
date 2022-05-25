## Front Web Mr.Milú package

![](./coverage/badge.svg)

This package collects a handful amount of methods, classes, interfaces, hooks and more that can and should be reused
across any Mr.Milú project.

### [API Docs](https://mrmilu.github.io/front_web_mrmilu/)

### Usage

Add [yalc](https://github.com/wclr/yalc) local repository to your computer if you don't already have it

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

- Build packages, watch for changes and automatically pushes to yalc repo

```shell
yarn watch
```

#### Development process

If you want to test a package in your project, the best way is to develop under `watch`
script because it automatically pushes to yalc local repository.

So to stay in sync with the feature you are developing in your project you must
link to yalc repo even if you have already added the real package to your `package.json`

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

Now your `node_modules` package it's linked to your local yalc repository.

### Add new package

Create a folder inside `packages`, with the package name (without the prefix @front_web_mrimilu) and with it's corresponding `src` folder and `index.ts`
entrypoint. It should look like this: `packages/my_new_package/src/index.ts`.

Inside the package folder run `yarn init`, answer the questions (owner should be always Mr.Milú and **version
MUST MATCH current packages versions**. For example if all packages are in version `1.0.0` you should answer `1.0.0` to yarn questions).

Once finished run the following command `yarn preconstruct init`, this will modify
the `package.json` file created by _yarn_ with the corresponding ES Modules and CommonJS entrypoint.

Then add to the `package.json` the following property: `"sideEffects: false"`. By adding this we are telling bundlers that code splitting
can be used between package parts, so **avoid side effects at
all cost** between them (more info [here](https://stackoverflow.com/a/49203452/3416714)).

Also, you will need to add the following script and `peerDependency`. The script it would be used by `yarn watch`
to push changes to yalc on change and babel-runtime it will be used by babel-regenerator to add babel helpers
to your package on runtime:

```json
{
  "scripts": {
    "yalc-push": "yalc push --private"
  },
  "peerDependencies": {
    "react": "18.x",
    "@babel/runtime": "7.x"
  }
}
```

Then create a file named `typedoc.json`. This file weill be used by [TypeDoc](https://typedoc.org/) to automatically generate markdown
documentation based on exported methods, classes and interfaces. Inside this file put the following:

```json
{
  "entryPoints": ["src/index.ts"],
  "out": "../../api-docs/docs/Packages/{Package name with capital case. For example: Network}",
  "readme": "none",
  "plugin": "typedoc-plugin-markdown",
  "entryDocument": "{Package name with capital case. For example: Network}.md",
  "excludeExternals": true
}
```

Finally, publish the new package to `yalc`. To accomplish this go to the package dir and run
the following command

```shell
yalc publish
```

Now you can develop your package by exporting the desired methods, classes, etc. in the `index.ts` file.

Final example of a `package.json` file

```json
{
  "name": "@front_web_mrmilu/{packageName}}",
  "version": "1.1.0",
  "main": "dist/front_web_mrmilu-{packageName}.cjs.js",
  "module": "dist/front_web_mrmilu-{packageName}.esm.js",
  "author": "Mr.Milú",
  "license": "MIT",
  "sideEffects": false,
  "scripts": {
    "yalc-push": "yalc push --private"
  },
  "peerDependencies": {
    "@babel/runtime": "7.x"
  }
}
```

### Committing changes

This project uses **[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)** with the package [commitlint](https://github.com/conventional-changelog/commitlint)
and extends its usage. Each time you make a commit it's obligatory to add a **scope** to your commit.
This way when we make a release the automatically generated changelog will show in which package changes have been made. The accepted scopes
are: **root** (when changes at root level are made) and any package name (dir name) **without** the prefix **@front_web_mrmilu**.

### Publishing release

> This process **should not be executed locally** because it's done
> automatically through a GitHub action when merging to master branch or pushing to it. It is in
> the README just for documentary purpose.
> If you want to push to **master** (_which you shouldn't_) without triggering GitHub actions
> run the command `yarn skip-ci` and then push. This will create an empty commit with the corresponding
> message telling GitHub to skip action workflows in that commit push.

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

Packages in this repo are published as git tags, so the repository works also as a package repository.
In future versions this could be migrated to a private npm repository.
