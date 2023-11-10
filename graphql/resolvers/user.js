import { User } from "../../models/user.js";

export const resolvers = {
  Query: {
    user: async (_, {emailAddress}) => {
      try {
        const user = await User.findOne({where: {emailAddress}});
        return user;
      } catch (error) {
        console.log("Error fetching one user in resolver", error);
      }
    },
    users: async () => {
      try {
        const users = await User.findAll();
        return users;
      } catch (error) {
        console.log("Error fetching all users in resolver", error);
      }
    },
  },
};
