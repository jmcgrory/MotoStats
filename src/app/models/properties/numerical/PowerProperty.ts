import NumericalProperty from './NumericalProperty';

class PowerProperty extends NumericalProperty {

    public units = 'kw';

    public static availableUnits = new Map([

        ['kw', (value) => value],

        ['ps', (value) => (value * 1.35962)],

        ['bhp', (value) => (value * 1.34102)],

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default PowerProperty;
