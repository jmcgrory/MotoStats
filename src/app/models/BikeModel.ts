import Model from './Model';
import * as Props from './properties';

class BikeModel extends Model {

    constructor(parameters: object) {

        super(parameters);

        if (typeof parameters === 'object') {

            this.fromObject(parameters);

        }

        return this;

    }

    // Information

    public manufacturer: Props.StringProperty = new Props.StringProperty();
    public model: Props.StringProperty = new Props.StringProperty();
    public version: Props.StringProperty = new Props.StringProperty();
    public year: Props.NumericalProperty = new Props.NumericalProperty();

    // Specification

    public displacement: Props.VolumeProperty = new Props.VolumeProperty();
    public cylinders: Props.NumericalProperty = new Props.NumericalProperty();
    public fuelCapacity: Props.VolumeProperty = new Props.VolumeProperty();
    public fuelType: Props.StringProperty = new Props.StringProperty();
    public fuelEconomy: Props.NumericalProperty = new Props.NumericalProperty();
    public valves: Props.NumericalProperty = new Props.NumericalProperty();
    public bore: Props.NumericalProperty = new Props.NumericalProperty();
    public maxSpeed: Props.SpeedProperty = new Props.SpeedProperty();
    public maxPower: Props.PowerProperty = new Props.PowerProperty();
    public maxPowerRPM: Props.NumericalProperty = new Props.NumericalProperty();
    public maxTorque: Props.ForceProperty = new Props.ForceProperty();
    public maxTorqueRPM: Props.NumericalProperty = new Props.NumericalProperty();
    public gears: Props.NumericalProperty = new Props.NumericalProperty();

    // Dimensions

    public wheelSizeFront: Props.LengthProperty = new Props.LengthProperty();
    public wheelSizeRear: Props.LengthProperty = new Props.LengthProperty();
    public suspensionTravelFront: Props.LengthProperty = new Props.LengthProperty();
    public suspensionTravelRear: Props.LengthProperty = new Props.LengthProperty();
    public weightDry: Props.WeightProperty = new Props.WeightProperty();
    public weightWet: Props.WeightProperty = new Props.WeightProperty();
    public seatHeightMin: Props.LengthProperty = new Props.LengthProperty();
    public seatHeightMax: Props.LengthProperty = new Props.LengthProperty();
    public wheelbase: Props.LengthProperty = new Props.LengthProperty();
    public rake: Props.NumericalProperty = new Props.NumericalProperty();
    public trail: Props.LengthProperty = new Props.LengthProperty();
    public height: Props.LengthProperty = new Props.LengthProperty();
    public handleBarWidth: Props.LengthProperty = new Props.LengthProperty();

    // Features

    public hasReverse: Props.BooleanProperty = new Props.BooleanProperty();
    public hasABS: Props.BooleanProperty = new Props.BooleanProperty();
    public hasTractionControl: Props.BooleanProperty = new Props.BooleanProperty();
    public hasFuelGauge: Props.BooleanProperty = new Props.BooleanProperty();
    public finalDrive: Props.StringProperty = new Props.StringProperty();
    public hasGearIndicator: Props.BooleanProperty = new Props.BooleanProperty();
    public hasSpeedometer: Props.BooleanProperty = new Props.BooleanProperty();
    public hasTechometer: Props.BooleanProperty = new Props.BooleanProperty();
    public brakesFront: Props.StringProperty = new Props.StringProperty();
    public brakesRear: Props.StringProperty = new Props.StringProperty();

    // Possible

    /**
     * @todo EURO4 etc.
     */
    // public compliancy: Props.StringProperty  = new Props.StringProperty ();

    /**
     * @todo not searchable...
     */
    // public compressionRatio: Props.StringProperty  = new Props.StringProperty ();

}

export default BikeModel;
