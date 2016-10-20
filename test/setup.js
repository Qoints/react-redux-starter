require('babel-register')();
require('ignore-styles');

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<!doctype html><html><body><div id="app-container"></div></body></html>');
global.window = document.defaultView;

function storageMock() {
  var storage = {};

  return {
    setItem (key, value) {
      storage[key] = value || '';
    },
    getItem (key) {
      return storage[key] || null;
    },
    removeItem (key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key (i) {
      var keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

global.localStorage = storageMock();
global.expect = require('chai').expect;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

