import { MongoQuery, Query, SQLQuery } from "./query";

export abstract class QueryBuilder {

    protected abstract query: Query;

    abstract select(fields: string[]): QueryBuilder;
    abstract from(table: string): QueryBuilder;
    abstract where(condition: {
        [key: string]: string | { [operator: string]: any }
    }): QueryBuilder;
    abstract orderBy(field: string, direction: 'ASC' | 'DESC'): QueryBuilder;
    abstract limit(count: number): QueryBuilder;
    abstract offset(count: number): QueryBuilder;
    abstract build(): Query;
    abstract reset(): void;
}

export class SQLQueryBuilder extends QueryBuilder {

    protected query: SQLQuery = new SQLQuery();

    reset(): void {
        this.query = new SQLQuery();
    }

    select(fields: string[]): QueryBuilder {
        this.query.fields = fields;
        return this;
    }
    from(table: string): QueryBuilder {
        this.query.table = table;
        return this;
    }
    where(condition: {
        [key: string]: string | { [operator: string]: any }
    }): QueryBuilder {
        this.query.conditions = { ...this.query.conditions, ...condition };
        return this;
    }
    orderBy(field: string, direction: 'ASC' | 'DESC'): QueryBuilder {
        this.query.order = `${field} ${direction}`;
        return this;
    }
    limit(count: number): QueryBuilder {
        this.query.limitCount = count;
        return this;
    }
    offset(count: number): QueryBuilder {
        this.query.offsetCount = count;
        return this;
    }
    build(): Query {
        return this.query;
    }
}

export class MongoQueryBuilder extends QueryBuilder {

    protected query: Query = new MongoQuery();

    reset(): void {
        this.query = new MongoQuery();
    }

    select(fields: string[]): QueryBuilder {
        this.query.fields = fields;
        return this;
    }
    from(table: string): QueryBuilder {
        this.query.table = table;
        return this;
    }
    where(condition: {
        [key: string]: string | { [operator: string]: any }
    }): QueryBuilder {
        this.query.conditions = { ...this.query.conditions, ...condition };
        return this;
    }
    orderBy(field: string, direction: 'ASC' | 'DESC'): QueryBuilder {
        this.query.order = `${field} ${direction}`;
        return this;
    }
    limit(count: number): QueryBuilder {
        this.query.limitCount = count;
        return this;
    }
    offset(count: number): QueryBuilder {
        this.query.offsetCount = count;
        return this;
    }
    build(): Query {
        return this.query;
    }
}