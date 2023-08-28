import { isFuture } from 'date-fns';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ButtonStyled from '../ButtonStyled';
import Feedback from '../Feedback';
import { CorFeedback } from '../Feedback/FeedbackStyled';
import InputStyled from '../InputStyled';
import Tabela from '../Tabela';
import DivForm from './DivForm';
import FormStyled from './FormStyled';

type TipoInput = 'nome' | 'sobrenome';

export interface Pessoa {
  id: string;
  nome: string;
  sobrenome: string;
  nascimento: string;
}

// formulario({nome, sobrenome}) => formulario.nome, formulario.sobrenome

function Formulario() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [lista, setLista] = useState<Pessoa[]>([]); // ARMAZENAR OS DADOS DO FORMA
  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [cor, setCor] = useState<CorFeedback>('');

  const [nascimento, setNascimento] = useState('');

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
      alerta('Preencha todos os campos!', 'warning');
      return;
    }

    if (nome.length < 3) {
      alerta('Nome deve conter mais que 3 caracteres.', 'warning');
      return;
    }

    if (sobrenome.length < 3) {
      alerta('Sobrenome deve conter mais que 3 caracteres.', 'warning');
      return;
    }

    const data = new Date(nascimento);
    const dataFutura = isFuture(data);

    if (dataFutura) {
      alerta('Não é possivel cadastrar uma data futura.', 'warning');
      return;
    }

    console.log(dataFutura);

    const dadosFormulario: Pessoa = {
      id: uuidv4(),
      nome: nome,
      sobrenome: sobrenome,
      nascimento: nascimento
    };

    // UM PARAMETRO - [] = ...lista (atual) + {}
    setLista([...lista, dadosFormulario]);

    // LIMPA MINHAS INPUTS
    setNome('');
    setSobrenome('');

    alerta('Pessoa cadastrada com sucesso.', 'success');
  }

  function verMais(id: string) {
    const encontrado = lista.find((item) => item.id === id);

    alert(`O id é ${encontrado?.id}, ${encontrado?.nome}`);
  }

  function alerta(mensagem: string, cor: CorFeedback) {
    setAberto(true);
    setCor(cor);
    setMensagem(mensagem);

    setTimeout(() => {
      setAberto(false);
    }, 2000);
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
          <p>Nascimento:</p>
          <InputStyled
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
          />
        </DivForm>

        <DivForm>
          <ButtonStyled color="#5bf54c" type="submit">
            Enviar
          </ButtonStyled>
        </DivForm>
      </FormStyled>

      <Tabela data={lista} handleView={verMais} handleEdit={verMais} handleDelete={verMais} />

      <Feedback show={aberto} texto={mensagem} cor={cor} />
    </div>
  );
}
export default Formulario;
