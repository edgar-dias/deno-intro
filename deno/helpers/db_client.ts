import { MongoClient, Database } from 'https://deno.land/x/mongo@v0.11.0/mod.ts';

let db: Database;

export function connect() {
  const client = new MongoClient();
  client.connectWithUri("mongodb+srv://deno-intro:ykzgu1rxIT7wgan2@cluster0.8zxo2.mongodb.net/?retryWrites=true&w=majority");


  db = client.database('todo-app');
}

export function getDb() {
  return db;
}

