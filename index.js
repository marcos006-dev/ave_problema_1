const multiplicando = 7;
const multiplicador = 2;
let resultMultiplicacion = 0;

try {
  if (isNaN(multiplicando)) {
    throw Error('El numero a multiplicar debe ser un numero');
  }

  if (isNaN(multiplicador)) {
    throw Error('El numero utilizado como multiplicador debe ser un numero');
  }

  for (let i = 0; i < multiplicador; i++) {
    resultMultiplicacion += multiplicando;
  }

  console.log(
    `El resultado de la multiplicación entre ${multiplicando} y ${multiplicador} es de: ${resultMultiplicacion}`
  );
} catch (error) {
  console.log(error);
}
