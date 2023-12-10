const fs = require('fs');//import
let usersDb = JSON.parse(fs.readFileSync('./usersDB.json'));//read

function register(nombre,mail,contraseña){
    for(let i = 0; i<usersDb.length;i++){
        if(mail == usersDb[i].email){
            console.log("Error");
            return;
        }
    }
    objeto = {
        username : nombre,
        email : mail,
        password : contraseña
    }
    usersDb.push(objeto);
    let arrayJSON = JSON.stringify(usersDb);//convierte el array a cadena
    fs.writeFileSync('./usersDB.json',arrayJSON);//escribe la cadena en el archivo 
}

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

register("newUserName", "newUserEmaill", "newUserPass");



