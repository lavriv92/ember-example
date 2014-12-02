App.Router.map(function() {
  this.resource('books', {path: '/books'}, function() {
    this.resource('book', {path: ':bookId'});
    this.route('new', {path: '/new'});
  });
  this.route('about', {path: '/about/'});
  this.route('contacts', {path: '/contacts/'});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    this.transitionTo('books');
  }
});

App.BooksRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('book');
  }
});

App.BookRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('book', params.bookId);
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {} 
});

App.ContactsRoute = Ember.Route.extend({
  model: function() {}
});
