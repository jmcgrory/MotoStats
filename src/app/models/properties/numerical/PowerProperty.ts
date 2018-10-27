import NumericalProperty from './NumericalProperty';

class PowerProperty extends NumericalProperty {

    public units = 'kw';

    public static availableUnits = new Map([

        ['kw', (value) => value],

        ['ps', (value) => (value * 1.35962)],

        ['bhp', (value) => (value * 1.34102)],

    ]);

}

export default PowerProperty;
