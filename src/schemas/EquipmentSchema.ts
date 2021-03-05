export default class EquipmentSchema {
    static schema = {
        name: 'Equipment',
        primaryKey: 'id',
        properties: {
            id: { type: 'int', indexed: true },
            name: 'string',
            description: 'string',
            current: 'int',
            next: 'int',
            weekday: 'string'
        },
    };
}