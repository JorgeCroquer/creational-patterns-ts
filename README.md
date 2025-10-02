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

- [`singleton/product.ts`](singleton/product.ts:1) — small Product value object used by the example.
- [`singleton/shopping-cart.ts`](singleton/shopping-cart.ts:1) — the Singleton implementation (ShoppingCart).
- [`singleton/singleton.spec.ts`](singleton/singleton.spec.ts:1) — unit tests (Jest) covering the behavior.