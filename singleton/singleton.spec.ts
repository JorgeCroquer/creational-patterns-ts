import { ShoppingCart } from "./shopping-cart";

describe("ShoppingCart Singleton", () => {
    it("should return the same instance", () => {
        const cart1 = ShoppingCart.getInstance();
        const cart2 = ShoppingCart.getInstance();
        expect(cart1).toBe(cart2);
    });

    it("should add items to the cart", () => {
        const cart = ShoppingCart.getInstance();
        cart.clear();
        cart.addItem("product1", 2);
        cart.addItem("product2", 3);
        expect(cart.getItems()).toEqual([
            { productId: "product1", quantity: 2 },
            { productId: "product2", quantity: 3 }
        ]);
    });

    it("should update quantity if the same product is added", () => {
        const cart = ShoppingCart.getInstance();
        cart.clear();
        cart.addItem("product1", 2);
        cart.addItem("product1", 3);
        expect(cart.getItems()).toEqual([
            { productId: "product1", quantity: 5 }
        ]);
    });

    it("should remove items from the cart", () => {
        const cart = ShoppingCart.getInstance();
        cart.clear();
        cart.addItem("product1", 2);
        cart.addItem("product2", 3);
        cart.removeItem("product1");
        expect(cart.getItems()).toEqual([
            { productId: "product2", quantity: 3 }
        ]);
    });

    it("should clear the cart", () => {
        const cart = ShoppingCart.getInstance();
        cart.clear();
        cart.addItem("product1", 2);
        cart.addItem("product2", 3);
        cart.clear();
        expect(cart.getItems()).toEqual([]);
    });

    it("should maintain state across multiple calls", () => {
        const cart1 = ShoppingCart.getInstance();
        cart1.clear();
        cart1.addItem("product1", 2);

        const cart2 = ShoppingCart.getInstance();
        expect(cart2.getItems()).toEqual([
            { productId: "product1", quantity: 2 }
        ]);
    });
});