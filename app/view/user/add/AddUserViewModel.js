Ext.define('MyFirstApp.view.user.add.AddUserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.adduserviewmodel',
    links: {
        user: {
            type: 'MyFirstApp.model.user',
            create: true
        }
    },
    data: {
        action: 'Add',
    }
});