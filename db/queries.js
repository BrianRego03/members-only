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

async function createMessageDB(content,id){
    const query=`INSERT INTO messages(content)
                    VALUES($1)
                    RETURNING id`;
    const {rows}=await pool.query(query,[content]);
    let mid=rows[0].id;
    const querySecond=`INSERT INTO member_messages(memberid,messageid)
                        VALUES($1,$2)`
    await pool.query(querySecond,[+id,+mid]);
    return;
    
}

async function fetchAllMessages(){
    const query=`SELECT messages.content,memberdb.firstname,memberdb.lastname
                    FROM messages
                    LEFT JOIN member_messages
                    ON messages.id=member_messages.messageid
                    LEFT JOIN memberdb
                    ON member_messages.memberid=memberdb.id
                    `
    const {rows}=await pool.query(query);
    // console.log(rows[0]);
    return rows;

}

module.exports={addNewUser,fetchUser,fetchUserById,createMessageDB,fetchAllMessages};