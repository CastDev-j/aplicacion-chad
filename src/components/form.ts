import htmlForm from "./form.html?raw";

export default function form($app: HTMLDivElement) {
  $app.innerHTML = htmlForm;

  const $form: HTMLFormElement = $app.querySelector("form")!;

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData($form);


    const weight = Number(formData.get("weight"));




    if (weight < 0) {
      alert("El peso no puede ser negativo");
      return;
    }

    if(weight >= 100){
      chadFunction();
      return;
    }

    alert("El peso es: " + weight);
  });
}

const chadFunction = () => {
    imageAnimation();
    musicFunction();
}

const imageAnimation = () => {
  const img: HTMLElement | null = document.getElementById("rotatingImage");
  const imageContainer: HTMLElement | null = document.querySelector(".image-container");

  imageContainer!.classList.toggle("animate");
  img!.classList.toggle("animate");
}

// esta funcion reproduce el mpeg en ../assets/heavy-song.mpeg
const musicFunction = () => {
    const audio = new Audio("./heavy-song.mp3"); 
    
    audio.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
        alert("El navegador no pudo reproducir el audio.");
    });

}