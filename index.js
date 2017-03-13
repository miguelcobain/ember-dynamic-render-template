/* jshint node: true */
'use strict';

const path = require('path');

module.exports = {
  name: 'ember-dynamic-render-template',
  included: function() {
    this._super.included.apply(this, arguments);

    var app;

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use this implementation borrowed from the _findHost()
      // method in ember-cli.
      var current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    app.import(this.templateCompilerPath());
  },

  // borrowed from ember-cli-htmlbars http://git.io/vJDrW
  projectConfig() {
    return this.project.config(process.env.EMBER_ENV);
  },

  // borrowed from ember-cli-htmlbars http://git.io/vJDrw
  templateCompilerPath() {
    let config = this.projectConfig();
    let templateCompilerPath = config['ember-cli-htmlbars'] && config['ember-cli-htmlbars'].templateCompilerPath;

    let ember = this.project.findAddonByName('ember-source');
    if (ember) {
      return ember.absolutePaths.templateCompiler;
    } else if (!templateCompilerPath) {
      templateCompilerPath = this.project.bowerDirectory + '/ember/ember-template-compiler.js'; // append .js so that app.import doesn't fail
    }

    return path.resolve(this.project.root, templateCompilerPath);
  }
};
