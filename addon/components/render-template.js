import Component from '@ember/component';
import { setOwner, getOwner } from '@ember/application';
import { once } from '@ember/runloop';
import { compileTemplate } from '@ember/template-compilation';
import { assign } from '@ember/polyfills';
import layout from '../templates/components/render-template';


export default Component.extend({
  tagName: '',
  layout,

  props: null,

  didReceiveAttrs() {
    this._super(...arguments);

    once(this, function () {
      let owner = getOwner(this);
      let _props = this.get('props') || {};
      let domForAppWithGlimmer2 = owner.lookup('service:-document');

      let props = assign({}, _props, {
        layout: compileTemplate(this.get('templateString') || ''),
      });

      let ComponentFactory = owner.factoryFor('component:render-template-result');
      let componentInstance = ComponentFactory.create(props);
      let container;

      if (domForAppWithGlimmer2) {
        container = domForAppWithGlimmer2.createElement('div');
      } else {
        container = document.createElement('div');
      }

      setOwner(componentInstance, owner);
      componentInstance.appendTo(container);

      this.set('result', container);
    });
  }
});
