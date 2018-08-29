# ember-dynamic-render-template [![Build Status](https://travis-ci.org/miguelcobain/ember-dynamic-render-template.svg?branch=master)](https://travis-ci.org/miguelcobain/ember-dynamic-render-template)

This addon allows you to render from an handlebars string.

**NOTE1:** This is an experimental addon, mostly used for creating interactive examples.

**NOTE2:** This will include the handlebars compiler in your app.

## Usage

```hbs
{{render-template
  templateString="String: {{a}} + {{b}} = {{c}} - {{my-component}}"
  props=(hash a=1 b=1 c=2)}}
```

Installation
------------------------------------------------------------------------------

```
ember install ember-dynamic-render-template
```

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
