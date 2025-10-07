import { HttpAdapter, HttpAdapterOptions } from "./http-adapter.interface";

export class ExpressAdapter implements HttpAdapter {
    async get(url: string, options?: HttpAdapterOptions): Promise<any> {
        console.log('Express GET', url);
        return { status: 200, data: null, headers: {} };
    }
    async post(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<any> {
        console.log('Express POST', url, data);
        return { status: 201, data: null, headers: {} };
    }
    async put(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<any> {
        console.log('Express PUT', url, data);
        return { status: 200, data: null, headers: {} };
    }
    async delete(url: string, options?: HttpAdapterOptions): Promise<any> {
        console.log('Express DELETE', url);
        return { status: 204, data: null, headers: {} };
    }
}

export class AxiosAdapter implements HttpAdapter {
    async get(url: string, options?: HttpAdapterOptions): Promise<any> {
        console.log('Axios GET', url);
        return { status: 200, data: null, headers: {} };
    }
    async post(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<any> {
        console.log('Axios POST', url, data);
        return { status: 201, data: null, headers: {} };
    }
    async put(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<any> {
        console.log('Axios PUT', url, data);
        return { status: 200, data: null, headers: {} };
    }
    async delete(url: string, options?: HttpAdapterOptions): Promise<any> {
        console.log('Axios DELETE', url);
        return { status: 204, data: null, headers: {} };
    }
}