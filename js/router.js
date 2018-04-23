/* Define all routes and their corresponding functions those need to be executed after hiting the route.
Ex: 'contacts' is the route and
    'displayContacts' defined inside the app.js is the function that needs to be executed on going to contacts route
*/
ContactsManger.Router = Backbone.Router.extend ({
  routes: {
    '': 'home',
    'contacts' : 'displayContacts',
    'contacts/new': 'newContact',
    'contacts/edit/:id' : 'editContact'
  }
});
