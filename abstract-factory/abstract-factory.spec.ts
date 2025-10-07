import { AbstractFactory } from "./abstract-factory";
import { PhoneFactory, LaptopFactory, TabletFactory } from "./concrete-factories";
import {
    PhoneCPU,
    PhoneMemory,
    PhoneDisplay,
    LaptopCPU,
    LaptopMemory,
    LaptopDisplay,
    TabletCPU,
    TabletMemory,
    TabletDisplay
} from "./concrete-products";

describe('Abstract Factory - Device families', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('PhoneFactory creates a phone product family', () => {
        const factory = new PhoneFactory();
        const cpu = factory.createCPU('A1');
        const mem = factory.createMemory(4);
        const disp = factory.createDisplay('1080x2340');

        expect(cpu).toBeInstanceOf(PhoneCPU);
        expect(mem).toBeInstanceOf(PhoneMemory);
        expect(disp).toBeInstanceOf(PhoneDisplay);

        // getters should return constructor values and trigger logs
        expect(cpu.series).toBe('A1');
        expect(mem.capacityInGB).toBe(4);
        expect(disp.resolution).toBe('1080x2340');

        // setters should update values (and also trigger logs)
        cpu.series = 'A2';
        mem.capacityInGB = 6;
        disp.resolution = '1440x3040';

        expect(cpu.series).toBe('A2');
        expect(mem.capacityInGB).toBe(6);
        expect(disp.resolution).toBe('1440x3040');

        expect(consoleSpy).toHaveBeenCalled();
    });

    test('Different factories produce different concrete types', () => {
        const phoneFactory = new PhoneFactory();
        const laptopFactory = new LaptopFactory();

        const phoneCpu = phoneFactory.createCPU('P1');
        const laptopCpu = laptopFactory.createCPU('L1');

        expect(phoneCpu).toBeInstanceOf(PhoneCPU);
        expect(laptopCpu).toBeInstanceOf(LaptopCPU);
        // demonstrating they are different concrete implementations
        expect(phoneCpu.constructor.name).not.toBe(laptopCpu.constructor.name);
    });

    test('Abstract factory makes compatible product families', () => {
        // Helper assembles a device using one factory instance
        function assembleDevice(factory: AbstractFactory) {
            return {
                cpu: factory.createCPU('X'),
                memory: factory.createMemory(8),
                display: factory.createDisplay('800x600'),
            };
        }

        const phoneDevice = assembleDevice(new PhoneFactory());
        const laptopDevice = assembleDevice(new LaptopFactory());

        // Each assembled device contains products from the same family
        expect(phoneDevice.cpu).toBeInstanceOf(PhoneCPU);
        expect(phoneDevice.memory).toBeInstanceOf(PhoneMemory);
        expect(phoneDevice.display).toBeInstanceOf(PhoneDisplay);

        expect(laptopDevice.cpu).toBeInstanceOf(LaptopCPU);
        expect(laptopDevice.memory).toBeInstanceOf(LaptopMemory);
        expect(laptopDevice.display).toBeInstanceOf(LaptopDisplay);
    });
});