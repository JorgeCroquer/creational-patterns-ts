export class ShoppingCart {
    private static instance: ShoppingCart;
    private items: { productId: string; quantity: number }[] = [];

    private constructor() { }

    static getInstance(): ShoppingCart {
        if (!ShoppingCart.instance) {
            ShoppingCart.instance = new ShoppingCart();
        }
        return ShoppingCart.instance;
    }

    addItem(productId: string, quantity: number): void {
        const existingItem = this.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ productId, quantity });
        }
    }

    removeItem(productId: string): void {
        this.items = this.items.filter(item => item.productId !== productId);
    }

    getItems(): { productId: string; quantity: number }[] {
        return this.items;
    }

    clear(): void {
        this.items = [];
    }
}