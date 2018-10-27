import Model from './Model';
import { FinalDrive, BrakeType, FuelType } from './Types';

class BikeModel extends Model {

    // Information

    /** Maybe a type? */
    public manufacturer: string;

    /** e.g. Bonneville, Ninja, Hornet */
    public model: string;

    /** i.e. rs/sport */
    public version: string;

    /** Model release year */
    public year: number;


    // Specification

    /** (cc) */
    public displacement: number;

    /** (integer) */
    public cylinders: number;

    /** (ml) */
    public fuelCapacity: number;

    /** (Type) */
    public fuelType: FuelType;

    /** (l/km) */
    public fuelEconomy: number;

    /** Number of (integer) */
    public valves: number;

    /** (integer) */
    public bore: number;

    /** (kph) */
    public maxSpeed: number;

    /** (kW) */
    public maxPower: number;

    /** (rpm) */
    public maxPowerRPM: number;

    /** (Nm) */
    public maxTorque: number;

    /** (rpm) */
    public maxTorqueRPM: number;

    /** (integer) */
    public gears: number;


    // Dimensions

    /** (mm) */
    public wheelSizeFront: number;

    /** (mm) */
    public wheelSizeRear: number;

    /** (mm) */
    public suspensionTravelFront: number;

    /** (mm) */
    public suspensionTravelRear: number;

    /** (grams) */
    public weightDry: number;

    /** (grams) */
    public weightWet: number;

    //** Minimum factory seat height (mm) */
    public seatHeightMin: number;

    /** Maximum factory seat height (mm) */
    public seatHeightMax: boolean;

    /** (mm) */
    public wheelbase: number;

    /** (degrees) */
    public rake: number;

    /** (mm) */
    public trail: number;

    /** (mm) */
    public height: number;

    /** (mm) */
    public handleBarWidth: number;


    // Features

    /** (bool) */
    public hasReverse: boolean;

    /** (bool) */
    public hasABS: boolean;

    /** (bool) */
    public hasTractionControl: boolean;

    /** (bool) */
    public hasFuelGauge: boolean;

    /** (Type) */
    public finalDrive: FinalDrive;

    /** (boolean) */
    public hasGearIndicator: boolean;

    /** (boolean) */
    public hasSpeedometer: boolean;

    /** (boolean) */
    public hasTechometer: boolean;

    /** (Type) */
    public brakesFront: BrakeType;

    /** (Type) */
    public brakesRear: BrakeType;


    // Possible

    /**
     * @todo EURO4 etc.
     */
    // public compliancy: string;

    /**
     * @todo not searchable...
     */
    // public compressionRatio: string;

}

export default BikeModel;
