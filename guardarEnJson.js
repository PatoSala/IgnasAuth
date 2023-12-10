const fs = require('fs');//import
let usersDb = JSON.parse(fs.readFileSync('./usersDB.json'));//read

function register(nombre,mail,contraseña){
    objeto = {
        username : nombre,
        email : mail,
        password : contraseña
    }asdasdasd
    usersDb.push(objeto);
    let arrayJSON = JSON.stringify(usersDb);//convierte el array a cadena
    fs.writeFileSync('./usersDB.json',arrayJSON);//escribe la cadena en el archivo 
}

console.log("Test")

function login(mail,contraseña){
    let usersDb = JSON.parse(fs.readFileSync('./usersDB.json'));//read
    for(let i = 0;i<usersDb.length;i++){
        if (mail==usersDb[i].email && contraseña==usersDb[i].password){
            console.log("Bem vindo", usersDb[i].username);
            return 0;
        }
    }
    console.log("Erro");
}

register("newUserName", "newUserEmail", "newUserPass");
login("newUserEmail", "newUserPass");


