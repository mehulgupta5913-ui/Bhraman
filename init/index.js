const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL ='mongodb://127.0.0.1:27017/Bhraman';

main().then(() => {
    console.log('MongoDB connected');
}   ).catch(err => {
    console.log(err);
}   );      


async function main() {
    await mongoose.connect(MONGO_URL);
}
const initDB = async () => {
   await  Listing.deleteMany({});
  initdata.sampleListings =  initdata.sampleListings.map((obj) => ({...obj, owner: "6a9dc5eaf47e28d11d9320a5",country:"India",location: "Bengaluru", geometry:{type:"Point",coordinates:[77.5946,12.9716]}}));
    
   await Listing.insertMany(initdata.sampleListings);
    console.log("Database initialized with sample data");
    
};

initDB(); 
