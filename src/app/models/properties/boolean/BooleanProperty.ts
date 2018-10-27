import Property from '../Property';

class BooleanProperty extends Property {

    public value: boolean;

    constructor(
        newValue: boolean,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

    public toString = (): string => {

        return this.value ? 'Yes' : 'No';

    }

}

export default BooleanProperty;
