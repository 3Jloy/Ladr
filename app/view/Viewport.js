/**
* The main application viewport, which displays the whole application
* @extends Ext.Viewport
*/
Ext.define('Ladr.view.Viewport', {
  extend: 'Ext.Viewport',    
  layout: 'fit',
  
  requires: [
    'Ladr.view.Header',
    'Ladr.view.address.List',
    'Ladr.view.char.TopBar',
    'Ladr.view.char.SideBar',
    'Ladr.view.chart.Window',
    'Ladr.view.chart.CharPie'
  ],
  
  initComponent: function() {
    var me = this;
    
    Ext.apply(me, {
      items: [
        {
          xtype: 'panel',
          border: false,
          id    : 'viewport',
          layout: {
              type: 'vbox',
              align: 'stretch'
          },
          
          dockedItems: [
            Ext.create('Ladr.view.Header'),
            Ext.create('Ladr.view.char.SideBar'),
            Ext.create('Ladr.view.char.TopBar')
          ],
          
          items: [
            Ext.create('Ladr.view.address.View'),
          ]
        }
      ]
    });
            
    me.callParent(arguments);
  }
});