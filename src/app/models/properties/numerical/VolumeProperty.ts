import NumericalProperty from './NumericalProperty';

class VolumeProperty extends NumericalProperty {

    public units = 'litres';

    public static availableUnits = new Map([

        ['cc', (value) => value],

        ['ml', (value) => value],

        ['litres', (value) => (value / 1000)],

        ['gallons', (value) => (value / 4546.09)]

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default VolumeProperty;
