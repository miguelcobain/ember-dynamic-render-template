'use strict';

const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const path = require('path');
const resolve = require('resolve');

module.exports = {
  name: 'ember-dynamic-render-template',

  included() {
    this._super.included.apply(this, arguments);
    this.import(`${this._hasEmberSource() ? 'vendor' : 'bower_components'}/ember/ember-template-compiler.js`);
  },

  treeForVendor(vendor) {
    return new MergeTrees([
      vendor,
      this._templateCompilerTree()
    ].filter(Boolean));
  },

  _hasEmberSource() {
    return 'ember-source' in this.project.pkg.devDependencies;
  },

  _templateCompilerTree() {
    if (this._hasEmberSource()) {
      return new Funnel(path.dirname(resolve.sync('ember-source/package.json'), { basedir: this.project.root }), {
        srcDir: 'dist',
        destDir: 'ember'
      });
    }
  },
};
