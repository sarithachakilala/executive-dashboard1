Ext.define('Executive.dashboard1.store.ProfitLoss', {
    extend: 'Ext.data.Store',
    alias: 'store.profitloss',

    model: 'Executive.dashboard1.model.Profitloss',

    proxy: {
        type: 'ajax',
        url: 'resources/data/full_data.json',
        reader: 'json'
    }
});
