import { Pessoa } from '../../pages/Home';
import ButtonStyled from '../ButtonStyled';
import InputStyled from '../InputStyled';
import DivForm from './DivForm';
import FormStyled from './FormStyled';

interface FormularioProps {
  form: Pessoa;
  enviarFormulario: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// formulario({nome, sobrenome}) => formulario.nome, formulario.sobrenome

function Formulario(props: FormularioProps) {
  return (
    <div>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();
          props.enviarFormulario();
        }}
      >
        <DivForm>
          <p>Nome:</p>
          <InputStyled name="nome" value={props.form.nome} onChange={props.handleChange} />
        </DivForm>

        <DivForm>
          <p>Sobrenome:</p>
          <InputStyled
            name="sobrenome"
            value={props.form.sobrenome}
            onChange={props.handleChange}
          />
        </DivForm>

        <DivForm>
          <p>Nascimento:</p>
          <InputStyled
            name="nascimento"
            type="date"
            value={props.form.nascimento}
            onChange={props.handleChange}
          />
        </DivForm>

        <DivForm>
          <ButtonStyled color="#5bf54c" type="submit">
            Enviar
          </ButtonStyled>
        </DivForm>
      </FormStyled>
    </div>
  );
}
export default Formulario;
