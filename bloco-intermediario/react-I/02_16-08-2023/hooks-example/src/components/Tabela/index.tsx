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
  handleView: (id: string) => void;
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
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
            <TableHeader>Nascimento</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {props.data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.sobrenome}</TableCell>
              <TableCell>{item.nascimento}</TableCell>
              <TableCellActions>
                <ButtonStyled color="#a6a6a6" onClick={() => props.handleView(item.id)}>
                  Ver mais
                </ButtonStyled>
                <ButtonStyled color="#2329cd" onClick={() => props.handleEdit(item.id)}>
                  Editar
                </ButtonStyled>
                <ButtonStyled color="#e90d0d" onClick={() => props.handleDelete(item.id)}>
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
