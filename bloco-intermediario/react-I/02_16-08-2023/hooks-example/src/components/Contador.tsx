import { useState } from 'react';

function Contador() {
  // ESTADO ATUAL - FNC QUE ALTERA O MEU ESTADO
  const [contador, setContador] = useState<number>(0); // () - VALOR INICIAL DELE
  const [mostrar, setMostar] = useState(false);

  // FNC PARA ALTERAR O MOSTRAR
  function mostrarOcultarContador() {
    // FALSE -TRUE || TRUE - FALSE
    setMostar(!mostrar);
  }

  // INCREMENTAR + 1 - ALTERA O CONTADOR
  function incrementar() {
    setContador(contador + 1);
  }

  // DECREMENTAR + 1 - ALTERA O CONTADOR
  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <>
      <h1>useState</h1>
      <br />
      <button onClick={mostrarOcultarContador}>Mostrar contador</button>
      <br />

      {mostrar ? (
        <>
          <p>Contador: {contador}</p>
          <br />
          <button onClick={incrementar}>Incrementar</button>
          <button onClick={decrementar}>Decrementar</button>
        </>
      ) : (
        <p>Mostar está como false!</p>
      )}
    </>
  );
}

export default Contador;
