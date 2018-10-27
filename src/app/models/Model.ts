abstract class Model {

    id: number = null;

    isActive: boolean = null;

    createdAt: string = null;

    updatedAt: string = null;

    deletedAt: string = null;

    constructor(parameters: object) {

        if (typeof parameters === 'object') {

            this.fromObject(parameters);

        }

        return this;

    }

    public setValue = (key: string, value: any): this => {

        if (typeof this[key] !== undefined) {

            console.log(`${key}: ${value}`);

            this[key] = value || null;

        } else {

            console.warn('Attempting to set value which does not exist on this object');

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
