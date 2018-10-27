import Property from '../Property';

class StringProperty extends Property {

    public value: string;

    constructor(newValue: string = null) {

        super(newValue);

    }

}

export default StringProperty;
