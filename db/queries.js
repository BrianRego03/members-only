const pool=require("./pool");

async function addNewUser(firstname,lastname,email,password){

    const query=`INSERT INTO memberdb(firstname,lastname,email,password)
                    VALUES($1,$2,$3,$4)`;
    console.log(firstname,lastname,email,password);
    await pool.query(query,[firstname,lastname,email,password]);
    return;

}

async function fetchUser(email){
    const query=`SELECT * FROM memberdb WHERE email=$1`
    const {rows}=await pool.query(query,[email]);
    return rows[0];
}

async function fetchUserById(id){
    const query=`SELECT * FROM memberdb WHERE id=$1`
    const {rows}=await pool.query(query,[id]);
    return rows[0];
}

module.exports={addNewUser,fetchUser,fetchUserById};