import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.11.0/mod.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";

let db: Database;

const MONGO_USER = config()['MONGO_USER'];
const MONGO_PASSWORD = config()['MONGO_PASSWORD'];

export function connect() {
  const client = new MongoClient();
  client.connectWithUri(`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.8zxo2.mongodb.net/?retryWrites=true&w=majority`);

  db = client.database('todo-app');
}

export function getDb() {
  return db;
}

