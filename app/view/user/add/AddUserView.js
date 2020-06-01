Ext.define('MyFirstApp.view.user.add.AddUserView', {
    extend: 'Ext.window.Window',
    xtype: 'adduserview',
    requires: [
        'MyFirstApp.view.user.add.AddUserController',
        'MyFirstApp.view.user.add.AddUserViewModel'
    ],
    viewModel: 'adduserviewmodel',
    controller: 'addusercontroller',
    header:true,
    config: {
        record: null,
        action:''
    },
    width: 500,
    items: [{
        xtype: 'formpanel',
        items: [{
            xtype: 'container',
            padding: '5 10 20 10',
            layout: 'vbox',
            items: [{
                xtype: 'textfield',
                label: 'First Name',
                allowBlank: false,
                required: true,
                bind: {
                    value: '{user.firstname}'
                }
            }, {
                xtype: 'textfield',
                label: 'Last Name',
                allowBlank: false,
                required: true,
                bind: {
                    value: '{user.lastname}'
                }
            }, {
                xtype: 'datefield',
                label: 'Date of birth',
                allowBlank: false,
                required: true,
                bind: {
                    value: '{user.dob}'
                }
            }, {
                xtype: 'textfield',
                label: 'Contact',
                allowBlank: false,
                required: true,
                bind: {
                    value: '{user.contact}'
                }
            }, {
                xtype: 'textfield',
                label: 'Email Id',
                allowBlank: false,
                required: true,
                bind: {
                    value: '{user.emailid}'
                }
            }]
        }],
        buttons: [{
            text: 'Submit',
            handler: 'onWinSubmit',
            itemId:'btnSubmit',
            formBind: true
        }, {
            text: 'Cancel',
            handler: 'onWinCancel'
        }]
    }]
});