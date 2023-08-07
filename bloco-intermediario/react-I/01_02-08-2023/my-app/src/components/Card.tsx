import Paper from "./Paper";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

function Card(props: CardProps) {
  return (
    <Paper>
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </Paper>
  );
}

export default Card;
