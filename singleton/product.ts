interface ProductProps {
    id: string;
    name: string;
    price: number;
}

export class Product {
    private constructor(private readonly _id: string, private _name: string, private _price: number) { }

    static create(props: ProductProps): Product {
        return new Product(props.id, props.name, props.price);
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get price(): number {
        return this._price;
    }

    set name(name: string) {
        if (name.length === 0) {
            throw new Error("Name cannot be empty");
        }
        this._name = name;
    }

    set price(price: number) {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
        this._price = price;
    }
}