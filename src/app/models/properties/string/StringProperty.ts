import Property from '../Property';

class StringProperty extends Property {

    public value: string;

    constructor(
        newValue: string,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default StringProperty;
