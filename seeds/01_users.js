exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1,
          user_code: "USR1092836",
          first_name: "Anthony",
          last_name: "Egwu",
          account_type: "ADMINISTRATOR",
          has_social: false,
          email_address: "tony5egwu@gmail.com",
          phone_number: "08028818000",
          created_date: new Date(),
          updated_date: new Date()
        }
      ]);
    });
};
