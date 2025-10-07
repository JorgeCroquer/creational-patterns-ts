export abstract class CPU {
    abstract _series: string;
    abstract get series(): string;
    abstract set series(series: string);
}

export abstract class Memory {
    abstract _capacityInGB: number;
    abstract get capacityInGB(): number;
    abstract set capacityInGB(capacityInGB: number);
}

export abstract class Display {
    abstract _resolution: string;
    abstract set resolution(resolution: string);
    abstract get resolution(): string;
}