Template.article.rendered = function(){
	$('form#article-form').validate({
		rules: {
			title: {
				required: true
			},
			content: {
				required: true
			}
		},
		messages: {
			title: {
				required: "Please enter your title.",
			},
			content: {
				required: "Please enter your content."
			}
		},
		submitHandler: function() {
			// serialize
			var form = {};

			$.each($("form#article-form").serializeArray(), function() {
				form[this.name] = this.value;
			});

			if(form.title.length && form.content.length){
				var id = Router.current().params.id;

				Meteor.call('articleSave', id, form, function(error, response){
					if(error){
						sAlert.closeAll();
						sAlert.error(error.reason, {html: true });
					}else{
						if(Router.current().params.action === 'edit'){
							sAlert.success("Save success!", {html: true });
						}else{
							Router.go('/');
						}
					}
				});
			}
		}
	});
};

Template.article.helpers({
	"isLogin": function(){
		if(!Meteor.userId()){
			Router.go('/');
		}
	},
	"action": function() {
		return Router.current().params.action;
	},
	"article": function(){
		return Router.current().data();
	}
});

// Template.article.events({
	
// });