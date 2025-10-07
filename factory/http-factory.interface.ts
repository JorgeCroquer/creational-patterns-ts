import { HttpAdapter } from "./http-adapter.interface";

export interface HttpAdapterFactory {
    makeAdapter(): HttpAdapter
}