const bcrypt = require("bcrypt");
const nanoid = require("nanoid/generate");
const dictionary = require("nanoid-dictionary");
const allowableStrings = dictionary.numbers + dictionary.lowercase + dictionary.uppercase;

generateToken = length => {
  return nanoid(allowableStrings, length).toUpperCase();
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  let authToken = generateToken(256);
  let password = bcrypt.hashSync("password", 1);
  return knex("authentication")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("authentication").insert([
        {
          auth_id: 1,
          user_code: "USR1092836",
          email_address: "08028818000",
          email_address: "tony5egwu@gmail.com",
          wakanda: password,
          account_type: "ADMINISTRATOR",
          verification_code: authToken,
          verification_code_expiry: new Date().getTime(),
          active: true,
          enabled: true,
          has_social: false,
          created_date: new Date(),
          updated_date: new Date()
        }
      ]);
    });
};
