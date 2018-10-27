import NumericalProperty from './NumericalProperty';

class WeightProperty extends NumericalProperty {

    public units = 'kg';

    public static availableUnits = new Map([

        ['g', (value) => value],

        ['kg', (value) => (value / 1000)],

        ['lbs', (value) => (value * 0.00220462)],

    ]);

    constructor(newValue: number = null) {

        super(newValue);

    }

}

export default WeightProperty;
