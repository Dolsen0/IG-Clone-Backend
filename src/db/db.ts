import {MongoClient,ObjectId} from "mongodb"
import { uri } from "../../credential";
const client = new MongoClient(uri);

export const db = client.db("BocaCode")
