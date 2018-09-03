import Component from '@ember/component';

/**
 * An empty component that the `render-template` component can
 * lookup and dynamically compile a template for.
 *
 * (Why? See: https://github.com/miguelcobain/ember-dynamic-render-template/pull/3#issuecomment-417972408)
 */
export default Component.extend({
  tagName: '',
});
