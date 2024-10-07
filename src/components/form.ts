import htmlForm from "./form.html?raw";

let hasInteracted = false; // Variable para rastrear si el usuario ha interactuado

export default function form($app: HTMLDivElement) {
  $app.innerHTML = htmlForm;

  const $form: HTMLFormElement = $app.querySelector("form")!;

  // Detecta la interacción del usuario
  document.addEventListener('click', () => {
    hasInteracted = true; // Marcamos que el usuario ha interactuado
  });

  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData($form);
    const weight = Number(formData.get("weight"));

    if (weight < 0) {
      alert("El peso no puede ser negativo");
      return;
    }

    if (weight >= 100) {
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

// Esta función reproduce el audio del elemento <audio> en el HTML
const musicFunction = () => {
  if (!hasInteracted) return; // No intentamos reproducir el audio si no ha habido interacción

  const audioElement = document.getElementById("audio") as HTMLAudioElement; // Obtenemos el elemento de audio
  audioElement.play().catch((error) => {
    console.error("Error al intentar reproducir el audio:", error);
    alert("El navegador no pudo reproducir el audio.");
  });
}
