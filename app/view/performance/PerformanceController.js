Ext.define('Executive.dashboard1.view.performance.PerformanceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.performance',

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    menuItemClick: function (button, menuitem) {
        var view = this.getView();
        view.setActiveState(menuitem.text);
    },

    updateActiveState: function (activeState) {
        var viewModel = this.getViewModel();

        viewModel.set('company', activeState);

        this.fireEvent('changeroute', this, 'quarterly/' + activeState);
    }
});
