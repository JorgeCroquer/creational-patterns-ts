export interface HttpAdapterOptions {
    timeout?: number;
    headers?: Record<string, string>;
    params?: Record<string, string | number>;
}

export interface HttpResponse<T = any> {
    status: number;
    data: T;
    headers: Record<string, string>;
}


export interface HttpAdapter {
    get(url: string, options?: HttpAdapterOptions): Promise<HttpResponse>;
    post(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<HttpResponse>;
    put(url: string, data: Record<string, unknown>, options?: HttpAdapterOptions): Promise<HttpResponse>;
    delete(url: string, options?: HttpAdapterOptions): Promise<HttpResponse>;
}