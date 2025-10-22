while (true) {
  let rpta = parseInt(
    prompt(
      "1) Calcular área del círculo\n2) Calcular área del rectángulo\n0) Salir\nDigite su opción:",
    ),
  );
  let area = 0;
  switch (rpta) {
    case 1:
      let radio = parseFloat(prompt("Digite el radio del círculo"));
      area = 3.1416 * radio ** 2;
      console.log(`El área de ese círculo es ${area}`);
      break;
    case 2:
      let ancho = parseFloat(prompt("Digite el ancho del rectángulo"));
      let largo = parseFloat(prompt("Digite el largo del rectángulo"));
      area = ancho * largo;
      console.log(`El área del rectángulo es ${area}`);
      break;
    case 0:
      break;
  }
}
