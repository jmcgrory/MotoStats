import NumericalProperty from './NumericalProperty';

class ForceProperty extends NumericalProperty {

    public units = 'nm';

    public static availableUnits = new Map([

        ['nm', (value) => value],

        ['ft lb', (value) => (value * 0.737562149)],

    ]);

}

export default ForceProperty;
