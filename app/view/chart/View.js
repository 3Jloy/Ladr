Ext.define('Ladr.view.chart.View', {
    alias: 'widget.chartview',
    extend: 'Ext.panel.Panel',

    requires: [
      'Ext.layout.container.Fit',
      'Ladr.view.chart.CharPie'
    ],

    initComponent: function() {
      Ext.apply(this, {
        dockedItems: [
          Ext.create('Ladr.view.Header', {
              html: 'Chart'
          })
        ],
        height: 600,
        layout: 'fit',
        items: [ { xtype: 'charpie'} ]
      })

      this.callParent(arguments);
    }
});
