Ext.define('Ladr.view.chart.CharPie', {
  extend: 'Ext.chart.Chart',
  alias: 'widget.charpie',
  requires: ['Ext.chart.*'],

  initComponent: function() {
    Ext.apply(this, {
      store: 'Ladr.store.ClickedChars',
      id: 'charschart',
      animate: true,
      store: "ClickedChars",
      shadow: true,
      legend: {
          position: 'right'
      },
      insetPadding: 60,
      theme: 'Base:gradients',
      series: [{
        type: 'pie',
        // angleField: 'data',
        field: 'data',
        showInLegend: true,
        tips: {
          trackMouse: true,
          width: 140,
          height: 28,
          renderer: function(storeItem, item) {
            this.setTitle(storeItem.get('char') + ': ' + Math.round(storeItem.get('data')) + ' chars');
          }
        },
        highlight: {
          segment: {
            margin: 20
          }
        },
        label: {
            field: 'char',
            display: 'rotate',
            contrast: true,
            font: '18px Arial'
        }
      }],
    })
    this.callParent(arguments);
  }
  
});