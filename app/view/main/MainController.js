/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Executive.dashboard1.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // },

    routes: {
        ':id': {
            action: 'onNavigate',
            before: 'beforeNavigate'
        },

        ':id/:state': {
            action: 'onNavigateDeep',
            before: 'beforeNavigateDeep'
        }
    },

    listen: {
        controller: {
            '*': {
                // We delegate all changes of router history to this controller by firing
                // the "changeroute" event from other controllers.
                changeroute: 'changeRoute',

                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },


    destroy: function () {
        Ext.destroyMembers(this, 'menu');
        this.callParent();
    },

    beforeNavigate: function (id, action) {
        var view = this.getView();
        var tab = view.getComponent(id);

        if (tab) {
            action.resume();
        } else {
            this.onBadRoute();
        }
    },

    beforeNavigateDeep: function (id, state, action) {
        var view = this.getView();
        var tab = view.getComponent(id);
        var valid;

        if (tab.isValidState) {
            valid = tab.isValidState(state);
        }

        if (valid) {
            action.resume();
        } else {
            this.onBadRoute();
        }
    },

    changeRoute: function (controller, route) {
        // Since we parse
        if (route.substring(0, 1) !== '!') {
            route = '!' + route;
        }

        this.redirectTo(route);
    },

    getTabRoute: function (tab) {
        var route = tab.xtype;

        if (tab.getActiveState) {
            route += '/' + (tab.getActiveState() || tab.getDefaultActiveState());
        }

        return route;
    },

    onBadRoute: function () {
        var app = ExecDashboard.app.getApplication();
        this.changeRoute(this, app.getDefaultToken());
    },

    onNavigate: function (id) {
        //Ext.log('navigate: ' + id);
        var tabs = this.getView();

        var tab = tabs.setActiveTab(id);
        if (tab) {
            // if we changed active tabs...
            var route = this.getTabRoute(tab);
            if (route && route !== id) {
                this.changeRoute(this, route);
            }
        }
    },

    onNavigateDeep: function (id, state) {
        //Ext.log('navigate: ' + id + ' / ' + state);
        var tabs = this.getView();
        var tab = tabs.setActiveTab(id) || tabs.getActiveTab();

        tab.setActiveState(state);
    },

    onTabChange: function (mainView, newTab) {
        var route = this.getTabRoute(newTab);
        this.changeRoute(this, route);
    },

    onMenuClick: function (menu, item) {
        this.getView().setActiveTab(menu.items.indexOf(item) + 1); // +1 for invisible first tab
    },

    onSwitchTool: function (e) {
        var menu = this.menu;

        if (!menu) {
            menu = this.getView().assistiveMenu;
            this.menu = menu = new Ext.menu.Menu(menu);
        }

        menu.showAt(e.getXY());
    },
    onUnmatchedRoute: function(token) {
        if (token) {
            this.onBadRoute();
        }
    },
    //graphs
    onAxisLabelRender: function(axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        var value = layoutContext.renderer(label);

        return value !== '0' ? (value / 1000 + ',000') : value;
    },

    onPreview: function() {
        var chart = this.lookup('chart');

        chart.preview();
    },

    getSeriesConfig: function(field, title) {
        return {
            type: 'area',
            title: title,
            xField: 'year',
            yField: field,
            style: {
                opacity: 0.60
            }
        };
    },

    onAfterRender: function() {
        var me = this,
            chart = me.lookup('chart');

        chart.setSeries([
            me.getSeriesConfig('usa', 'USA'),
            me.getSeriesConfig('china', 'China'),
            me.getSeriesConfig('japan', 'Japan')
        ]);
    }



});
