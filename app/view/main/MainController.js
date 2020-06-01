/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyFirstApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'MyFirstApp.view.user.add.AddUserView'
    ],
    alias: 'controller.main',
    routes: {
        'userlist': {
            action: 'onUsers'
        },
        'add': {
            action: 'onAddRecord'
        },
        'edit/:id': {
            action: 'onEditRecord'
        },
        'details/:id': {
            action: 'onDetailsRecord'
        },
        'delete/:id': {
            action: 'onDeleteRecord'
        }
    },
    onUsers: function () {
        var mainTabPanel = this.getView();;
        mainTabPanel.setActiveItem(1);
    },
    onAddRecord: function () {
        this.onUsers();
        this.getView().add({
            xtype: 'adduserview',
            title: 'Add New User',
            record: null,
            action: 'Add',
            listeners: {
                save: 'onSave'
            }
        }).show();
    },
    onSave: function (view, record, action) {
        debugger;
        var userViewMode = this.getView().down('userlist').getViewModel();
        if (action == 'Add') {
            var store = userViewMode.get('userStore');
            store.add({
                firstname: record.firstname,
                lastname: record.lastname,
                dob: record.dob.toLocaleDateString(),
                contact: record.contact,
                emailid: record.emailid
            });
            Ext.toast('Record added successfully!');
        } else {
            var selectedViewModel = userViewMode.get('userStore').getById(record.data.id)
            selectedViewModel.set({
                firstname: record.data.firstname,
                lastname: record.data.lastname,
                dob: record.data.dob.toLocaleDateString(),
                contact: record.data.contact,
                emailid: record.data.emailid
            });
            Ext.toast('Record updated successfully!');
        }
        view.hide();
    },
    onEditRecord: function (id) {
        var me = this;
        this.onUsers();
        var userListViewModel = me.getView().down('userlist').getViewModel();
        var selectedUser = userListViewModel.get('userStore').getById(id);
        if (!selectedUser) {
            Ext.toast('Did not find given id!');
        } else {
            me.getView().add({
                xtype: 'adduserview',
                title: 'Edit User',
                record: selectedUser,
                action: 'Edit',
                listeners: {
                    save: 'onSave'
                }
            }).show();
        }

    },
    onDetailsRecord: function (id) {
        debugger;
        var me = this;
        this.onUsers();
        var userListViewModel = me.getView().down('userlist').getViewModel();
        var selectedUser = userListViewModel.get('userStore').getById(id);
        if (!selectedUser) {
            Ext.toast('Did not find given id!');
        } else {
            me.getView().add({
                xtype: 'adduserview',
                title: 'User details',
                record: selectedUser,
                action: 'Details'
            }).show();
        }
    },
    onDeleteRecord: function (id) {
        debugger;
        var me = this;
        this.onUsers();
        var userListViewModel = me.getView().down('userlist').getViewModel();
        var selectedUser = userListViewModel.get('userStore').getById(id);
        if (!selectedUser) {
            Ext.toast('Did not find given id!');
        } else {
            Ext.Msg.confirm('Confirm', 'Are you sure want to delete?', function (choice) {
                if (choice === 'yes') {
                    selectedUser.drop();
                    Ext.toast('Record has been removed!');
                }
            }, this);
        }
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },
    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
