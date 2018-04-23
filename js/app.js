// Global object for namespace
window.ContactsManager =  {
  Models : {},
  Collections: {},
  Views: {},

  start: function(data){
    var contacts = new ContactsManager.Collections.Contacts(data.contacts); // instantiate a new collection
    var router = new ContactsManager.Router(); // instantiate a new router

    // define the functions that need to be executed on hitting the given route
    router.on('route:home', function(){
      router.navigate('contacts', {
        trigger: true,
        replace: true
      });
    });

    router.on('route:displayContacts', function(){
      //instantiate a contacts view and pass the data in the form of collection object to the view
      var contactsView = new ContactsManager.Views.Contacts({
        collection: contacts
      });
      //find the element with class main-container and within it's html display the result you get from render function of the contacts view
      $('.main-container').html(contactsView.render().$el);
    });

    Backbone.history.start();
  }
};
