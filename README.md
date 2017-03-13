# ember-dynamic-render-template

This addon allows you to render from an handlebars string.

**NOTE1:** This is an experimental addon, mostly used for creating interactive examples.

**NOTE2:** This will include the handlebars compiler in your app.

## Usage

```hbs
{{render-template
  templateString="String: {{a}} + {{b}} = {{c}} - {{my-component}}"
  props=(hash a=1 b=1 c=2)}}
```

## Installation

```
ember install ember-dynamic-render-template
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
