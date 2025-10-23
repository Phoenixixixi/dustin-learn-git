const nama = "dustin";

function panggilNamaSapa(callback) {
  return callback("halo selamat pagi");
}

function panggil(nama, sapa) {
  return console.log(nama, sapa);
}

const panggilSemua = panggilNamaSapa((sapa) => panggil(nama, sapa));
console.log(panggilSemua);
