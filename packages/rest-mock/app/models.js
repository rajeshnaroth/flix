const faker = require("faker");

faker.seed(new Date().getMilliseconds());

module.exports = {
  data: {
    title: "REST Mock",
    id: faker.random.uuid(),
    user: `${faker.name.lastName()}`
  }
};
