import Ember from 'ember';
import layout from '../templates/components/render-template';
const { Component, getOwner, HTMLBars, setOwner, run } = Ember;

export default Component.extend({
  tagName: '',
  layout,

  props: {},

  didReceiveAttrs() {
    this._super(...arguments);

    run.schedule('sync', () => {
      let owner = getOwner(this);

      let component = Component.extend({
        layout: HTMLBars.compile(this.get('templateString') || ''),
        renderer: owner.lookup('renderer:-dom')
      });

      let componentInstance = component.create(this.get('props'));
      setOwner(componentInstance, owner);

      let container = document.createElement('div');
      componentInstance.appendTo(container);

      this.set('result', container);
    });
  }

});
