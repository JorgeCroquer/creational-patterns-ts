import { ExpressHttpAdapterFactory, AxiosHttpAdapterFactory } from "./concrete-factories";
import { ExpressAdapter, AxiosAdapter } from "./concrete-adapters";

describe('Factory Pattern - HttpAdapterFactory', () => {
    let consoleSpy: jest.SpyInstance;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('ExpressHttpAdapterFactory creates ExpressAdapter instances', async () => {
        const factory = new ExpressHttpAdapterFactory();
        const adapter = factory.makeAdapter();
        expect(adapter).toBeInstanceOf(ExpressAdapter);

        const getRes = await adapter.get('/express');
        expect(getRes.status).toBe(200);

        const postRes = await adapter.post('/express', { foo: 'bar' });
        expect(postRes.status).toBe(201);

        const putRes = await adapter.put('/express/1', { id: 1 });
        expect(putRes.status).toBe(200);

        const delRes = await adapter.delete('/express/1');
        expect(delRes.status).toBe(204);

        expect(consoleSpy).toHaveBeenCalled();
    });

    test('AxiosHttpAdapterFactory creates AxiosAdapter instances', async () => {
        const factory = new AxiosHttpAdapterFactory();
        const adapter = factory.makeAdapter();
        expect(adapter).toBeInstanceOf(AxiosAdapter);

        const getRes = await adapter.get('/axios');
        expect(getRes.status).toBe(200);

        const postRes = await adapter.post('/axios', { foo: 'bar' });
        expect(postRes.status).toBe(201);

        const putRes = await adapter.put('/axios/1', { id: 1 });
        expect(putRes.status).toBe(200);

        const delRes = await adapter.delete('/axios/1');
        expect(delRes.status).toBe(204);
    });

    test('You can inject different factories', async () => {
        const useFactory = (factory: ExpressHttpAdapterFactory | AxiosHttpAdapterFactory) => {
            const adapter = factory.makeAdapter();
            return adapter.get('/test');
        };

        const expressFactory = new ExpressHttpAdapterFactory();
        const expressRes = await useFactory(expressFactory);
        expect(expressRes.status).toBe(200);
        expect(consoleSpy).toHaveBeenCalledWith('Express GET', '/test');

        consoleSpy.mockClear();

        const axiosFactory = new AxiosHttpAdapterFactory();
        const axiosRes = await useFactory(axiosFactory);
        expect(axiosRes.status).toBe(200);
        expect(consoleSpy).toHaveBeenCalledWith('Axios GET', '/test');
    });
});