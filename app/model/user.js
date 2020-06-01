Ext.define('MyFirstApp.model.user', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'firstname',
        type: 'string'
    }, {
        name: 'lastname',
        type: 'string'
    }, {
        name: 'contact',
        type: 'string'
    }, {
        name: 'dob',
        type: 'date'
    },{
        name: 'emailid',
        type: 'string'
    },{
        name: 'id',
        type: 'int'
    }]
});