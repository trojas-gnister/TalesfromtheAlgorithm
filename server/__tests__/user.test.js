const { User } = require("../models/User");
import { expect } from "@jest/globals";

const expect = User.expect;

// test create
expect(
  User.create({
    username: "user123",
    password: "password123",
  })
).resolves.toBeDefined();

// test retrieve
expect(
  User.findOne({
    username: "user123",
    password: "password123",
  })
).resolves.toBeDefined();

// test update
expect(
  User.findOneAndUpdate(
    {
      username: "user123",
    },
    {
      password: "newPassword123",
    }
  )
).resolves.toBeDefined();

// test delete
expect(
  User.findOneAndDelete({
    username: "user123",
  })
).resolves.toBeTruthy();


jest.use(expect);

module.exports = { expect };
