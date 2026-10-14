import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";




const MONGODB_URI = process.env.BETTER_MONGODB_URL as string

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in your .env file");
}

const client  = new MongoClient(MONGODB_URI);
const db = client.db("bazar_dhor");

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
    google: {
      clientId : process.env.CLIENT_GOOGLE_ID as string,
      clientSecret : process.env.CLEINT_GOOGLE_SECRETE as string,
    },
    github: {
      clientId :  process.env.CLIENT_GITHUB_ID as string,
      clientSecret : process.env.CLIENT_GITHUB_SECRETE as string,
    }
  },



  database: mongodbAdapter(db, {
    client,
  }),

  
});