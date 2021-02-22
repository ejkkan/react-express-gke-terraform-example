const MongoClient = require("mongodb").MongoClient;
// const ObjectID = require("mongodb").ObjectID;
// import getCollections from "./collections";
export let client = null;

export default async () => {
  try {
    const uri = "mongodb+srv://user:user@cluster0.lkerd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true
    });
    const db = client.db("mongo-atlas-db");

    client.get;
    db.on("error", function(err) {
      const message = "MongoDB close" + (err ? ": " + err.message : "");
      console.log("herre", message);
    });

    // const collections = await getCollections(db);

    return {
      db,
      // ObjectID,
      // collections
    };
  } catch (e) {
    throw new Error("mongobug: " + e);
  }
};