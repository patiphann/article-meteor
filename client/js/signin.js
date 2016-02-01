Template.signin.rendered = function(){
  $('form#signin-form').validate({
    rules: {
      username: {required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Please enter your username to login.",
      },
      password: {
        required: "Please enter your password to login."
      }
    },
    submitHandler: function() {
      var user = {
        username: $('input#username').val(),
        password: $('input#password').val()
      };

      Meteor.loginWithPassword(user.username, user.password, function(error) {
        if(error){
          sAlert.closeAll();
          sAlert.error(error.reason, {html: true });
        }else{
          Router.go('/');
        }
      });
    }
  });
};

Template.signin.helpers({
  'isLogin': function(){
    if(Meteor.userId()){
      Router.go('/');
    }
  }
});

// Template.signin.events({  
//   'submit form#signin-form': function(e) {
//     e.preventDefault();

//     var user = {
//       username: $('input#signin-username').val(),
//       password: $('input#signin-password').val()
//     };

//     if(user.username && user.password){
//       Meteor.loginWithPassword(user.username, user.password, function(error) {
//         if(error){
//           alert(error);
//         }else{
//           Router.go('/');
//         }
//       });
//     }else{
//       throw new Meteor.Error("signin-username-password-null", "Username or password is null");
//     }
//   }
// });