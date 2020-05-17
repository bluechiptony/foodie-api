let tableName = "authentication";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("auth_id").primary().notNullable();
    table.string("user_code", 20).notNullable();
    table.string("email_address", 30).notNullable();
    table.text("phone_number", 20).nullable();
    table
      .enu("account_type", null, {
        useNative: true,
        existingType: true,
        enumName: "account_type",
      })
      .notNullable();
    table.boolean("has_social").notNullable();
    table.boolean("active").notNullable();
    table.boolean("enabled").notNullable();
    table.text("wakanda").notNullable();
    table.text("verification_code").notNullable();
    table.bigInteger("verification_code_expiry").notNullable();

    table.date("created_date").notNullable(new Date());
    table.date("updated_date").notNullable(new Date());

    table.index("user_code", "auth_user_code");
    table.index("wakanda", "auth_wakanda");
    table.index("verification_code", "auth_verification_code");
    table.index("account_type", "auth_account_type");
    table.index("email_address", "auth_email_address");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
