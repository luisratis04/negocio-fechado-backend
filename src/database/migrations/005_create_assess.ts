import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("assess", (table) => {
    table.increments("id").primary();
    table.enum("value", [1, 2, 3, 4, 5]).notNullable();
    table.integer("fisical_person_id", 10).unsigned().notNullable();
    table.integer("service_id", 10).unsigned().notNullable();

    table
      .foreign("fisical_person_id")
      .references("id")
      .inTable("fisical-person");
    table.foreign("service_id").references("id").inTable("service");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("assess");
}
