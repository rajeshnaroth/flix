const faker = require("faker");

const nItems = faker.random.number(60) + 10;
const data = Array(nItems)
  .fill(null)
  .map(_ => {
    const id = faker.commerce.productName();

    return {
      id,
      description: faker.hacker.phrase(),
    };
  });

module.exports = {
  data
};
