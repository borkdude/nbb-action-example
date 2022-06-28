# nbb-action-example

This is an example of how to use [nbb](https://github.com/borkdude/nbb), an
ad-hoc CLJS scripting tool for Node.js, to implement a Github action.

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

It was created using
[this](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
tutorial but instead of JavaScript it uses a small JS wrapper `index.mjs` + the
actual CLJS script `action.cljs`.

## Dependencies

Actions expect their dependencies to be checked into source control. JavaScript
actions usually do this through a bundler like `ncc` which performs analysis and
tree-shaking. This approach doesn't work well with nbb: since it's an
interpreter, you cannot see statically which libraries are used.

Instead, the approach taken in this example is to zip the `node_modules`
directory and upload it to Github Releases. This is done by taking the version
from `package.json`, creating a pre-release for it and upload the zip file
there. Once you're ready to release a new version for the public, you just flip
the switch of the pre-release to release. The node modules are uploaded through
the `bb update-deps` task and requires a valid `GITHUB_TOKEN` to be set with
repository access.

Alternatively you can just call `npm install` before the action runs. In that case, replace `setup.mjs` with:

``` javascript
import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

execSync(`npm install`, {
  cwd: __dirname,
  stdio: 'inherit'});
```

The trade-off here is that the action will take longer to start but you don't
have to check in your dependencies into source control.

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
