import { isFuture } from 'date-fns';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Feedback from '../components/Feedback';
import { CorFeedback } from '../components/Feedback/FeedbackStyled';
import Formulario from '../components/Formulario';
import Tabela from '../components/Tabela';

export interface Pessoa {
  id: string;
  nome: string;
  sobrenome: string;
  nascimento: string;
}

function Home() {
  const [pessoa, setPessoa] = useState<Pessoa>({
    id: '',
    nome: '',
    sobrenome: '',
    nascimento: ''
  });
  const [lista, setLista] = useState<Pessoa[]>(JSON.parse(localStorage.getItem('lista') ?? '[]')); // ARMAZENAR OS DADOS DO FORMA
  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [cor, setCor] = useState<CorFeedback>('');

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  function enviarFormulario() {
    if (!pessoa.nome || !pessoa.sobrenome) {
      alerta('Preencha todos os campos!', 'warning');
      return;
    }

    if (pessoa.nome.length < 3) {
      alerta('Nome deve conter mais que 3 caracteres.', 'warning');
      return;
    }

    if (pessoa.sobrenome.length < 3) {
      alerta('Sobrenome deve conter mais que 3 caracteres.', 'warning');
      return;
    }

    const data = new Date(pessoa.nascimento);
    const dataFutura = isFuture(data);

    if (dataFutura) {
      alerta('Não é possivel cadastrar uma data futura.', 'warning');
      return;
    }

    const dadosFormulario: Pessoa = {
      id: uuidv4(),
      nome: pessoa.nome,
      sobrenome: pessoa.sobrenome,
      nascimento: pessoa.nascimento
    };

    // UM PARAMETRO - [] = ...lista (atual) + {}
    setLista([...lista, dadosFormulario]);

    // LIMPA MINHAS INPUTS
    setPessoa({
      id: '',
      nome: '',
      sobrenome: '',
      nascimento: ''
    });

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPessoa({ ...pessoa, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>Formulário | Cadastro de Pessoas</h1>

      <Formulario form={pessoa} enviarFormulario={enviarFormulario} handleChange={handleChange} />

      <Tabela data={lista} handleView={verMais} handleEdit={verMais} handleDelete={verMais} />

      <Feedback show={aberto} texto={mensagem} cor={cor} />
    </>
  );
}

export default Home;
