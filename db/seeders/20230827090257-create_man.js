const { Superman, Superpowers } = require("../models");

const powers = [
  "solar energy absorption",
  "healing factor",
  "solar flare",
  "heat vision",
  "solar invulnerability",
  "flight",
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "supermans",
      [
        {
          nickname: "Superman (demo)",
          real_name: "Clark Kent",
          origin_description: "",
          catch_phrase: "",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    for (const power of powers) {
      await queryInterface.bulkInsert(
        "superpowers",
        [
          {
            name: power,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
    }

    const man = await Superman.findAll();
    const powerBd = await Superpowers.findAll();

    const {
      dataValues: { id: manId },
    } = man[0];

    for (const elem of powerBd) {
      const {
        dataValues: { id: powerId },
      } = elem;

      await queryInterface.bulkInsert(
        "mans_to_powers",
        [
          {
            man_id: manId,
            power_id: powerId,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
