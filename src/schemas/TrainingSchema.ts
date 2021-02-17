const TrainingSchema = {
    name: 'Training',
    primaryKey: 'id',
    properties: {
        id: { type: 'int', indexed: true },
        title: 'string',
        description: 'string',
        position: 'int',
        weekday: 'string',
        repetition: 'int'
    },
};

export default TrainingSchema;