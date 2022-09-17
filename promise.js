const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (input) => {
  try {
    let theater1 = await promiseTheaterIXX();
    theater1.push.apply(theater1, await promiseTheaterVGC());

    let theaterAll = theater1.map((item) => {
      return item.hasil;
    })
    
    let dataHasil = "Jumlah Film yang ditonton " + input + " : " + theaterAll.filter(item => item === input).length;
    console.log(dataHasil);
    
    //const a = promiseTheaterIXX();
    //const b = promiseTheaterVGC();
    //const result = await Promise.all([a, b])
    //return result[0];

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  promiseOutput,
};
