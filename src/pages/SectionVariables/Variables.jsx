import React from "react";
import { Button } from "../../components/Button/Button";

import codeConst from "../../img/imgtoVariableSection/codeconst-min.png";
import codeLet from "../../img/imgtoVariableSection/codelet-min.png";
import codeVar from "../../img/imgtoVariableSection/codevar-min.png";

function Variables() {
  return (
    <section className="flex-container sections">
      <h1>Declarando variables</h1>
      <sub>03 / Noviembre / 2021</sub>
      <p>En JavaScript exiten 3 tipos de variables que podemos definir:</p>

      <h2>var</h2>
      <p>
        Es un tipo de variable mutable, podemos redeclararla en diferentes
        bloques de nuestro código, pero no respeta el flujo de trabajo y su
        valor será el último que declaremos. Al día de hoy ya no se recomienda
        usar var y es mejor optar por "let" y "const".
      </p>
      <p>Un ejemplo más visual:</p>
     
        <img src={codeVar} alt="CodeVar" className="code-image" />
     
      <p>
        Aquí definimos la variable "saludo" 2 veces, al mandar a imprimir esto,
        el resultado será "Hola :D", ya que var almacena el último valor que le
        asignamos.
      </p>

      <h2>let</h2>
      <p>
        También es una variable mutable, la única diferencia es que si respeta
        el flujo de trabajo, es decir, que aunque se le reasigne un valor
        diferente en otro bloque de nuestro código respetará y seguirá
        almacenando el valor anterior.
      </p>
      
        <img src={codeLet} alt="CodeLet" className="code-image" />
      
      <p>
        Aquí redeclaramos la variable "nombre", al mandar a imprimir esto nos
        mostrará los dos valores que le hemos asignado a nuestra variable, por
        orden de como los mandemos llamar.
      </p>

      <h2>const</h2>
      <p>
        Esta variable es inmutable, es decir, que solo podemos asignarle un solo
        valor en nuestro código. Es más recomendable programar con este tipo de
        variables que respetan el flujo de trabajo de nuestro código, incluso
        framewokrs y librerías populares de JavaScript las usan.
      </p>
      
        <img src={codeConst} alt="CodeConst" className="code-image" />
        <p className="notes">Nota: Te invito a copiar y ejecutar estos códigos en tu editor y navegador preferido o ejecutarlos con <a href="https://nodejs.org/es/" target="blank">Node JS</a> y ver como es que funcionan las variables en JavaScript.</p>
      

      <Button />
    </section>
  );
}

export { Variables };
