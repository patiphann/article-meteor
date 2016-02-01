Meteor.methods({
    textArray: function(obj) {
        var text = "";

        _.each(obj, function(val){
            text += val+'<br>';
        });
        return text;
    }
});
