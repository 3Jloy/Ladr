/**
 * Chars controller
 */
Ext.define('Ladr.controller.Chars', {
    extend: 'Ext.app.Controller',
    
    models: ['Char', 'ClickedChar', 'Address'],
    stores: ['Chars', 'ClickedChars', 'Addresses'],
    
    refs: [
        {ref: 'charTopBar',     selector: 'chartopbar'},
        {ref: 'charSideBar',    selector: 'charsidebar'},
        {ref: 'addressList',    selector: 'addressview'},
        {ref: 'chartPanel', selector: 'chartpanel'},
        {ref: 'chartWindow', selector: 'chratwindow'}
    ],
    
    init: function() {
        var me = this;
        
        me.control({
            'chartopbar': {
                itemclick: me.initCharAdr
            },
            'charsidebar': {
                selectionchange: me.showNestedAddress
            },
            '#showchartwindow': {
                click: me.showChart
            }
        });
    },
    
    onLaunch: function() {
        this.getCharTopBar().bindStore(this.getCharsStore());
    },

    showChart: function() {
        
        clicked_char_store = this.getClickedCharsStore();
        
        chart_window = Ext.create('Ladr.view.chart.Window');
        chart = chart_window.child('#charschart');
        chart.bindStore(clicked_char_store);
        chart_window.show();
        // chart.redraw();
    },

    showNestedAddress: function(view, records) {
        var me = this;
        me.getAddressList().bind(records[0], me.getAddressesStore());
    },

    initCharAdr: function(view, records){
        me = this;
        var char_to_store = {
            id: records.get('id'),
            char: records.get('char'),
            data: 0,
            addresses: []
        };
        Ext.Ajax.request({
            url: 'resources/ajax/ajax.php',
            params: {query: char_to_store.char},
            success: function(response, options){
                var data=Ext.decode(response.responseText);
                if(data.status == "OK"){
                  var addresses = [];  
                  Ext.iterate(data.results, function(value, key) {
                    addresses.push({
                        id: key,
                        address: value.formatted_address
                    });
                    current_adrr = value.formatted_address.toUpperCase();
                    char_to_store.data += current_adrr.split(records.get('char')).length - 1
                  });
                  char_to_store.addresses = addresses;
                  
                  me.getClickedCharsStore().loadRawData(char_to_store, true);

                  me.getCharSideBar().bindStore(me.getClickedCharsStore());
                }
                else{
                  Ext.Msg.alert('Error!!','Google API don\'t work');
                }
            }
        });
    },

});