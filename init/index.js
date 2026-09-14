
require("dotenv").config({path:"../.env"});
const dns = require("dns");
dns.setServers(["8.8.8.8","1.1.1.1"]);
const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");


//const MONGO_URL ='mongodb://127.0.0.1:27017/Bhraman';
 const ATLASDBURL =  process.env.ATLASDBURL;

main().then(() => {
    console.log('MongoDB connected');
}   ).catch(err => {
    console.log(err);
}   );      


async function main() {
    await mongoose.connect(ATLASDBURL);
// }
// const initDB = async () => {
   await  Listing.deleteMany({});
  initdata.sampleListings =  initdata.sampleListings.map((obj) => ({...obj, owner: "6aa6e2abd0b49dfa41a931f5",country:"India",location: "Bengaluru", geometry:{type:"Point",coordinates:[77.5946,12.9716]}}));
    
   await Listing.insertMany(initdata.sampleListings);
    console.log("Database initialized with sample data");
    
};

main();
