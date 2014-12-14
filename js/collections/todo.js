var app = app || {};

var TodoList = Backbone.Collection.extend({
	//Reference this collection's model
	
	model: app.Toddo,
	//save all of the todos to todos-backbone namespace
	localStorage: new Backbone.LocalStorage('todos-backbone'),
	//filtering completed todos
	completed: function(){
		return this.filter(function( todo ){
			return todo.get('complete');
		});
	},
	//filter down list to only not finished
	remaining: function(){
		return this.without.apply( this, this.completed() );
	},
	//keep todos in sequential order
	nextOrder: function(){
		if( !this.length ) {
			return 1;
		}
		return this.last().get('order') + 1;
	},
	//todos are sorted by their original order
	comparator: function( todo ){
		return todo.get('order');
	}
});

//create new global collection of todos
app.Todos = new TodoList();
