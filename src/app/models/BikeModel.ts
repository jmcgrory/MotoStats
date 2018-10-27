import Model from './Model';
import * as Properties from './properties';

class BikeModel extends Model {

    // Information

    /** Maybe a type? */
    public manufacturer: Properties.StringProperty;

    /** e.g. Bonneville, Ninja, Hornet */
    public model: Properties.StringProperty;

    /** i.e. rs/sport */
    public version: Properties.StringProperty;

    /** Model release year */
    public year: Properties.NumericalProperty;


    // Specification

    /** (cc) */
    public displacement: Properties.VolumeProperty;

    /** (integer) */
    public cylinders: Properties.NumericalProperty;

    /** (ml) */
    public fuelCapacity: Properties.VolumeProperty;

    /** (Type) */
    public fuelType: Properties.StringProperty;

    /** (l/km) */ // TODO:
    public fuelEconomy: Properties.NumericalProperty;

    /** Number of (integer) */
    public valves: Properties.NumericalProperty;

    /** (integer) */
    public bore: Properties.NumericalProperty;

    /** (kph) */
    public maxSpeed: Properties.SpeedProperty;

    /** (kW) */
    public maxPower: Properties.PowerProperty;

    /** (rpm) */
    public maxPowerRPM: Properties.NumericalProperty;

    /** (Nm) */
    public maxTorque: Properties.ForceProperty;

    /** (rpm) */
    public maxTorqueRPM: Properties.NumericalProperty;

    /** (integer) */
    public gears: Properties.NumericalProperty;


    // Dimensions

    /** (mm) */
    public wheelSizeFront: Properties.LengthProperty;

    /** (mm) */
    public wheelSizeRear: Properties.LengthProperty;

    /** (mm) */
    public suspensionTravelFront: Properties.LengthProperty;

    /** (mm) */
    public suspensionTravelRear: Properties.LengthProperty;

    /** (grams) */
    public weightDry: Properties.WeightProperty;

    /** (grams) */
    public weightWet: Properties.WeightProperty;

    //** Minimum factory seat height (mm) */
    public seatHeightMin: Properties.LengthProperty;

    /** Maximum factory seat height (mm) */
    public seatHeightMax: Properties.LengthProperty;

    /** (mm) */
    public wheelbase: Properties.LengthProperty;

    /** (degrees) */
    public rake: Properties.NumericalProperty;

    /** (mm) */
    public trail: Properties.LengthProperty;

    /** (mm) */
    public height: Properties.LengthProperty;

    /** (mm) */
    public handleBarWidth: Properties.LengthProperty;


    // Features

    /** (bool) */
    public hasReverse: Properties.BooleanProperty;

    /** (bool) */
    public hasABS: Properties.BooleanProperty;

    /** (bool) */
    public hasTractionControl: Properties.BooleanProperty;

    /** (bool) */
    public hasFuelGauge: Properties.BooleanProperty;

    /** (Type) */
    public finalDrive: Properties.StringProperty;

    /** (BooleanProperty) */
    public hasGearIndicator: Properties.BooleanProperty;

    /** (BooleanProperty) */
    public hasSpeedometer: Properties.BooleanProperty;

    /** (BooleanProperty) */
    public hasTechometer: Properties.BooleanProperty;

    /** (Type) */
    public brakesFront: Properties.StringProperty;

    /** (Type) */
    public brakesRear: Properties.StringProperty;


    // Possible

    /**
     * @todo EURO4 etc.
     */
    // public compliancy: Properties.StringProperty;

    /**
     * @todo not searchable...
     */
    // public compressionRatio: Properties.StringProperty;

}

export default BikeModel;
