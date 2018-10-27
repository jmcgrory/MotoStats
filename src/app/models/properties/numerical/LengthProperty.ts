import NumericalProperty from './NumericalProperty';

class LengthProperty extends NumericalProperty {

    public units = 'mm';

    public static availableUnits = new Map([

        ['mm', (value) => value],

        ['cm', (value) => (value / 10)],

        ['inches', (value) => (value * 0.0393701)]

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default LengthProperty;
