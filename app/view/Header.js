/**
 * The application header displayed at the top of the viewport
 * @extends Ext.Component
 */
Ext.define('Ladr.view.Header', {
  extend: 'Ext.Component',
  
  dock: 'top',
  baseCls: 'app-header',
  
  initComponent: function() {
    Ext.applyIf(this, {
        html: 'Loading Addresses by Letter'
    });
            
    this.callParent(arguments);
  }
});