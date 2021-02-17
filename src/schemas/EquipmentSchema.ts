export default class EquipmentSchema {
    static schema = {
        name: 'Equipment',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            description: 'string',
            actual: 'int',
            next: 'int'
        },
    };
}