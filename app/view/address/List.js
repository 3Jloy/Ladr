/**
 * A view which displays a list of reviews for a specified book.
 * @extends Ext.view.View
 */
Ext.define('Ladr.view.address.List', {
    alias: 'widget.addresslist',
    extend: 'Ext.panel.Panel',

    requires: ['Ext.layout.container.Card'],

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
            border: false,
            flex: 1,
            id: 'test',

            layout: 'fit',

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
     * Used to bind a store to this dataview.
     * Delegates to bindStore and also shows this view
     * @param {Ext.data.Model} record The record to bind
     * @param {Ext.data.Store} store The addresses store used by the application
     */
    bind: function(record, store) {
        //put the addresses into the store and bind the store to thie dataview
        console.log(record.addresses());
        this.dataview.bindStore(record.addresses());
    }
});
