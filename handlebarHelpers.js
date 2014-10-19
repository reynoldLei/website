var Handlebars = require('express-hbs');
// var _ = require('lodash');
var registerHelper = function (){
    Handlebars.registerHelper('imageUrl', function imageUrl(html) {
        console.log(html);
        var res = html.match(/\<img src=\"(.*)\" alt=\"(.*)\" \/\>/);
        console.log(res);
        return res && res[1];
    });
    Handlebars.registerHelper('timeTag', function timeTag(html){
    	var arr= html.match(/\<time src=\"(.*)\"\/\>/);
    	return arr && arr[1];
    });
    Handlebars.registerHelper('addrTag', function addrTag(html){
        console.log(html);
    	var arr= html.match(/\<addr src=\"(.*)\"\/\>/);
    	return arr && arr[1];
    });
};

module.exports = registerHelper;
