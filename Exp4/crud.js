const {MongoClient}=require("mongodb");

const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);

async function run() {
   try{
     await client.connect();
    console.log("Mongodb Connected");
    const db=client.db("studentDB");
    const collection=db.collection("students");

    await collection.insertOne({name:"ak",age:20,course:"CE"});
    console.log("Inserted student data");

    let data=await collection.find().toArray();
    console.log("All data :",data);
    await collection.updateOne({name:"ak"},{$set:{age:21}});
    console.log("Updated data");
    data=await collection.find().toArray();
    console.log("All data :",data);

    await collection.deleteOne({name:"ak"});
    console.log("Deleted data");
   }catch(err){
    console.log(err);
   }finally{
    await client.close()
   }


    
}
run();