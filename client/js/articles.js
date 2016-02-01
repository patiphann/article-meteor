Deps.autorun(function(){
  Meteor.subscribe('articles', Session.get('query') );  
});

Template.articles.helpers({
	articles: function(){
		return Articles.find({}, { sort: { updatedAt: -1, createdAt: -1 } });
	},
	runNo: function(no){
		return no+1;
	},
	showUpdatedName: function(val){
		if(!val){
			return "-";
		}

		return val;
	},
	showUpdatedAt: function(val){
		if(!val){
		return "-";
		}

		return val;
	}
});

Template.articles.events({
	'click span#Remove': function(){
		if(confirm("Confirm remove article "+this.title)){
			Meteor.call('articleRemove', this, function(error, response){
				if(error){
					return alert(error.reason);
				}
			});
		}
	},
	'click .js-loadMore button': function () {
		loadMore({force: true});
	}
});

// Actions
function loadMore(opts) {
  var force = opts.force || false;
  var threshold, target = $('body');
  if (!target.length) return;

  threshold = $(window).scrollTop() + $(window).height() - target.height();

  // HACK: see http://www.meteorpedia.com/read/Infinite_Scrolling
  if (force || target.offset().top < threshold+1 && threshold < 2) {
    // console.log("OFF:"+ target.offset().top +" TR:"+  threshold +" ST:"+$(window).scrollTop() +" WH:"+ $(window).height()+" TH:"+target.height());
    var query = Session.get('query');
    // console.log(query);
    Session.set('query', { page:query.page+1})
  }
}

// init
Meteor.startup(function (argument) {
  Session.setDefault('query', {page:1})
  $(window).scroll(loadMore);
})