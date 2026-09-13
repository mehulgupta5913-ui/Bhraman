const User = require("../models/user.js");





module.exports.renderSignup = (req,res)=>{
    res.render("users/signup.ejs");
};



module.exports.signup = async (req, res) => {

    try{

          let {username,email,password} = req.body;
    const newUser = new User({username,email,password});
   const registeredUser = await User.register(newUser,password);

   req.login(registeredUser, (err) => {
        if (err) {
            console.error("Login error:", err); 
            return next(err);
        }
          req.flash("success","Welcome to Bhraman!");
    res.redirect("/Listings");
    });
  


    } catch(e){
        if(e.code === 11000){
            req.flash("error","Username or email already exists!!");
        }   
        else{
        req.flash("error",e.message);
        }
        res.redirect("/signup");
    }

  

};

module.exports.renderLogin = (req,res)=>{
    res.render("users/login.ejs");

};

module.exports.login = async (req, res) => {
        req.flash("success","Welcome back!");
        res.redirect(res.locals.redirectUrl || "/Listings");
      

};

module.exports.logout = async (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash("success","Logged out successfully!");
        res.redirect("/Listings");
      })};