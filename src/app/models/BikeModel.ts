import Model from './Model';
import { FinalDrive, BrakeType, FuelType } from './Types';
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
    public displacement: Properties.NumericalProperty;

    /** (integer) */
    public cylinders: Properties.NumericalProperty;

    /** (ml) */
    public fuelCapacity: Properties.NumericalProperty;

    /** (Type) */
    public fuelType: Properties.StringProperty;

    /** (l/km) */
    public fuelEconomy: Properties.NumericalProperty;

    /** Number of (integer) */
    public valves: Properties.NumericalProperty;

    /** (integer) */
    public bore: Properties.NumericalProperty;

    /** (kph) */
    public maxSpeed: Properties.NumericalProperty;

    /** (kW) */
    public maxPower: Properties.NumericalProperty;

    /** (rpm) */
    public maxPowerRPM: Properties.NumericalProperty;

    /** (Nm) */
    public maxTorque: Properties.NumericalProperty;

    /** (rpm) */
    public maxTorqueRPM: Properties.NumericalProperty;

    /** (integer) */
    public gears: Properties.NumericalProperty;


    // Dimensions

    /** (mm) */
    public wheelSizeFront: Properties.NumericalProperty;

    /** (mm) */
    public wheelSizeRear: Properties.NumericalProperty;

    /** (mm) */
    public suspensionTravelFront: Properties.NumericalProperty;

    /** (mm) */
    public suspensionTravelRear: Properties.NumericalProperty;

    /** (grams) */
    public weightDry: Properties.NumericalProperty;

    /** (grams) */
    public weightWet: Properties.NumericalProperty;

    //** Minimum factory seat height (mm) */
    public seatHeightMin: Properties.NumericalProperty;

    /** Maximum factory seat height (mm) */
    public seatHeightMax: Properties.BooleanProperty;

    /** (mm) */
    public wheelbase: Properties.NumericalProperty;

    /** (degrees) */
    public rake: Properties.NumericalProperty;

    /** (mm) */
    public trail: Properties.NumericalProperty;

    /** (mm) */
    public height: Properties.NumericalProperty;

    /** (mm) */
    public handleBarWidth: Properties.NumericalProperty;


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
