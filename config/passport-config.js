
const {fetchUser,fetchUserById}=require("../db/queries");
const passport = require("passport");
const localStrategy =require("passport-local").Strategy;

function initializeAuth(){
    passport.use(new localStrategy(
        { usernameField: "email" },
        async(email,password,done)=>{
            try{
                const user=await fetchUser(email);
                if(!user){
                    
                    return done(null,false,{message:"No user found"})
                }
                
                const match= await bcrypt.compare(password,user.password);
                if(!match){
                    return done(null,false,{message:"Incorrect password"})
                }

                return done(null,user);

            }
            catch(err){
                return done(err);
            }
        }
    )

    );

    passport.serializeUser((user,done)=>{
        done(null,user.id);
    });

    passport.deserializeUser(async(id,done)=>{
        try{
            const user= await fetchUserById(id);
            done(null,user);
        }
        catch(err){
            done(err);

        }
    })


}

module.exports=initializeAuth;