/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyFirstApp.Application',

    name: 'MyFirstApp',

    requires: [
        // This will automatically load all classes in the MyFirstApp namespace
        // so that application classes do not need to require each other.
        'MyFirstApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyFirstApp.view.main.Main'
});
