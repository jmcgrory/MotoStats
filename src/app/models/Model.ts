import { StringProperty, BooleanProperty, NumericalProperty } from './properties';

abstract class Model {

    public id: NumericalProperty = new NumericalProperty();
    public isActive: BooleanProperty = new BooleanProperty();
    public createdAt: StringProperty = new StringProperty();
    public updatedAt: StringProperty = new StringProperty();
    public deletedAt: StringProperty = new StringProperty();

    constructor(parameters: object) { }

    public setValue = (key: string, value: any): this => {

        if (typeof this[key] !== 'undefined') {

            this[key] = value || null;

        } else {

            console.warn(`Attempting to set value which does not exist on this object: ${key}`);

        }

        return this;

    }

    public fromObject = (parameters: object): this => {

        Object.entries(parameters).forEach(([key, value]) => {

            return this.setValue(key, value);

        });

        return this;

    }

}

export default Model;
