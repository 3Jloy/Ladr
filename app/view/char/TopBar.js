Ext.define('Ladr.view.char.TopBar', {
  alias: 'widget.chartopbar',
  extend: 'Ext.view.View',
  
  initComponent: function() {
    Ext.apply(this, {
      id: 'topbar',
      
      dock: 'top',
      height: 50,
      border: false,
      margin: '0 0 30px 0',
      cls: 'topbar-list',
      
      selModel: {
        deselectOnContainerClick: false
      },
      
      itemSelector: '.char',
      tpl: [
        '<div class="sidebar-title">Chars</div>',
        '<tpl for=".">',
            '<span class="btn btn-info btn-sm char">{char}</span>',
        '</tpl>',
      ],
    });
            
    this.callParent(arguments);
  }
});