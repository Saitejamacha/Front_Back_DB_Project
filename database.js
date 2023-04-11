// const mySql = require("mysql")

// const con = mySql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",  
//     database: "customers"
// }) 

// con.connect(function(err){
//     if (err) throw err;
    
//     console.log("Database Connected.")

//     var sql = "INSERT INTO users (Id, Name, Email, Mobile) VALUES ?"
//     var values = [
//         [3, "Vijay", "vijay123@gmail.com", 3]
//     ]
//     con.query(sql, [values], function(err, result){
//         if(err) throw err;

//         console.log("User Added:" + result.affectedRows)
//     })
//     con.query("SELECT * FROM users", function (err, result){

//         console.log(result)

//     })
