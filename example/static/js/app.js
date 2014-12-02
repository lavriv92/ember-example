'use strict';

var App = window.App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
    adapter: 'DS.RESTAdapter'
});
