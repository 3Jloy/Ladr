Ext.define('Ladr.view.chart.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.chratwindow',

    requires: [
      'Ext.layout.container.Fit',
      'Ladr.view.chart.CharPie'
    ],

    height: 600,
    width: 800,
    title: 'Chart',
    autoScroll: true,
    layout: 'fit',
    
    initComponent: function() {
      Ext.apply(this, {
        items: [ { xtype: 'charpie'} ]
      })
      this.callParent(arguments);
    }
});