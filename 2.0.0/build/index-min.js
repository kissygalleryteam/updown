/*!build time : 2013-10-23 3:03:58 PM*/
KISSY.add("kg/updown/2.0.0/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a),b._init()}return a.extend(d,c,{_init:function(){var b=this,c=b.get("el");c.delegate("click",".up",function(d){c.hasClass("marked")||(a.later(b.up,1e3,!1,b),b.toggleLoader(),c.addClass("marked")),d.preventDefault()}),c.delegate("click",".down",function(d){c.hasClass("marked")||(a.later(b.down,1e3,!1,b),b.toggleLoader(),c.addClass("marked")),d.preventDefault()})},up:function(){var a=this,b=a.get("el"),c=b.one(".up"),d=c.one(".num").text(),e=d.match(/\d+/g)[0];e++,c.one(".num").text("("+e+")"),a.toggleLoader()},down:function(){var a=this,b=a.get("el"),c=b.one(".down"),d=c.one(".num").text(),e=d.match(/\d/g)[0];e++,c.one(".num").text("("+e+")"),a.toggleLoader()},toggleLoader:function(){var a=this,b=a.get("el");b.one(".up").toggleClass("hidden"),b.one(".down").toggleClass("hidden"),b.one(".load").toggleClass("hidden")}},{ATTRS:{name:{value:"Updown"},el:{value:null}}}),d},{requires:["node","base"]});