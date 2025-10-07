import { CPU, Memory, Display } from "./products";

export class PhoneCPU extends CPU {
    _series: string;
    constructor(series: string) {
        super();
        this._series = series;
    }
    get series(): string {
        console.log('Getting phone CPU series...');
        return this._series;
    }
    set series(series: string) {
        console.log('Setting phone CPU series...');
        this._series = series;
    }
}

export class PhoneMemory extends Memory {
    _capacityInGB: number;
    constructor(capacityInGB: number) {
        super();
        this._capacityInGB = capacityInGB;
    }
    get capacityInGB(): number {
        console.log('Getting phone memory capacity...');
        return this._capacityInGB;
    }
    set capacityInGB(capacityInGB: number) {
        console.log('Setting phone memory capacity...');
        this._capacityInGB = capacityInGB;
    }
}

export class PhoneDisplay extends Display {
    _resolution: string;
    constructor(resolution: string) {
        super();
        this._resolution = resolution;
    }
    get resolution(): string {
        console.log('Getting phone display resolution...');
        return this._resolution;
    }
    set resolution(resolution: string) {
        console.log('Setting phone display resolution...');
        this._resolution = resolution;
    }
}

export class LaptopCPU extends CPU {
    _series: string;
    constructor(series: string) {
        super();
        this._series = series;
    }
    get series(): string {
        console.log('Getting laptop CPU series...');
        return this._series;
    }
    set series(series: string) {
        console.log('Setting laptop CPU series...');
        this._series = series;
    }
}

export class LaptopMemory extends Memory {
    _capacityInGB: number;
    constructor(capacityInGB: number) {
        super();
        this._capacityInGB = capacityInGB;
    }
    get capacityInGB(): number {
        console.log('Getting laptop memory capacity...');
        return this._capacityInGB;
    }
    set capacityInGB(capacityInGB: number) {
        console.log('Setting laptop memory capacity...');
        this._capacityInGB = capacityInGB;
    }
}

export class LaptopDisplay extends Display {
    _resolution: string;
    constructor(resolution: string) {
        super();
        this._resolution = resolution;
    }
    get resolution(): string {
        console.log('Getting laptop display resolution...');
        return this._resolution;
    }
    set resolution(resolution: string) {
        console.log('Setting laptop display resolution...');
        this._resolution = resolution;
    }
}

export class TabletCPU extends CPU {
    _series: string;
    constructor(series: string) {
        super();
        this._series = series;
    }
    get series(): string {
        console.log('Getting tablet CPU series...');
        return this._series;
    }
    set series(series: string) {
        console.log('Setting tablet CPU series...');
        this._series = series;
    }
}

export class TabletMemory extends Memory {
    _capacityInGB: number;
    constructor(capacityInGB: number) {
        super();
        this._capacityInGB = capacityInGB;
    }
    get capacityInGB(): number {
        console.log('Getting tablet memory capacity...');
        return this._capacityInGB;
    }
    set capacityInGB(capacityInGB: number) {
        console.log('Setting tablet memory capacity...');
        this._capacityInGB = capacityInGB;
    }
}

export class TabletDisplay extends Display {
    _resolution: string;
    constructor(resolution: string) {
        super();
        this._resolution = resolution;
    }
    get resolution(): string {
        console.log('Getting tablet display resolution...');
        return this._resolution;
    }
    set resolution(resolution: string) {
        console.log('Setting tablet display resolution...');
        this._resolution = resolution;
    }
}