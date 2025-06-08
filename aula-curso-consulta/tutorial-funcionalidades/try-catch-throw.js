/*

TRY, CATCH, THROW, FINALLY - TRATANDO E LANÇANDO ERROS
--------------------------------------------------------------


*/
function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números.");
  }
  return x + y;
}
try {
  // É executado quando não há erros
  console.log(soma(1, 2));
  console.log(soma("1", 2));

  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
} catch (err) {
  // É executado quando há erros
  console.log("os valores precisam ser numeros validos.");
  console.log("Tratando o erro");
} finally {
  // sempre é executado.
  console.log("FINALLY: Eu sempre sou executado");
}

function retornaHora(data) {
  if (!(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(data);
  console.log(hora);
} catch {
  //Tratar o erro.
} finally {
  console.log("Sempre vai ser executado.");
}
