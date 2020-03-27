Ext.define('ak101.view.Viewport', {
  extend:'Ext.container.Viewport',
  layout: 'fit',
  initComponent: function() {
    this.items = [{
      xtype: 'panel',
      itemId: 'view-panel',
      items: [
        { xtype: 'api' }
    ]
    }];
    this.callParent(arguments);
  }
});