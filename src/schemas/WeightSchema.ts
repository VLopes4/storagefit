const WeightSchema = {
    name: 'Weight',
    primaryKey: 'id',
    properties: {
        id: { type: 'int', indexed: true },
        weight: 'int',
        month: 'string'
    },
};

export default WeightSchema;