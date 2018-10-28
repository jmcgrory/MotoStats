import { StringProperty, BooleanProperty, NumericalProperty } from './properties';

abstract class Model {

    public id: NumericalProperty;
    public isActive: BooleanProperty;
    public createdAt: StringProperty;
    public updatedAt: StringProperty;
    public deletedAt: StringProperty;

    constructor(parameters: object) { }

    protected static getDefaultProperties = (): object => {

        return {

            id: NumericalProperty,
            isActive: BooleanProperty,
            createdAt: StringProperty,
            updatedAt: StringProperty,
            deletedAt: StringProperty,

        }

    }

    public static getProperties = (includeDefault: boolean = true): object => Model.getDefaultProperties();

    public setValue = (key: string, value: any): this => {

        if (typeof this[key] !== 'undefined') {

            this[key] = value || null;

        } else {

            console.warn(`Attempting to set value which does not exist on this object: ${key}`);

        }

        return this;

    }

    public fromObject = (parameters: object, properties: object): this => {

        Object.entries(parameters).forEach(([key, value]) => {

            if (properties.hasOwnProperty(key)) {

                this[key] = new properties[key](value, key, false);

            }

        });

        return this;

    }

}

export default Model;
