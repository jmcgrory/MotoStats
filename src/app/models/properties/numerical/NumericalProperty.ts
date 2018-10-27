import Property from '../Property';

class NumericalProperty extends Property {

    public units: string;

    public static availableUnits: Map<string, Function> = new Map();

    public toString = (): string => {

        if (this.units !== null) {

            return NumericalProperty.availableUnits.get(this.units)(this.value);

        } else {

            return `${this.value}`;

        }

    }

    public setValue = (newValue: number | string): this => {

        const newValueType = typeof newValue;

        if (newValueType === 'number') {

            this.value = newValue;

        } else if (newValueType === 'string') {

            this.value = parseInt(`${newValue}`);

        }

        return this;

    }

    public getUnits = (includeCurrent: boolean = true): string[] => {

        return [...NumericalProperty.availableUnits.keys()].filter((key) => {

            return includeCurrent || (key !== this.units);

        });

    }

    public setUnits = (newUnits: string): this => {

        if ([...NumericalProperty.availableUnits.keys()].includes(newUnits)) {

            this.units = newUnits;

        }

        return this;

    }

}

export default NumericalProperty;
