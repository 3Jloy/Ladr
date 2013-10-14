/**
 * The sidebar view for the application. Used to display a list of books.
 * @extends Ext.view.View
 */
Ext.define('Ladr.view.char.SideBar', {
    alias: 'widget.charsidebar',
    extend: 'Ext.view.View',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'charsidebar',
            
            dock: 'left',
            width: 180,
            border: false,
            cls: 'sidebar-list',
            
            selModel: {
                deselectOnContainerClick: false
            },
            
            itemSelector: '.product',
            tpl: [
                '<div class="sidebar-title">Clicked Chars</div>',
                '<tpl for=".">',
                    '<div class="product">{char}</div>',
                '</tpl>'
            ],
        });
                
        this.callParent(arguments);
    }
});