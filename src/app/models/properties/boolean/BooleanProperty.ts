import Property from '../Property';

class BooleanProperty extends Property {

    public value: boolean = null;

    public toString = (): string => {

        return this.value ? 'Yes' : 'No';

    }

}

export default BooleanProperty;
