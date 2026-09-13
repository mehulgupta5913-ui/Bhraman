const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema,reviewSchema} = require("../schema.js");
const ExpressErrors = require("../utils/ExpressErrors.js");
const Listing = require('../models/listing');
const isLoggedIn = require("../middleware.js").isLoggedIn;
const isOwner = require("../middleware.js").isOwner;
const validateListing = require("../middleware.js").validateListing;
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");

const upload = multer({ storage});




router
.route("/")       //index route,create post route
.get(wrapAsync(listingController.index))
.post(isLoggedIn, validateListing, upload.single("listing[image]"),wrapAsync(listingController.createListing
));

//  (New) Route
router.get("/new",isLoggedIn, listingController.renderNewForm);

router.route("/:id")          //read(Show route)  //Update Route      //Delete Route
.get( wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner, upload.single("listing[image]"),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroy));

















//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,validateListing,wrapAsync( listingController.renderEdit));




module.exports = router;