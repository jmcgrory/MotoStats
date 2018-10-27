import NumericalProperty from './NumericalProperty';

class ForceProperty extends NumericalProperty {

    public units = 'nm';

    public static availableUnits = new Map([

        ['nm', (value) => value],

        ['ft lb', (value) => (value * 0.737562149)],

    ]);

    constructor(
        newValue: number,
        newName: string,
        newIsSearchable: boolean = false,
    ) {

        super(newValue, newName, newIsSearchable);

    }

}

export default ForceProperty;
