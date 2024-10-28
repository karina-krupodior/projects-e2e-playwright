import { faker } from "@faker-js/faker";

export function createRandomUserData() {
  return {
    name: faker.name.firstName().toLowerCase(),
    email: faker.internet.email(undefined, undefined, "yourdomain.com"),
    pass: faker.internet.password(),
  };
}
