/**
 * Model for a clickedchar
 */
Ext.define('Ladr.model.ClickedChar', {
    extend: 'Ext.data.Model',
    requires: ['Ladr.model.Address', 'Ext.data.association.HasMany', 'Ext.data.association.BelongsTo'],

    fields: [
        'id',
        'char',
        'data',
    ],

    hasMany: {
        model: 'Ladr.model.Address', 
        name: 'addresses',
        foreignKey: 'char_id'
    }
});
