abstract class Property {

    public value: any;
    public name: string;
    public isSearchable: boolean;

    constructor(
        newValue: string | number | boolean,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        this.name = newName;

        this.isSearchable = newIsSearchable;

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

export default Property;
