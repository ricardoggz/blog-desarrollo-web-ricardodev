import React from "react";
import { Link } from "react-router-dom";
import "../Button/button.css";

function Button() {
  return (
    <Link to="/">
      <button>
        <i class="bi bi-arrow-left"></i>Inicio
      </button>
    </Link>
  );
}

export { Button };
