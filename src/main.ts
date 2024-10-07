import "./style.css";
import form from "./components/form";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1 class="text-4xl">Calculadora de Salud</h1>

  <div class="app-component">

  </div>
`;

const $appContent = document.querySelector<HTMLDivElement>(".app-component")!;


form($appContent);