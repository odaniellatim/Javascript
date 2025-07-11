let p = document.querySelector(".p");

async function clicou() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let json = await response.json();
  p.innerText = json[0].title;

  // console.log("clicou");
}

async function inserir() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Titulo de Teste",
      body: "Corpo de teste",
      userId: 2,
    }),
  });

  let json = await response.json();
  console.log(json);
}
document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#inserir").addEventListener("click", inserir);
