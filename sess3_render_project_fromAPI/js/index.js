import { CardComponents } from "../components/CardComponents.js";
import { products } from "../data/products.js";

let renderArea = document.querySelector('#renderArea');

// get product store in array by loop
products.map((product) => renderArea.innerHTML += CardComponents(product)); 