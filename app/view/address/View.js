Ext.define('Ladr.view.address.View', {
    alias: 'widget.addressview',
    extend: 'Ext.panel.Panel',
    
    requires: ['Ext.Img'],
    
    initComponent: function() {
        this.dataview = Ext.create('Ext.view.View', {
            id: 'addresses',
            border: false,
            cls: 'address-list',

            autoScroll: true,

            itemSelector: '.address',
            tpl: [
                '<tpl for=".">',
                    '<div class="address">',
                        '{address}',
                    '</div>',
                '</tpl>',
            ],
        });

        Ext.apply(this, {
            cls: 'item-ct',
            flex: 2,
            border: false,
            autoScroll: true,
            layout: {
                type : 'hbox',
                availableSpaceOffset: Ext.getScrollbarSize().width
            },

            bbar: [
                { 
                    text:'Show Chart',
                    id: 'showchartwindow'
                }
            ],

            dockedItems: [
                Ext.create('Ladr.view.Header', {
                    html: 'Addresses'
                })
            ],
            
            items: this.dataview
        });
                
        this.callParent(arguments);
    },
    
    /**
     * Binds a record to this view
     */
    bind: function(record, store) {
        this.dataview.bindStore(record.addresses());
    }
});