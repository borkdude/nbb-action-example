# nbb-action-example

This is an example of how to use [nbb](https://github.com/borkdude/nbb), an
ad-hoc CLJS scripting tool for Node.js, to implement a Github action.

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

It was created using
[this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
tutorial but instead of JavaScript it uses a small JS wrapper (see
`index.mjs`). The actual scripting is done in `action.cljs`.

All JS dependencies, including nbb, are compiled into a single file,
`dist/index.mjs`, using [ncc](https://github.com/vercel/ncc/). This is
recommended in the Github docs as an alternative to commit your `node_modules`
into git. Because `ncc` needs to statically know which dependencies are
required, this is done in the `index.mjs` wrapper and not inside the
`action.cljs` script.

Because Github actions uses an old version of Node.js (12), we can't run ES
modules yet. Because `nbb` is an ES module, for now we need Docker to run a
newer version of Node.js. That should not be needed once Github allows running a
newer version of Node.js in actions.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

```
uses: borkdude/nbb-action-example@main
with:
  who-to-greet: 'Mona the Octocat'
```
