/**
 * This view is an example list of people.
 */
Ext.define('Executive.dashboard1.view.profitloss.ProfitLoss', {
    extend: 'Ext.grid.Panel',
    xtype: 'profitloss',

    requires: [
        'Ext.grid.feature.Grouping',
        'Executive.dashboard1.store.ProfitLoss'
    ],

    cls: 'dynamic-pl-grid',
    
    controller: 'profitloss',

    viewModel: {
        type: 'profitloss'
    },

    enableLocking: true,
    
    store: {
        type: 'profitloss',
        sorters: 'id',
        groupField: 'account'
    },

    features: [{
        ftype: 'grouping',
        id: 'profitLossGrouper',
        groupHeaderTpl: '<b>{name}</b>',
        startCollapsed: false
    }],

    tbar: [{
        text: 'Quarter',
        width: 150,
        textAlign: 'left',
        reference: 'quartersButton',
        menu: {
            id: 'quarter-menu',
            cls: 'pl-option-menu',
            items: []
        }
    },{
        text: 'Region',
        width: 150,
        textAlign: 'left',
        reference: 'regionsButton',
        menu: {
            id: 'region-menu',
            cls: 'pl-option-menu',
            items: []
        }
    }],

    regionColumn: {
        text:'Region',
        dataIndex:'region',
        menuDisabled: true,
        sortable: false,
        resizable: false,
        hideable: false,
        groupable: false,
        locked: true,

        plugins: 'responsive',
        responsiveConfig: {
            'width < 600': {
                width: 150
            },
            'width >= 600': {
                width: 320
            }
        }
    },

    menuItemDefaults: {
        checked: true,
        hideOnClick: false
    },

    quarterColumnDefaults: {
        formatter: 'currency',
        flex: 1,
        minWidth: 130,
        align: 'right',
        groupable: false,
        menuDisabled: true,
        resizable: false,
        sortable: false,
        summaryType: 'sum'
    }
});
