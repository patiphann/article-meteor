Template.signup.rendered = function(){
  $('form#signup-form').validate({
    rules: {
      username: {required: true
      },
      email: {
        required: true,
        email: true
      },
      fullname: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Please enter your username.",
      },
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      fullname: {
        required: "Please enter your full name."
      },
      password: {
        required: "Please enter your password."
      }
    },
    submitHandler: function() {
      var user = {
        username: $('input#username').val(),
        password: $('input#password').val(),
        profile: {
          fullname: $('input#fullname').val(),
          email: $('input#email').val()
        }
      };

      Accounts.createUser(user, function (error) {
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

Template.signup.helpers({
  'isLogin': function(){
    if(Meteor.userId()){
      Router.go('/');
    }
  }
});

// Template.signup.events({  
//   'submit form#signup-form': function(e) {
//     e.preventDefault();

//     var user = {
//       username: $('input#username').val(),
//       password: $('input#password').val(),
//       profile: {
//         fullname: $('input#fullname').val(),
//         email: $('input#email').val()
//       }
//     };

//     Accounts.createUser(user, function (error) {
//       if(error){
//         sAlert.closeAll();
//         sAlert.error(error.reason, {html: true });
//       }else{
//         Router.go('/');
//       }
//     });
//   }
// });