Ext.define('MyFirstApp.view.user.list.UserView', {
    extend: 'Ext.Panel',
    xtype: 'userlist',
    requires: [
        'MyFirstApp.view.user.list.UserViewModel',
        'MyFirstApp.view.user.list.UserController'
    ],
    viewModel:{type:'userviewmodel'},
    controller: 'usercontroller',
    bind: {
        title: '{title}'
    },
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    tbar: {
        items: [{
            xtype: 'button',
            text: 'New',
            handler: 'onAddClick'
        }, {
            xtype: 'button',
            text: 'Edit',
            handler: 'onEditClick'
        }, {
            xtype: 'button',
            text: 'Remove',
            handler: 'onRemoveClick',
        },{
            xtype: 'button',
            text: 'Details',
            handler: 'onDetialsClick',
        }]
    },
    items: [{
        xtype: 'grid',
        reference:'userGridView',
        bind: {
            store: '{userStore}',
            selection: '{selectedUser}'
        },
        layout: 'fit',
        height: 500,
        columns: [{
            text: 'First Name',
            dataIndex: 'firstname',
            hidden:true,
            flex: 1
        }, {
            text: 'Last Name',
            flex: 1,
            dataIndex: 'lastname',
            hidden:true,
        },{
            xtype:'templatecolumn', 
            text: 'Name',
            tpl:'{firstname} {lastname}',
            flex: 1
        }, {
            text: 'Contact Number',
            flex: 1,
            dataIndex: 'contact'
        }, {
            xtype: 'datecolumn',
            text: 'Date of birth',
            flex: 1,
            dataIndex: 'dob',
            format:'d-m-Y'
        },{
            text: 'Email Id',
            flex: 1,
            dataIndex: 'emailid'
        }]

    }]
});