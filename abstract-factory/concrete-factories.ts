import { AbstractFactory } from "./abstract-factory";
import { LaptopCPU, LaptopDisplay, LaptopMemory, PhoneCPU, PhoneDisplay, PhoneMemory, TabletCPU, TabletDisplay, TabletMemory } from "./concrete-products";
import { CPU, Memory, Display } from "./products";

export class PhoneFactory implements AbstractFactory {
    createCPU(cpuSeries: string): CPU {
        return new PhoneCPU(cpuSeries);
    }

    createMemory(capacityInGB: number): Memory {
        return new PhoneMemory(capacityInGB);
    }

    createDisplay(resolution: string): Display {
        return new PhoneDisplay(resolution);
    }
}

export class LaptopFactory implements AbstractFactory {
    createCPU(cpuSeries: string): CPU {
        return new LaptopCPU(cpuSeries);
    }

    createMemory(capacityInGB: number): Memory {
        return new LaptopMemory(capacityInGB);
    }

    createDisplay(resolution: string): Display {
        return new LaptopDisplay(resolution);
    }
}

export class TabletFactory implements AbstractFactory {
    createCPU(cpuSeries: string): CPU {
        return new TabletCPU(cpuSeries);
    }

    createMemory(capacityInGB: number): Memory {
        return new TabletMemory(capacityInGB);
    }

    createDisplay(resolution: string): Display {
        return new TabletDisplay(resolution);
    }
}