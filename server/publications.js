// Meteor.publish("articles", function (query, option) {
//     return Articles.find(query, option);
// });

Meteor.publish("articles", function (opts) {
  // console.log(opts);
  var now = new Date();
  var opts = opts || {};
  var page = opts.page || 1;
  // var search = (opts.filterTitle) ? {title: {$regex: opts.filterTitle, $options: 'i'}} : {}
  var res = Articles.find({}, { limit:page * 25, sort: { updatedAt: -1, createdAt: -1 } });
  // console.log('allMessages in '+(new Date() - now)+'ms') ;
  return res;
});