import React from 'react'
import Codevar from "../img/codevar.png";
import Codelet from "../img/codelet.png";
import Codeconst from "../img/codeconst.png";

export const Variables = () => {
    return (
        <section className="flex-container">
            <h1>Declarando variables</h1>
            <sub>27 / Octubre / 2021</sub>
            <p>Tenemos 3 tipos de variables para definir o declarar en JavaScript: </p>
            <ul>
                <li>var: variables globales.</li>
                <li>let: variables limitadas al alcance del bloque donde las definamos.</li>
                <li>const: variables inmutables.</li>
            </ul>
            <h3>var</h3>
            <p>"var" es un tipo de variable mutable, su valor puede cambiar en diferentes pedazos de codigo, siempre y cuando nosotros la re-declaremos. Al día de hoy ya no es muy recomendable usar var y mejor optar por "let y "const".</p>
            <p>Un ejemplo más visual:</p>
            <img src={Codevar} alt="Codevar" className="code-image"/>
            <p>Si nosotros visualizamos este código, podemos ver que la variable "saludo" está definida 2 veces, esto al imprimir en consola nos mostrará 2 veces "Hola :D".</p>

            <h3>let</h3>
            <p>Por otro lado "let" también es una variable mutable, a diferencia de "var" es que nos respeta todos los valores que le hayamos asignado y también respeta el flujo de trabajo al igual que const.</p>
            <img src={Codelet} alt="Codevar" className="code-image"/>
            <p>Podemos observar que hemos re-declarado nuestra variable "let", sin embargo nos imprimirá los 2 valores que le hemos asignado, por orden de como los mandemos llamar, en este caso nos imprimirá primero "Jose" y después "Ricardo".</p>

            <h3>const</h3>
            <p>Esta variable a diferencia de "var" y "let" es una variable que no puede re-declararse, es decir solo la podemos declarar una vez y mandarla llamar sin alterar su valor.</p>

            <img src={Codeconst} alt="Codevar" className="code-image"/>

            <i>-Guevara, Ricardo.</i>
        </section>
    )
}
