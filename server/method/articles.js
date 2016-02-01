Meteor.methods({
    articleSave: function (id, obj) {
		// Check user is signed in
	    if (!Meteor.userId()) {
	      throw new Meteor.Error("not-authorized", "not authorized");
	    }

	    // Check strings
	    check(obj.title, String);
	    check(obj.content, String);

	    var fullName = Meteor.user().profile.fullname;

	    if(!id){
	    	// add another value
		    obj.created_by = Meteor.userId();
		    obj.created_name = fullName;

	    	var articleId = Articles.insert(obj);
	    	obj._id = articleId;
	    }else{
	    	// add another value
		    obj.updated_by = Meteor.userId();
		    obj.updated_name = fullName;

	    	obj = Articles.update({ _id: id }, { $set: obj});
	    }
	    
	    return obj;
	},
	articleRemove: function (obj) {
		// Check user is signed in
	    if (!Meteor.userId()) {
	      throw new Meteor.Error("not-authorized", "not authorized");
	    }

		return Articles.remove(obj._id);
	}
});
