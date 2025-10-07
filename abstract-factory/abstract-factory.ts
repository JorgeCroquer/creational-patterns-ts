import { CPU, Memory, Display } from "./products";

export interface AbstractFactory {
    createCPU(cpuSeries: string): CPU;
    createMemory(capacityInGB: number): Memory;
    createDisplay(resolution: string): Display;
}