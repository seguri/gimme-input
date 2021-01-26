# gimme-input

## Installation

    npm i -g @seguri/gimme-input

## Usage

In your script:

    #!/usr/bin/env node
    const { gimmeInput } = require('@seguri/gimme-input');

`gimmeInput()` will now return an array containing either the command line arguments or the lines piped into this script.

## Why

I was not satisfied by the existing libraries (commander, minimist, etc.), so why not [add more noise](https://xkcd.com/1579/).

I took this chance to refresh my knowledge of the javascript ecosystem and write something vaguely useful.

Given this script `to-kebab-case`:

    #!/usr/bin/env node
    const { gimmeInput } = require('gimme-input');
    const { kebabCase } = require('lodash');
    gimmeInput().map(kebabCase).forEach(s => console.log(s));

When it's time to create a new feature branch for your favourite microservice, you can go and copy the relative JIRA ticket title like "BOARD-123: Moar foo" and create a branch out of it:

    $ cd /your/git/project
    $ git checkout -b $(pbpaste | to-kebab-case)
    Switched to a new branch 'board-123-moar-foo'

## TODO

An example list of features that may never get implemented:

- [ ] support `\0` line separator
- [ ] read directly from clipboard to avoid `pbpaste | script-using-gimme-input`

