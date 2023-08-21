import { useState } from 'react';
import ButtonStyled from '../ButtonStyled';
import InputStyled from '../InputStyled';
import Tabela from '../Tabela';
import DivForm from './DivForm';
import FormStyled from './FormStyled';

type TipoInput = 'nome' | 'sobrenome';

export interface Pessoa {
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
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          enviarFormulario();
        }}
      >
        <DivForm>
          <p>Nome:</p>
          <InputStyled value={nome} onChange={(e) => capturaValor('nome', e.target.value)} />
        </DivForm>

        <DivForm>
          <p>Sobrenome:</p>
          <InputStyled
            value={sobrenome}
            onChange={(e) => capturaValor('sobrenome', e.target.value)}
          />
        </DivForm>

        <DivForm>
          <ButtonStyled color="#5bf54c" type="submit">
            Enviar
          </ButtonStyled>
        </DivForm>
      </FormStyled>

      <Tabela data={lista} />
    </div>
  );
}
export default Formulario;
