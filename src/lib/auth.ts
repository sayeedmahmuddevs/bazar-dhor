import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";



const MONGODB_URI = process.env.MONGODB_URI;

const client  = new MongoClient(MONGODB_URI);
const db = client.db("bazar_dhor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: { 
    enabled: true, 
  }, 
});