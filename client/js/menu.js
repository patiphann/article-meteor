Template.menu.events({  
  'click a#logout': function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});