import { QueryBuilder, SQLQueryBuilder, MongoQueryBuilder } from './query-builder';

describe('Demostración del Patrón Builder para Consultas', () => {
    it('should use the same construction process to create SQL and Mongo queries', () => {
        const director = (builder: QueryBuilder) => {
            return builder
                .from('users')
                .select(['name', 'email', 'age'])
                .where({ status: 'active' })
                .where({ age: { '>': '30' } })
                .orderBy('name', 'ASC')
                .limit(100)
                .build();
        };

        console.log('--- Building SQL Query ---');
        const sqlBuilder = new SQLQueryBuilder();
        const sqlQuery = director(sqlBuilder);

        const expectedSQL = "SELECT name, email, age FROM users WHERE status = 'active' AND age > '30' ORDER BY name ASC LIMIT 100";
        console.log('Generated SQL:', sqlQuery.raw);
        expect(sqlQuery.raw).toBe(expectedSQL);

        console.log('\n--- Building MongoDB Query ---');
        const mongoBuilder = new MongoQueryBuilder();
        const mongoQuery = director(mongoBuilder);

        const expectedMongo = 'db.users.find({"$and":[{"status":"active"},{"age":{"$gt":"30"}}]}, {"projection":{"name":1,"email":1,"age":1},"sort":{"name":1},"limit":100})';
        console.log('Generated MongoDB:', mongoQuery.raw);
        expect(mongoQuery.raw).toBe(expectedMongo);
    });

    it('should allow reusing a builder instance after calling reset()', () => {
        const builder = new SQLQueryBuilder();

        // First query
        builder.from('products').select(['name']);
        expect(builder.build().raw).toBe('SELECT name FROM products');

        // Reset and build a completely new query
        builder.reset();
        builder.from('categories').select(['*']);
        expect(builder.build().raw).toBe('SELECT * FROM categories');
    });
});