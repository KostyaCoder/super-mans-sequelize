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

    const powersInsert = powers.map((x) => {
      return {
        name: x,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("superpowers", powersInsert);

    const man = await Superman.findAll();
    const powerBd = await Superpowers.findAll();

    const {
      dataValues: { id: manId },
    } = man[0];

    const mans_to_powers = powerBd.map((x) => {
      const {
        dataValues: { id: powerId },
      } = x;

      return {
        man_id: manId,
        power_id: powerId,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });
    await queryInterface.bulkInsert("mans_to_powers", mans_to_powers);
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
