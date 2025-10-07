import { AxiosAdapter, ExpressAdapter } from "./concrete-adapters";
import { HttpAdapter } from "./http-adapter.interface";
import { HttpAdapterFactory } from "./http-factory.interface";

export class ExpressHttpAdapterFactory implements HttpAdapterFactory {
    makeAdapter(): HttpAdapter {
        return new ExpressAdapter();
    }
}

export class AxiosHttpAdapterFactory implements HttpAdapterFactory {
    makeAdapter(): HttpAdapter {
        return new AxiosAdapter();
    }
}