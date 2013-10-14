/**
 * Model for a books address.
 */
Ext.define('Ladr.model.Address', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.association.HasMany', 'Ext.data.association.BelongsTo'],

    fields: [
        'id',
        'address',
        'char_id',
    ],
    belongsTo: {
        model: 'Ladr.model.ClickedChar',
        getterName: 'getChar',
        setterName: 'setChar'
    }
});
