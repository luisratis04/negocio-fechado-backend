import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("service", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description").notNullable();
    table.decimal("value").notNullable().defaultTo(0);
    table.integer('legal_person_id', 10).unsigned().notNullable();

    table.foreign('legal_person_id').references('id').inTable('legal-person');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("service");
}
