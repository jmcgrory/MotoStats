import NumericalProperty from './NumericalProperty';

class LengthProperty extends NumericalProperty {

    public units = 'mm';

    public static availableUnits = new Map([

        ['mm', (value) => value],

        ['inches', (value) => (value / 0.0393701)]

    ]);

}

export default LengthProperty;
