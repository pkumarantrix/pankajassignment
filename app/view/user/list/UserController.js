Ext.define('MyFirstApp.view.user.list.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usercontroller',
    onAddClick : function(){
        this.redirectTo('add');
    },
    onEditClick : function(){
        this.redirectTo('edit/1');
    },
    onDetialsClick:function(){
        this.redirectTo('details/1');
    },
    onRemoveClick:function(){
        this.redirectTo('delete/1');
    }
});
