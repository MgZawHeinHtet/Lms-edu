import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { db } from "./lib/db";
import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        let user = credentials;

        const salt = await bcryptjs.genSalt(10);

        const toHashPassword = await bcryptjs.hash(user.password, salt);

        const existingUser = await db.user.findFirst({
            where : {
                email : user.email
            }
        })

        if(existingUser){
            const comparePassword = await bcryptjs.compare(user.password,existingUser.password);
            if(comparePassword){
                return existingUser
            }{
                return NextResponse.json("invalid credentials")
            }
        }

        const toCreateUser = await db.user.create({
          data: {
            email: user.email,
            password: toHashPassword,
          },
        });

        console.log(toCreateUser);

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
