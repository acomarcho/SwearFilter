const tmp = require('badwords/array');
const words = tmp.sort((a, b) => a.length - b.length);
console.log(words);

const bruteHamming = (text, pattern) => {
  /* Gabungan dari brute force string matching dengan hamming distance */
  /* Hasil kembalian berupa array of indexes: index-index pertama dari kata yang memiliki kemiripan >= 80% */
  const res = [];
  /* Mulai searching dari i = 0 sampai dengan i = text.length - pattern.length */
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let hammingDist = 0;
    for (let j = 0; j < pattern.length; j++) {
      /* Pattern matching: Hitung banyak yang berbeda */
      if (text[i + j].toLowerCase() !== pattern[j].toLowerCase()) {
        hammingDist++;
      }
    }
    /* Hitung persentase kesamaan menggunakan hammingDist */
    let matchingPercent = (pattern.length - hammingDist) / pattern.length;
    if (matchingPercent >= 0.8) {
      /* Terjadi kemiripan, masukkan indexnya */
      res.push(i);
    }
  }
  return res;
};

const filterText = (text) => {
  let res = text.slice();

  words.forEach((kata) => {
    /* Untuk setiap kata kasar yang ada, lakukan pattern matching */
    indexes = bruteHamming(res, kata);
    if (indexes.length > 0) {
      console.log("MATCH untuk kata " + kata);
      /* indexes ada hasilnya */
      indexes.forEach((startIdx) => {
        for (let i = startIdx + 1; i < startIdx + kata.length - 1; i++) {
          /* Ubah kata dengan bintang kecuali huruf pertama dan huruf terakhirnya */
          res = res.slice(0, i) + "*" + res.slice(i + 1);
        }
      });
    }
  });

  return res;
};

module.exports = filterText;
