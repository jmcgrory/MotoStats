import Property from '../Property';

class NumericalProperty extends Property {

    public value: number = null;

    public units: string;

    public static availableUnits: Map<string, Function> = new Map();

    public toString = (): string => {

        if (this.units !== null) {

            return NumericalProperty.availableUnits.get(this.units)(this.value);

        } else {

            return `${this.value}`;

        }

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
