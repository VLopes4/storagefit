import Realm from 'realm';
import WeightSchema from '../schemas/WeightSchema';
import TrainingSchema from '../schemas/TrainingSchema';
import EquipmentSchema from '../schemas/EquipmentSchema';

export default function getRealm() {
    return Realm.open({
        schema: [WeightSchema, TrainingSchema, EquipmentSchema]
    });
}