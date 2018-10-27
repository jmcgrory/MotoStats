import Model from './Model';
import { FinalDrive, BrakeType, FuelType } from './Types';

class BikeModel extends Model {

    // Information

    /** Maybe a type? */
    manufacturer: string;

    /** e.g. Bonneville, Ninja, Hornet */
    model: string;

    /** i.e. rs/sport */
    version: string;

    /** Model release year */
    year: number;


    // Specification

    /** (cc) */
    displacement: number;

    /** (integer) */
    cylinders: number;

    /** (ml) */
    fuelCapacity: number;

    /** (Type) */
    fuelType: FuelType;

    /** (l/km) */
    fuelEconomy: number;

    /** Number of (integer) */
    valves: number;

    /** (integer) */
    bore: number;

    /** (kph) */
    maxSpeed: number;

    /** (kW) */
    maxPower: number;

    /** (rpm) */
    maxPowerRPM: number;

    /** (Nm) */
    maxTorque: number;

    /** (rpm) */
    maxTorqueRPM: number;

    /** (integer) */
    gears: number;


    // Dimensions

    /** (mm) */
    wheelSizeFront: number;

    /** (mm) */
    wheelSizeRear: number;

    /** (mm) */
    suspensionTravelFront: number;

    /** (mm) */
    suspensionTravelRear: number;

    /** (grams) */
    weightDry: number;

    /** (grams) */
    weightWet: number;

    //** Minimum factory seat height (mm) */
    seatHeightMin: number;

    /** Maximum factory seat height (mm) */
    seatHeightMax: boolean;

    /** (mm) */
    wheelbase: number;

    /** (degrees) */
    rake: number;

    /** (mm) */
    trail: number;

    /** (mm) */
    height: number;

    /** (mm) */
    handleBarWidth: number;


    // Features

    /** (bool) */
    hasReverse: boolean;

    /** (bool) */
    hasABS: boolean;

    /** (bool) */
    hasTractionControl: boolean;

    /** (bool) */
    hasFuelGauge: boolean;

    /** (Type) */
    finalDrive: FinalDrive;

    /** (boolean) */
    hasGearIndicator: boolean;

    /** (boolean) */
    hasSpeedometer: boolean;

    /** (boolean) */
    hasTechometer: boolean;

    /** (Type) */
    brakesFront: BrakeType;

    /** (Type) */
    brakesRear: BrakeType;


    // Possible

    /**
     * @todo EURO4 etc.
     */
    // compliancy: string;

    /**
     * @todo not searchable...
     */
    // compressionRatio: string;

}

export default BikeModel;
