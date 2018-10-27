import NumericalProperty from './NumericalProperty';

class SpeedProperty extends NumericalProperty {

    public units = 'kph';

    public static availableUnits = new Map([

        ['kph', (value) => value],

        ['mph', (value) => (value * 0.621371)]

    ]);

    constructor(newValue: number = null) {

        super(newValue);

    }

}

export default SpeedProperty;
