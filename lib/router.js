// lib/router.js

Router.configure({
	layoutTemplate: "layout",
	// waitOn: function(){
	// 	return [Meteor.subscribe("articles", {}, { sort: { updatedAt: -1, createdAt: -1 }, limit: 10 })];
	// }
	// loadingTemplate: "loading"
});

Router.route('/', { 
	name: 'articles'
});

Router.route('/signup', { 
	name: 'signup'
});

Router.route('/signin', { 
	name: 'signin'
});

Router.route('/new-article', { 
	name: 'article',
	data: function(){
		return;
	}
});

Router.route('/list-article', { 
	template: 'articles'
});

Router.route('/article/:action/:id', { 
	template: 'article',
	onBeforeAction: function(){
		this.next();
	},
	data: function(){
		return Articles.findOne({ _id: this.params.id });
	}
});

/* var requireLogin = function(){
	if(!Meteor.user()){
		if(Meteor.loggingIn()){
			console.log("loading");
			// this.render("loading");
		} else {
			console.log("accessDenied");
			// this.render("accessDenied");
		}
	} else {
		this.next();
	}
}
 
Router.onBeforeAction(requireLogin); */