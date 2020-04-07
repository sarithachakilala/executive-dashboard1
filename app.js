/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Executive.dashboard1.Application',

    name: 'Executive.dashboard1',

    requires: [
        // This will automatically load all classes in the Executive.dashboard1 namespace
        // so that application classes do not need to require each other.
        'Executive.dashboard1.*'
    ],

    // The name of the initial view to create.
    mainView: 'Executive.dashboard1.view.main.Main'
});
