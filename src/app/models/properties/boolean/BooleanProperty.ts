import Property from '../Property';

class BooleanProperty extends Property {

    public value: boolean;

    constructor(newValue: boolean = null) {

        super(newValue);

    }

    public toString = (): string => {

        return this.value ? 'Yes' : 'No';

    }

}

export default BooleanProperty;
