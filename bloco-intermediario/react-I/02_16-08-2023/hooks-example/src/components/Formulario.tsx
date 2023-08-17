import { useState } from 'react';
import ButtonStyled from './ButtonStyled';
import InputStyled from './InputStyled';

type TipoInput = 'nome' | 'sobrenome';

interface Pessoa {
  nome: string;
  sobrenome: string;
}

// formulario({nome, sobrenome}) formulario.nome, formulario.sobrenome

function Formulario() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [lista, setLista] = useState<Pessoa[]>([]); // ARMAZENAR OS DADOS DO FORMA

  function capturaValor(tipo: TipoInput, valor: string) {
    switch (tipo) {
      case 'nome':
        setNome(valor);
        break;

      case 'sobrenome':
        setSobrenome(valor);
        break;

      default:
        break;
    }
  }

  function enviarFormulario() {
    if (!nome || !sobrenome) {
      alert('Preencha todos os campos!');
      return;
    }

    const dadosFormulario: Pessoa = {
      nome: nome,
      sobrenome: sobrenome
    };

    // UM PARAMETRO - [] = ...lista (atual) + {}
    setLista([...lista, dadosFormulario]);

    // LIMPA MINHAS INPUTS
    setNome('');
    setSobrenome('');
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviarFormulario();
        }}
      >
        <p>Nome:</p>
        <InputStyled value={nome} onChange={(e) => capturaValor('nome', e.target.value)} />

        <p>Sobrenome:</p>
        <InputStyled
          value={sobrenome}
          onChange={(e) => capturaValor('sobrenome', e.target.value)}
        />

        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </form>

      {lista.map((item, index) => (
        <div key={index}>
          <br />
          <p>Nome: {item.nome}</p>
          <p>Sobrenome: {item.sobrenome}</p>
        </div>
      ))}
    </div>
  );
}
export default Formulario;
