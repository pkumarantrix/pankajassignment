Ext.define('MyFirstApp.view.user.list.UserViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.userviewmodel',
    stores: {
        userStore: {
            model: 'MyFirstApp.model.user',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: 'data.json'
            }
        }
    },
    data: {
        title: 'User List',
        record: null,
        selectedUser: false
    }
});