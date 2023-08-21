import ButtonStyled from '../ButtonStyled';
import { Pessoa } from '../Formulario';
import TableCell from './TableCell';
import TableContainer from './TableContainer';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableStyled from './TableStyled';

interface TableProps {
  data: Array<Pessoa>;
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
              <TableCell>
                <ButtonStyled>Ver mais</ButtonStyled>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </TableStyled>
    </TableContainer>
  );
}

export default Tabela;
