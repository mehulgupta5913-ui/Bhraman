const express = require('express');

const wrapAsync = require("../utils/wrapAsync.js");
require("../schema.js");
const Review = require('../models/reviews.js');
const Listing = require('../models/listing');
const router = express.Router({ mergeParams: true });
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/review.js");











router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

// Delete review route
router.delete("/:reviewId",isLoggedIn, isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router;
