import { MongoClient } from "mongodb";
import "dotenv/config";

const { URI } = process.env;

const client = new MongoClient(URI);

export const db = client.db("spotifyReact");
