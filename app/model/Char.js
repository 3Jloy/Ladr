Ext.define('Ladr.model.Char', {
  extend: 'Ext.data.Model',
  proxy: {
      type: 'memory'
  },
  fields: [
      {name: 'id', type: 'int'},
      {name: 'char', type: 'string'}
  ],
});