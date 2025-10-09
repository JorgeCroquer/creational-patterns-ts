export abstract class Query {
    protected _fields: string[] = [];
    protected _table: string = ''
    protected _conditions: {
        [key: string]: string | { [operator: string]: any }
    } = {};
    protected _order: string = ''
    protected _limitCount: number | null = null;
    protected _offsetCount: number | null = null;

    abstract get raw(): string;

    get fields() {
        return this._fields;
    }
    set fields(fields: string[]) {
        this._fields = fields;
    }

    get table() {
        return this._table;
    }
    set table(table: string) {
        this._table = table;
    }

    get conditions() {
        return this._conditions;
    }
    set conditions(conditions: { [key: string]: string | { [operator: string]: any } }) {
        this._conditions = conditions;
    }

    get order() {
        return this._order;
    }
    set order(order: string) {
        this._order = order;
    }

    get limitCount() {
        return this._limitCount;
    }
    set limitCount(limit: number | null) {
        this._limitCount = limit;
    }

    get offsetCount() {
        return this._offsetCount;
    }
    set offsetCount(offset: number | null) {
        this._offsetCount = offset;
    }
}

export class SQLQuery extends Query {
    get raw(): string {
        const fieldsPart = this.fields.length ? this.fields.join(', ') : '*';
        const wherePart = Object.keys(this.conditions).length ? `WHERE ${Object.entries(this.conditions).map(([field, value]) => {
            if (typeof value === 'string') {
                return `${field} = '${value}'`;
            }
            const [operator, val] = Object.entries(value)[0];
            return `${field} ${operator} '${val}'`;
        }).join(' AND ')}` : '';
        const orderPart = this.order ? `ORDER BY ${this.order}` : '';
        const limitPart = this.limitCount !== null ? `LIMIT ${this.limitCount}` : '';
        const offsetPart = this.offsetCount !== null ? `OFFSET ${this.offsetCount}` : '';
        return `SELECT ${fieldsPart} FROM ${this.table} ${wherePart} ${orderPart} ${limitPart} ${offsetPart}`.trim();
    }
}

export class MongoQuery extends Query {
    get raw(): string {
        const query: any = {};
        if (Object.keys(this.conditions).length) {
            query['$and'] = Object.entries(this.conditions).map(([field, value]) => {
                if (typeof value === 'string') {
                    return { [field]: value };
                }
                const [operator, val] = Object.entries(value)[0];
                switch (operator) {
                    case '=':
                        return { [field]: val };
                    case '>':
                        return { [field]: { $gt: val } };
                    case '<':
                        return { [field]: { $lt: val } };
                    default:
                        throw new Error(`Unsupported operator: ${operator}`);
                }
            });
        }
        const options: any = {};
        if (this.fields.length) {
            options.projection = this.fields.reduce((proj, field) => ({ ...proj, [field]: 1 }), {});
        }
        if (this.order) {
            const [field, direction] = this.order.split(' ');
            options.sort = { [field]: direction === 'ASC' ? 1 : -1 };
        }
        if (this.limitCount !== null) {
            options.limit = this.limitCount;
        }
        if (this.offsetCount !== null) {
            options.skip = this.offsetCount;
        }
        return `db.${this.table}.find(${JSON.stringify(query)}, ${JSON.stringify(options)})`;
    }
}