var dataKendaraan = ["Ujang",24,"Avanza","B 1234 AGG",600000,false]

function parsingData(inputData){
    return JSON.parse(JSON.stringify(inputData))
}

const dataSTNKUjang = { //JSON Object
    "nama"  : "Ujang",
    "usia" : 24,
    "tipe" :"Yaris",
    "plat" : "B 1234 AGG",
    "biaya" : 600000,
    "isBayar" : false,
}

//console.log(dataSTNK)
//console.log("object")
//console.log(JSON.stringify(dataSTNKUjang))

var dataSTNK = [
    {
        "nama"  : "Ujang",
        "usia" : 24,
        "tipe" : "Avanza",
        "plat" : "B 1234 AGG",
        "biaya" : 600000,
        "isBayar" : false,
        "alamat" : [
            {
                dom : "Bandung"
            },
            {
                dom : "Surabaya"
            }
        ]
    },
    {
        "nama"  : "Indah",
        "usia" : 31,
        "tipe" : "Avanza",
        "plat" : "B 1234 HAS",
        "biaya" : 600000,
        "isBayar" : true,
        "alamat" : [
            {
                dom : "Bandung"
            },
            {
                dom : "Surabaya"
            }
        ]
    },
    {
        "nama"  : "Budi",
        "usia" : 21,
        "tipe" : "Avanza",
        "plat" : "B 1234 AHH",
        "biaya" : 600000,
        "isBayar" : false,
        "alamat" : [
            {
                dom : "Bandung"
            },
            {
                dom : "Surabaya"
            }
        ]
    }
]

// for(let i=0;i<dataSTNK.length;i++){
// console.log(JSON.stringify(dataSTNK[i].alamat)) bentuk array
//     console.log(JSON.stringify(dataSTNKUjang.alamat)) bentuk objek
// }

for(let key in dataSTNK){
        console.log(JSON.stringify(dataSTNK[key].alamat))
}
let alamatUjang = {
    alamat : "Bandung"
}

//Menambahkan object baru kedalam var object dataSTNKUjang
var temp = parsingData(dataSTNKUjang)
let new_dataSTNKUjang = Object.assign(temp,alamatUjang)

console.log(dataSTNKUjang)
console.log(new_dataSTNKUjang)

let statusBayarUjang = {
    isBayar : true,
    biaya : 625000
}
var temp = parsingData(new_dataSTNKUjang)
new_dataSTNKUjang = Object.assign(new_dataSTNKUjang,statusBayarUjang)
console.log(new_dataSTNKUjang)
console.log(dataSTNKUjang)


var temp = parsingData(new_dataSTNKUjang)
temp.usia = 27
console.log(temp)