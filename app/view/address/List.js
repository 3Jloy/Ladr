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

  bind: function(record, store) {
    console.log(record.addresses());
    this.dataview.bindStore(record.addresses());
  }
});
