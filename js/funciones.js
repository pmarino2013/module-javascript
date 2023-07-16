import cardMeme from "../components/cardApp.js";

export const crearTarjetas = (memes) => {
  memes.map((meme) => {
    const col = document.createElement("div");
    col.classList = "col mb-3";

    col.innerHTML = cardMeme(meme);
    document.querySelector("#contenedor").append(col);
  });
};
