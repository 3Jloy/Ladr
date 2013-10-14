Ext.define('Ladr.view.chart.View', {
    alias: 'widget.chratview',
    extend: 'Ext.panel.Panel',

    requires: ['Ext.chart.*', 'Ext.layout.container.Fit', 'Ext.window.MessageBox'],

    initComponent: function() {
      Ext.apply(this, {
        layout: 'fit',
        items: [{
          xtype: 'chart',
          id: 'charschart',
          animate: true,
          store: [],
          shadow: true,
          legend: {
              position: 'right'
          },
          insetPadding: 60,
          theme: 'Base:gradients',
          series: [{
            type: 'pie',
            field: 'data',
            showInLegend: true,
            highlight: {
              segment: {
                  margin: 20
              }
            },
            label: {
                field: 'char',
                display: 'rotate',
                contrast: true,
                font: '14px Verdana'
            },
            tips: {
                trackMouse: true,
                width: 140,
                height: 28,
                renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('char') + ': ' + storeItem.get('data') + '%');
                }
            }
          }]
        }]
      })

      this.callParent(arguments);
    }
});
