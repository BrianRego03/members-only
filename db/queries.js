const pool=require("./pool");

async function addNewUser(firstname,lastname,email,password){

    const query=`INSERT INTO memberdb(firstname,lastname,email,password)
                    VALUES($1,$2,$3,$4)`;
    console.log(firstname,lastname,email,password);
    await pool.query(query,[firstname,lastname,email,password]);
    return;

}

module.exports={addNewUser};