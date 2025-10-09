# Creational Design Patterns — TypeScript Exercises

This repository is a personal exercise implementing creational design patterns in TypeScript. 

## Table of contents

- [What is this repository for?](#what-is-this-repository-for)
- [Current implementation](#current-implementation)

## What is this repository for?

Small, focused TypeScript examples to learn and demonstrate creational design patterns. Each pattern lives in its own folder with a clear interface, usage example and tests.

## Current implementation

- Singleton: a simple, test-covered example that demonstrates how to ensure a single instance of a class. See the shopping cart example in [`singleton/shopping-cart.ts`](singleton/shopping-cart.ts:1).

Files related to the Singleton example:

- [`singleton/product.ts`](singleton/product.ts) — small Product value object used by the example.
- [`singleton/shopping-cart.ts`](singleton/shopping-cart.ts) — the Singleton implementation (ShoppingCart).
- [`singleton/singleton.spec.ts`](singleton/singleton.spec.ts) — unit tests (Jest) covering the behavior.

- Factory Method: a simple, test-covered example that demonstrates how to create objects without specifying the exact class of object that will be created.

Files related to the Factory Method example:

- [`factory/http-adapter.interface.ts`](factory/http-adapter.interface.ts) — the target interface (HttpAdapter).
- [`factory/http-factory.interface.ts`](factory/http-factory.interface.ts) — the Factory interface (HttpAdapterFactory).
- [`factory/concrete-adapters.ts`](factory/concrete-adapters.ts) — concrete implementations of the HttpAdapter interface (AxiosAdapter, ExpressAdapter).
- [`factory/concrete-factories.ts`](factory/concrete-factories.ts) — concrete implementations of the HttpAdapterFactory interface (AxiosFactory, ExpressFactory).
- [`factory/factory.spec.ts`](factory/factory.spec.ts) — unit tests (Jest) covering the behavior.

- Abstract Factory: a didactic, test-covered example that demonstrates how to create families of related products (device families) without specifying concrete classes. Useful when you need to ensure created products are compatible across a family (e.g., Phone, Laptop, Tablet).

Files related to the Abstract Factory example:

- [`abstract-factory/abstract-factory.ts`](abstract-factory/abstract-factory.ts) — the Abstract Factory interface defining methods to create related products (CPU, Memory, Display).
- [`abstract-factory/products.ts`](abstract-factory/products.ts) — abstract product classes (CPU, Memory, Display).
- [`abstract-factory/concrete-products.ts`](abstract-factory/concrete-products.ts) — concrete product implementations for each device family (Phone*, Laptop*, Tablet*).
- [`abstract-factory/concrete-factories.ts`](abstract-factory/concrete-factories.ts) — concrete factories producing compatible product families.
- [`abstract-factory/abstract-factory.spec.ts`](abstract-factory/abstract-factory.spec.ts) — unit tests (Jest) illustrating usage and benefits of the Abstract Factory pattern.

- Builder: a comprehensive, test-covered example that demonstrates how to construct complex objects (SQL and MongoDB queries) step by step. The same construction process can create different representations.

Files related to the Builder example:

- [`builder/query-builder.ts`](builder/query-builder.ts) — the Builder interface and concrete implementations (SQLQueryBuilder, MongoQueryBuilder).
- [`builder/query.ts`](builder/query.ts) — the Product class representing the complex object being built (Query).
- [`builder/query-builder.spec.ts`](builder/query-builder.spec.ts) — unit tests (Jest) covering the behavior.