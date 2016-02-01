Template.registerHelper('formatDate', function(date, format) {
	var res = "-";

	if(date){
		res = moment(date).format(format);
	}

	return res;
});

Template.registerHelper('checkTypePage', function(typePage) {
	if(typePage === "view" || typePage === "edit"){
		return true;
	}

	return false;
});

Template.registerHelper('isEqual', function(v1, v2, text) {
	if(text){
		if(v1 === undefined){
			v1 = '';
		}

		if(v2 === undefined){
			v2 = '';
		}

		if(v1 == v2){
			return text;
		}

		return "";
	}else{
		return v1 == v2;
	}
});

Template.registerHelper('checkTextNull', function(text, res) {
	if(text){
		return text;
	}

	return res;
});