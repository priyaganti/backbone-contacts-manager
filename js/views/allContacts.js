ContactsManager.Views.Contacts = Backbone.View.extend({
  template: _.template($('#tpl-contacts').html()), // find an element with the given id and get all the html of that element and display it as the template

  //render each contact view
  renderOne: function(contact) {
   var itemView = new ContactsManager.Views.Contact({model: contact}); //instantiate a new contact view with the contact model
   this.$('.contacts-container').append(itemView.render().$el); //render the contact view and append it to the conatcts-container class of the ul tag
 },

 render: function() {
   var html = this.template();
   this.$el.html(html);
   //iterarte through the contacts collection and render each contact view
    this.collection.each(this.renderOne, this);
   return this;
 }
});
