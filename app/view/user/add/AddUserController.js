Ext.define('MyFirstApp.view.user.add.AddUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addusercontroller',
    init: function (view) {
        var me = this,
            vm = me.getViewModel(),
            user = view.getRecord();
        if (!user) {
            vm.getData().action = 'Add';
        } else {
            vm.getData().action = 'Edit';
        }
        vm.set('user', user);
        var action = view.getAction();
        if (action == 'Details') {
            view.query('.field').forEach(function (c) { c.setReadOnly(true);});
            view.query('#btnSubmit').forEach(function (c) { c.setDisabled(true);});
        } else {
            view.query('.field').forEach(function (c) { c.setReadOnly(false);});
            view.query('#btnSubmit').forEach(function (c) { c.setDisabled(false); });
        }
    },
    onWinCancel: function () {
        this.getView().hide();
    },
    onWinSubmit: function (btn) {
        debugger;
        var me = this;
        var record = me.getViewModel().get('user');
        var view = me.getView();
        var action = me.getViewModel().getData().action;
        me.getView().fireEvent('save', view, record, action);
    }
});
