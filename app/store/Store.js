Ext.define('ak101.store.Store', {
  extend: 'Ext.data.Store',
  model: 'ak101.model.Model',
  autoLoad: true,
  proxy: {
    type: 'ajax',
    timeout: 40000,
    url: 'app/store/tpl.json',
    reader: {
      type: 'json',
      root: 'list.entries',
      record: 'entry'
    }
  }
});