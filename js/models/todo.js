var app = app || {};

app.Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false,
	},
	//toggle completed state
	
	toggle: function(){
		this.save({
			completed: !this.get('completed')
		});
	}
});
