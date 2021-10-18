import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("legal-person", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("cnpj").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("legal-person");
}
