const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeSite(url, selectors) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded" });

  let scrapedData = {};

  for (const [key, selector] of Object.entries(selectors)) {
    scrapedData[key] = await page.$$eval(selector, (elements) =>
      elements.map((el) => el.innerText)
    );
  }

  await browser.close();

  fs.writeFileSync("dados.json", JSON.stringify(scrapedData, null, 2));
  console.log("Dados salvos em dados.json");
}

const url =
  "https://shopee.com.br/Chaveiro-de-resina-personalizado-(LER-A-DESCRI%C3%87%C3%83O)-i.327230800.16308704289"; // Substitua pelo site que deseja fazer scraping
const selectors = {
  titulo: ".shopee-product-rating__main", // Substitua pela classe ou ID do elemento desejado
  //descricao: '#descricao-id' // Outra informação a ser extraída
};

scrapeSite(url, selectors);
