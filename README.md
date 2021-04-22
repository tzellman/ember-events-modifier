# ember-events-modifier

[![NPM][npm-badge-img]][npm-badge-link]
[![Build Status][build-status-img]][build-status-link]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]
[![Ember Version][ember-version]][ember-version-url]
[![Download count][npm-downloads-img]][npm-badge-link]
[![Code Climate][climate-badge]][climate-badge-url]
[![Test Coverage][coverage-badge]][coverage-badge-url]

## Installation

```
ember install ember-events-modifier
```

## Demo

[Demo](https://tzellman.github.io/ember-events-modifier/)

## Usage

### on-event

The `on-event` modifier allows you to register a handler for specific events.

Your action handler will be passed arguments that are provided when the action is triggered.

Note that the handler is automatically registered and removed on insertion/removal, respectively.

```handlebars
    <div {{on-event "blog-updated" this.reloadBlog}}>
        ...
    </div>
```

## Compatibility

-   Ember.js v3.12 or above
-   Ember CLI v2.13 or above
-   Node.js v10 or above

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[npm-badge-img]: https://badge.fury.io/js/ember-events-modifier.svg
[npm-badge-link]: http://badge.fury.io/js/ember-events-modifier
[build-status-img]: https://github.com/tzellman/ember-events-modifier/workflows/Build/badge.svg?branch=master&event=push
[build-status-link]: https://github.com/tzellman/ember-events-modifier/actions?query=workflow%3A%22Build%22
[npm-downloads-img]: https://img.shields.io/npm/dt/ember-events-modifier.svg
[ember-observer-badge]: http://emberobserver.com/badges/ember-events-modifier.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-events-modifier
[ember-version]: https://img.shields.io/badge/Ember-3.12%2B-brightgreen.svg
[ember-version-url]: https://blog.emberjs.com/2019/08/16/ember-3-12-released.html
[coverage-badge]: https://codeclimate.com/github/tzellman/ember-events-modifier/badges/coverage.svg
[coverage-badge-url]: https://codeclimate.com/github/tzellman/ember-events-modifier/test_coverage
[climate-badge]: https://codeclimate.com/github/tzellman/ember-events-modifier/badges/gpa.svg
[climate-badge-url]: https://codeclimate.com/github/tzellman/ember-events-modifier
