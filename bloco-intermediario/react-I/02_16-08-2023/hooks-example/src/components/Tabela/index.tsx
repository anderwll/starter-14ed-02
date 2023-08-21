import ButtonStyled from '../ButtonStyled';
import { Pessoa } from '../Formulario';
import TableCell from './TableCell';
import TableCellActions from './TableCellActions';
import TableContainer from './TableContainer';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableStyled from './TableStyled';

interface TableProps {
  data: Array<Pessoa>;
}

function verMais(dados: Pessoa) {
  alert(`Detalhes de ${dados.nome}`);
}

function Tabela(props: TableProps) {
  return (
    <TableContainer>
      <TableStyled>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Sobrenome</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.sobrenome}</TableCell>
              <TableCellActions>
                <ButtonStyled color="#a6a6a6" onClick={() => verMais(item)}>
                  Ver mais
                </ButtonStyled>
                <ButtonStyled color="#2329cd" onClick={() => verMais(item)}>
                  Editar
                </ButtonStyled>
                <ButtonStyled color="#e90d0d" onClick={() => verMais(item)}>
                  Apagar
                </ButtonStyled>
              </TableCellActions>
            </TableRow>
          ))}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
}

export default Tabela;
