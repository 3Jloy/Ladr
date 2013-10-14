Ext.define('Ladr.view.chart.Window', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chratwindow',

    requires: ['Ext.chart.*', 'Ext.layout.container.Fit', 'Ext.window.MessageBox'],

    height: 600,
    width: 800,
    title: 'Chart',
    autoScroll: true,
    layout: 'fit',
    
    initComponent: function() {
      Ext.apply(this, {
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
      // this.items = [{
      //   xtype: 'chart',
      //   id: 'charschart',
      //   store: 'Ladr.store.ClickedChars',
      //   legend: {
      //     position: 'right'
      //   },
      //   series: [{
      //     type: 'pie',
      //     field: 'data',
      //     showInLegend: true,
      //     highlight: {
      //       segment: {
      //           margin: 20
      //       }
      //     },
      //     label: {
      //         field: 'char',
      //         display: 'rotate',
      //         contrast: true,
      //         font: '14px Verdana'
      //     },
      //     tips: {
      //         trackMouse: true,
      //         width: 140,
      //         height: 28,
      //         renderer: function(storeItem, item) {
      //             this.setTitle(storeItem.get('char') + ': ' + storeItem.get('data') + '%');
      //         }
      //     }
      //   }]
      // }];

      this.callParent(arguments);
    }
});