Ext.define('Executive.dashboard1.view.profitloss.ProfitLossModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.profitloss',

    requires: [
        'Executive.dashboard1.model.MetaProfitloss',
        'Executive.dashboard1.model.Profitloss'
    ],

    stores: {
        metaProfitLoss: {
            model: 'Executive.dashboard1.model.MetaProfitloss',
            autoLoad: true,

            listeners: {
                load: 'onMetaDataLoad'
            },

            proxy: {
                type: 'ajax',
                url: 'resources/data/meta_data.json',

                reader: {
                    type: 'json'
                }
            }
        }
    }
});
