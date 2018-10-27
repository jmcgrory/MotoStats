import NumericalProperty from './NumericalProperty';

class WeightProperty extends NumericalProperty {

    public units = 'kg';

    public static availableUnits = new Map([

        ['g', (value) => value],

        ['kg', (value) => (value / 1000)],

        ['lbs', (value) => (value * 0.00220462)],

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default WeightProperty;
