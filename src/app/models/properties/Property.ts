abstract class Property {

    public value: any = null;

    constructor(newValue: string | number | boolean) {

        return this.setValue(newValue);

    }

    public toString = (): string => {

        return `${this.value}`;

    }

    public setValue = (newValue: string | number | boolean): this => {

        if (typeof newValue !== 'undefined') {

            this.value = newValue;

        } else {

            console.warn('Attempting to set undefined value on property');

        }

        return this;

    }

}