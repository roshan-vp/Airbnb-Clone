if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

main().then(() => {
    console.log("Connected Successfully");
}).catch((err) => {
    console.log(err)
})

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "69255da96d94ffc27222e16b",
        geometry: {
            type: "Point",
            coordinates: [77.2090, 28.6139] // Default to New Delhi
        }
    }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();