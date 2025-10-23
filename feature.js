function tambah(...bilangan) {
  return bilangan.reduce((total, num) => total + num)
}

function kurang(...bilangan) {
  return bilangan.reduce((total, num) => total - num)
}

console.log(tambah(9, 5))
