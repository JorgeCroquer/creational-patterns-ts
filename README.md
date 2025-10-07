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