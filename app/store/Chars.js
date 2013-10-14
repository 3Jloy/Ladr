var temp = new Array();
var j = 0;
for (var i=65; i<=90; i++){
  temp.push({id: j, char: String.fromCharCode(i) });
  j++;
}

Ext.define('Ladr.store.Chars', {
  extend: 'Ext.data.Store',

  model: 'Ladr.model.Char',

  data: temp
});