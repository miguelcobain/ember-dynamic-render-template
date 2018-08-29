import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | render template', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders bare text', async function(assert) {
    assert.expect(1);

    await render(hbs`
      {{render-template templateString="abc"}}
    `);

    assert.dom('*').hasText('abc');
  });

  test('it renders bound values', async function(assert) {
    assert.expect(2);

    this.set('a', 1);

    await render(hbs`
      {{render-template templateString="{{a}}" props=(hash a=a)}}
    `);

    assert.dom('*').hasText('1');

    await this.set('a', 2);

    assert.dom('*').hasText('2');
  });

  test('it renders helpers', async function(assert) {
    assert.expect(1);

    this.set('a', 1);

    await render(hbs`
      {{render-template templateString="{{concat a 2}}" props=(hash a=a)}}
    `);

    assert.dom('*').hasText('12');
  });

  test('rerenders if `templateString` changes', async function(assert) {
    assert.expect(2);

    this.set('templateString', '{{concat 1 2}}');

    await render(hbs`
      {{render-template templateString=templateString}}
    `);

    assert.dom('*').hasText('12');

    this.set('templateString', '{{concat 2 1}}');

    assert.dom('*').hasText('21');
  });
});
