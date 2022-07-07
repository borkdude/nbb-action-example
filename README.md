# nbb-action-example

This is an example of how to use [nbb](https://github.com/borkdude/nbb), an
ad-hoc CLJS scripting tool for Node.js, to implement a Github action.

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

It was created using
[this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
tutorial but instead of JavaScript it uses a small JS wrapper `index.mjs` + the
actual CLJS script `action.cljs`.

## Running locally

Run:

``` shell
npm run action
```

to run the action locally.

## Bundle

To bundle `action.cljs` using `ncc`, run: `npm run bundle`.
This will create the file `dist/index.mjs`.

See [bundle](https://github.com/babashka/nbb/tree/main/doc/bundle) for more
details.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

## `time`

The time we greeted you.

## Example usage

``` yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: borkdude/nbb-action-example@v0.1.0
        with:
          who-to-greet: 'Mona the Octocat'
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

## Develop

See `bb tasks` for relevant tasks for development.
