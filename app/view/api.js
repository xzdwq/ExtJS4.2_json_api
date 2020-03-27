Ext.define('ak101.view.api', {
  extend:'Ext.grid.Panel',
  alias: 'widget.api',
  region: 'center',
  initComponent: function() {
    this.store = 'ak101.store.Store',
    this.title = 'api',
    this.header = {
      style: {
        textAlign: 'right'
      }
    },
    this.columns = [
      { text: '&#8470</br>п/п', dataIndex: 'id', width: 100 },
      { text: 'Title', dataIndex: 'title', flex: 1 }
    ],
    this.callParent(arguments);
  }
});