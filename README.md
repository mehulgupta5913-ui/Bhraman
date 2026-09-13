🌍 Bhraman
A Full-Stack Travel & Stay Discovery Platform

Bhraman is a full-stack web application designed to help users discover and explore unique places to stay. Users can browse listings, view their locations on an interactive map, create and manage their own listings, authenticate securely, and share reviews and ratings.

The project is built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Cloudinary, following a structured MVC architecture.

✨ Features
🏠 Explore Listings
Browse available travel stays and properties
View detailed information about each listing
See property images, pricing, location, and description
Explore listings through an easy-to-use interface
🗺️ Interactive Maps

Bhraman integrates interactive maps to make location discovery easier.

Users can:

View the exact location of a listing
Explore where a property is situated
Understand the geographical context before choosing a stay
Navigate between property details and its map location

This makes the platform more useful for travelers who want to know where a property is located before planning their trip.

🔐 Authentication

Bhraman provides a secure user authentication system.

Users can:

Create an account
Log in
Log out
Maintain authenticated sessions
Access protected features

Authentication ensures that private functionality is only available to logged-in users.

👮 Authorization

The application implements authorization to protect user-owned resources.

For example:

A user can edit or delete their own listing, but cannot modify another user's listing.

Authorization checks are performed before sensitive operations.

➕ Create Listings

Authenticated users can create their own property listings.

A listing can contain:

Title
Description
Price
Location
Country
Property image
✏️ Edit Listings

Listing owners can update their existing properties.

They can modify information such as:

Title
Description
Price
Location
Country
Image
🗑️ Delete Listings

Users can delete listings that belong to them.

Ownership checks prevent unauthorized users from deleting someone else's property.

⭐ Reviews & Ratings

Users can share their experience by adding reviews to listings.

Reviews contain:

Rating
Comment
Reviewer information

Authorized users can also remove their own reviews.

☁️ Cloud Image Storage

Property images are uploaded and stored using Cloudinary.

This provides:

Cloud-based image storage
Reliable image URLs
Better deployment compatibility
Reduced dependency on local file storage
⚠️ Validation & Error Handling

The application includes validation and centralized error-handling mechanisms to handle:

Invalid user input
Missing resources
Unauthorized requests
Invalid routes
Database errors
Failed operations
🛠️ Tech Stack
Technology	Purpose
Node.js	JavaScript runtime
Express.js	Backend web framework
MongoDB	Database
Mongoose	MongoDB object modeling
EJS	Server-side templating
Bootstrap	Responsive UI
Passport.js	Authentication
Express Session	Session management
Cloudinary	Image storage
Multer	File uploads
Joi	Data validation
JavaScript	Application logic
Git & GitHub	Version control
🏗️ Architecture

Bhraman follows an MVC-based architecture to keep the application organized and maintainable.

                    ┌─────────────────┐
                    │      USER       │
                    │    Browser      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     ROUTES      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   MIDDLEWARE    │
                    │ Authentication  │
                    │ Authorization   │
                    │   Validation    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   CONTROLLERS   │
                    │ Business Logic  │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     MODELS      │
                    │    Mongoose     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │    MongoDB      │
                    └─────────────────┘
📂 Project Structure
Bhraman/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── layouts/
│   ├── includes/
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── .gitignore
├── README.md
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
└── package-lock.json
📁 Folder Overview
controllers/

Contains the main business logic of the application.

Controllers handle operations such as:

Creating listings
Viewing listings
Updating listings
Deleting listings
Creating reviews
Deleting reviews
User authentication
models/

Contains the Mongoose schemas used by the application.

Main models include:

User
Listing
Review

These models define how application data is stored and how different entities are related.

routes/

Contains Express route definitions.

Routes connect incoming HTTP requests with the appropriate controller.

For example:

GET     /listings
POST    /listings
GET     /listings/:id
PUT     /listings/:id
DELETE  /listings/:id

Review and user-related routes are separated into their own route files.

views/

Contains EJS templates responsible for rendering the user interface.

The views include pages for:

Home
Listings
Listing details
Login
Signup
Forms
Reviews
Error pages

Reusable components are maintained in:

views/includes/

and common layouts are maintained in:

views/layouts/
public/

Contains static frontend resources such as:

CSS
JavaScript
Images
Other static assets
middleware.js

Contains reusable middleware for application-level checks.

Middleware is used for:

Authentication
Authorization
Ownership verification
Request validation
Protected routes
utils/

Contains reusable helper functions.

For example:

ExpressError

Used for creating structured application errors.

wrapAsync

Used to handle asynchronous errors without repeatedly writing try...catch blocks in every route.

cloudConfig.js

Contains Cloudinary configuration used for handling property images.

init/

Contains database initialization and sample data.

This makes it easier to populate the application with initial listings during development.

🔄 How Bhraman Works

A typical request follows this flow:

User
 ↓
Browser
 ↓
Express Route
 ↓
Middleware
 ↓
Controller
 ↓
Mongoose Model
 ↓
MongoDB
 ↓
Controller
 ↓
EJS View
 ↓
Browser

For example, when creating a listing:

User fills listing form
        ↓
POST request
        ↓
Authentication check
        ↓
Input validation
        ↓
Image upload
        ↓
Cloudinary
        ↓
Listing Controller
        ↓
MongoDB
        ↓
Listing created
        ↓
User redirected to listing
🗺️ Map Integration

Location is an important part of a travel platform.

Bhraman integrates an interactive map with listings so that users can visually understand where a property is located.

The listing's location is connected with the map, allowing users to move from:

Listing Details
       ↓
Property Location
       ↓
Interactive Map

This provides better geographical context than displaying a location as plain text.

🔐 Authentication & Authorization

Bhraman uses authentication and authorization to protect user-specific operations.

Authentication

Authentication verifies the identity of a user.

Username + Password
        ↓
Authentication
        ↓
User Session
        ↓
Logged-in User
Authorization

Authorization determines whether the authenticated user has permission to perform an action.

Logged-in User
       ↓
Does the resource belong to this user?
       ↓
      YES ─────→ Allow
       │
       NO
       ↓
     Deny

This prevents unauthorized modification or deletion of resources.

🗄️ Database Relationships

The application maintains relationships between users, listings, and reviews.

A simplified representation:

              ┌─────────────┐
              │    USER     │
              └──────┬──────┘
                     │
                     │ owns
                     ▼
              ┌─────────────┐
              │   LISTING   │
              └──────┬──────┘
                     │
                     │ has
                     ▼
              ┌─────────────┐
              │   REVIEW    │
              └──────┬──────┘
                     │
                     │ written by
                     ▼
              ┌─────────────┐
              │    USER     │
              └─────────────┘

This structure allows the platform to associate:

Listings with their owners
Reviews with their listings
Reviews with their authors
⭐ Review System

The review system allows users to share their experience with a property.

A typical review flow is:

User opens listing
       ↓
Writes review
       ↓
Selects rating
       ↓
Submits review
       ↓
Authentication check
       ↓
Validation
       ↓
Review saved
       ↓
Review displayed

This provides useful information to other travelers.

☁️ Image Upload System

Bhraman uses Multer + Cloudinary for image handling.

The upload flow is:

User selects image
        ↓
Multer processes upload
        ↓
Cloudinary stores image
        ↓
Cloudinary returns image URL
        ↓
URL stored with listing
        ↓
Image displayed on website

This approach is more suitable for deployment than depending entirely on local file storage.

🛡️ Data Validation

User-submitted data is validated before being stored.

Validation helps prevent:

Missing required fields
Invalid ratings
Incorrect listing data
Unexpected input
Invalid requests

Validation is an important part of maintaining database consistency.

🚨 Error Handling

Bhraman uses centralized error handling to manage application errors.

Instead of duplicating error-handling code throughout the application, errors can be passed to a common handler.

This helps provide:

Cleaner controllers
Consistent error responses
Better debugging
Improved user experience
📱 Responsive UI

The frontend is designed to work across different screen sizes.

The interface supports:

💻 Desktop
💻 Laptop
📱 Mobile
📟 Tablet

Responsive design allows users to explore listings and interact with the platform comfortably across devices.

⚙️ Installation & Setup
1. Clone the Repository
git clone <your-repository-url>
2. Move Into the Project
cd Bhraman
3. Install Dependencies
npm install
4. Configure Environment Variables

Create a .env file in the root directory.

Example:

ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret

⚠️ Never commit your .env file to GitHub.

5. Initialize Sample Data

If you want to populate the database with sample data:

node init/index.js
6. Start the Application

Using Node:

node app.js

Or using Nodemon during development:

nodemon app.js
7. Open in Browser
http://localhost:8080
📋 Main Routes
Method	Route	Description
GET	/listings	View all listings
GET	/listings/:id	View a specific listing
POST	/listings	Create a listing
PUT	/listings/:id	Update a listing
DELETE	/listings/:id	Delete a listing
POST	/listings/:id/reviews	Add a review
DELETE	/listings/:id/reviews/:reviewId	Delete a review
GET	/login	Login page
POST	/login	Authenticate user
GET	/signup	Signup page
POST	/signup	Register user
GET	/logout	Logout user

Routes may vary depending on the current implementation.

🧪 Testing Checklist

Before deploying the application, verify the following:

Authentication
 User can register
 User can log in
 User can log out
 Protected routes reject unauthenticated users
Listings
 User can view listings
 User can create listings
 User can edit their own listings
 User cannot edit another user's listings
 User can delete their own listings
 Images upload correctly
Reviews
 User can add reviews
 Rating validation works
 User can delete authorized reviews
 Reviews display correctly
Maps
 Listing location appears correctly
 Map loads successfully
 Location is connected to the correct listing
💡 Key Concepts Implemented

This project demonstrates practical implementation of several real-world development concepts:

Backend
Node.js
Express.js
RESTful routing
MVC architecture
Middleware
Controllers
Error handling
Async programming
Database
MongoDB
Mongoose
Schema design
CRUD operations
Document relationships
Referencing
Authentication
User registration
Login/logout
Sessions
Authentication middleware
Authorization
Ownership checks
Frontend
HTML
CSS
JavaScript
EJS
Bootstrap
Responsive design
Cloud & Deployment
Cloudinary
Environment variables
Git
GitHub
📈 Future Improvements

Although Bhraman currently provides the core functionality of a travel and stay discovery platform, several features can be added in future versions.

📅 Booking System

Allow users to reserve properties by selecting:

Check-in date
Check-out date
Number of guests
💳 Online Payments

Integrate a payment gateway for secure booking payments.

❤️ Wishlist

Allow users to save their favorite properties.

🔎 Advanced Search

Add filters based on:

Location
Price
Rating
Property type
Amenities
💬 Host–Guest Messaging

Allow travelers and property owners to communicate directly.

🔔 Notifications

Provide notifications for:

Bookings
Reviews
Messages
Listing updates
🤖 Personalized Recommendations

Recommend properties and destinations based on user preferences and activity.

🎯 Project Goals

Bhraman was built with the following goals:

Build a practical full-stack application
Understand MVC architecture
Implement authentication and authorization
Work with MongoDB and Mongoose
Implement real-world CRUD operations
Integrate cloud image storage
Integrate interactive maps
Build a responsive frontend
Practice backend API and routing concepts
Create a scalable foundation for future features
📸 Screenshots

Add screenshots of your application here to make the GitHub repository more attractive.

Recommended screenshots:

Home Page
Listings Page
Listing Details
Interactive Map
Login Page
Signup Page
Create Listing
Reviews

Example:

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Listings
![Listings](screenshots/listings.png)

### Listing Details
![Listing Details](screenshots/listing-details.png)

### Interactive Map
![Map](screenshots/map.png)
🚀 Future Vision

Bhraman can eventually grow into a complete travel ecosystem rather than only a stay-discovery platform.

                     🌍 BHRAMAN
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
      🏠 Stays          🗺️ Travel        ⭐ Reviews
        │                 │                 │
     Listings          Destinations       Ratings
        │                 │                 │
     Booking            Maps            Experiences
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                    👤 Travelers

The long-term vision is to provide travelers with a single platform for discovering stays, exploring destinations, planning trips, and sharing experiences.

🤝 Contributing

Contributions are welcome.

If you would like to contribute:

# Fork the repository

# Create a new branch
git checkout -b feature/new-feature

# Make your changes

# Stage changes
git add .

# Commit
git commit -m "Add new feature"

# Push
git push origin feature/new-feature

Then open a Pull Request.

📄 License

This project is currently developed for educational and portfolio purposes.

👨‍💻 Author
Mehul Gupta

Full-Stack Developer

Interested in:

Java • JavaScript • Node.js • Express.js • MongoDB • DSA

⭐ Show Your Support

If you like this project, consider giving the repository a ⭐ on GitHub.

📌 Bhraman at a Glance
Category	Details
🌐 Type	Full-Stack Web Application
🏠 Domain	Travel & Accommodation
⚙️ Backend	Node.js + Express.js
🗄️ Database	MongoDB + Mongoose
🎨 Frontend	EJS + Bootstrap + JavaScript
🔐 Authentication	Passport.js + Sessions
☁️ Image Storage	Cloudinary
🗺️ Maps	Interactive Map Integration
⭐ Reviews	Rating & Review System
🏗️ Architecture	MVC
🔒 Security	Authentication + Authorization + Validation
📦 Version Control	Git + GitHub

Bhraman — Discover places. Explore destinations. Travel better. 🌍
