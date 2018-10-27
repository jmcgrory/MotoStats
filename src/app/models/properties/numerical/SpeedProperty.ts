import NumericalProperty from './NumericalProperty';

class SpeedProperty extends NumericalProperty {

    public units = 'kph';

    public static availableUnits = new Map([

        ['kph', (value) => value],

        ['mph', (value) => (value * 0.621371)]

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default SpeedProperty;
