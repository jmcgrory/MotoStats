import Model from './Model';
import * as Props from './properties';

class BikeModel extends Model {

    constructor(parameters: object) {

        super(parameters);

        if (typeof parameters === 'object') {

            this.fromObject(parameters, BikeModel.getProperties());

        }

        return this;

    }

    // Information

    public manufacturer: Props.StringProperty;
    public model: Props.StringProperty;
    public version: Props.StringProperty;
    public year: Props.NumericalProperty;

    // Specification

    public displacement: Props.VolumeProperty;
    public cylinders: Props.NumericalProperty;
    public fuelCapacity: Props.VolumeProperty;
    public fuelType: Props.StringProperty;
    public fuelEconomy: Props.NumericalProperty;
    public valves: Props.NumericalProperty;
    public bore: Props.NumericalProperty;
    public maxSpeed: Props.SpeedProperty;
    public maxPower: Props.PowerProperty;
    public maxPowerRPM: Props.NumericalProperty;
    public maxTorque: Props.ForceProperty;
    public maxTorqueRPM: Props.NumericalProperty;
    public gears: Props.NumericalProperty;

    // Dimensions

    public wheelSizeFront: Props.LengthProperty;
    public wheelSizeRear: Props.LengthProperty;
    public suspensionTravelFront: Props.LengthProperty;
    public suspensionTravelRear: Props.LengthProperty;
    public weightDry: Props.WeightProperty;
    public weightWet: Props.WeightProperty;
    public seatHeightMin: Props.LengthProperty;
    public seatHeightMax: Props.LengthProperty;
    public wheelbase: Props.LengthProperty;
    public rake: Props.NumericalProperty;
    public trail: Props.LengthProperty;
    public height: Props.LengthProperty;
    public handleBarWidth: Props.LengthProperty;

    // Features

    public hasReverse: Props.BooleanProperty;
    public hasABS: Props.BooleanProperty;
    public hasTractionControl: Props.BooleanProperty;
    public hasFuelGauge: Props.BooleanProperty;
    public finalDrive: Props.StringProperty;
    public hasGearIndicator: Props.BooleanProperty;
    public hasSpeedometer: Props.BooleanProperty;
    public hasTechometer: Props.BooleanProperty;
    public brakesFront: Props.StringProperty;
    public brakesRear: Props.StringProperty;

    public static getProperties = (includeDefault: boolean = true): object => {

        const includable = includeDefault ? BikeModel.getDefaultProperties() : {};

        return {

            ...includable,

            manufacturer: Props.StringProperty,
            model: Props.StringProperty,
            version: Props.StringProperty,
            year: Props.NumericalProperty,
            displacement: Props.VolumeProperty,
            cylinders: Props.NumericalProperty,
            fuelCapacity: Props.VolumeProperty,
            fuelType: Props.StringProperty,
            fuelEconomy: Props.NumericalProperty,
            valves: Props.NumericalProperty,
            bore: Props.NumericalProperty,
            maxSpeed: Props.SpeedProperty,
            maxPower: Props.PowerProperty,
            maxPowerRPM: Props.NumericalProperty,
            maxTorque: Props.ForceProperty,
            maxTorqueRPM: Props.NumericalProperty,
            gears: Props.NumericalProperty,
            wheelSizeFront: Props.LengthProperty,
            wheelSizeRear: Props.LengthProperty,
            suspensionTravelFront: Props.LengthProperty,
            suspensionTravelRear: Props.LengthProperty,
            weightDry: Props.WeightProperty,
            weightWet: Props.WeightProperty,
            seatHeightMin: Props.LengthProperty,
            seatHeightMax: Props.LengthProperty,
            wheelbase: Props.LengthProperty,
            rake: Props.NumericalProperty,
            trail: Props.LengthProperty,
            height: Props.LengthProperty,
            handleBarWidth: Props.LengthProperty,
            hasReverse: Props.BooleanProperty,
            hasABS: Props.BooleanProperty,
            hasTractionControl: Props.BooleanProperty,
            hasFuelGauge: Props.BooleanProperty,
            finalDrive: Props.StringProperty,
            hasGearIndicator: Props.BooleanProperty,
            hasSpeedometer: Props.BooleanProperty,
            hasTechometer: Props.BooleanProperty,
            brakesFront: Props.StringProperty,
            brakesRear: Props.StringProperty,

        }

    };

    // Possible

    /**
     * @todo EURO4 etc.
     */
    // public compliancy: Props.StringProperty ;

    /**
     * @todo not searchable...
     */
    // public compressionRatio: Props.StringProperty ;

}

export default BikeModel;
