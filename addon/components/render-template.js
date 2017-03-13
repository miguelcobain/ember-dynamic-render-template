import Ember from 'ember';
import layout from '../templates/components/render-template';
const { Component, getOwner, HTMLBars, guidFor, merge } = Ember;

export default Component.extend({
  tagName: '',
  layout,

  props: {},

  didReceiveAttrs() {
    let owner = getOwner(this);

    let component = Component.extend(merge({
      layout: HTMLBars.compile(this.get('templateString'))
    }, this.get('props')));

    let componentName = `dynamic-${guidFor(component)}`;
    let componentLookupKey = `component:${componentName}`;

    owner.register(componentLookupKey, component);

    this.set('componentName', componentName);
  }
});
