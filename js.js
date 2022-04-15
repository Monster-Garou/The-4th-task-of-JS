let users = [
    {
        name: "diyor",
        school: 34,
        age: 14,
    },
    {
        name: "timur",
        school: 34,
        age: 14
    },
    {
        name: "normurod",
        school: "TATU",
        age: 22,
    },
    {
        name: "ilkhom",
        school: "OOO Jambay Community",
        age: 20,
    },
    {
        name: "sabina",
        school: "School NaN",
        age: 22,
    },
    {
        name: "khasan",
        school: "iNstitute of Service and Economy",
        age: 22,
    }
]
let userName = prompt("iNput name").toLowerCase
let slic = users.slice(elem => elem.name == "userName", 1)
alert(JSON.stringify(slic))
let conf = confirm("Are you sure?")
if (conf == true){
    var splic = users.splice(elem => elem.name == userName,1)
    document.write(JSON.stringify(users))
}else{
    alert("Removal cancelled")
}
