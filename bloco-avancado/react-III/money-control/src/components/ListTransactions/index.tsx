import List from "@mui/material/List";
import ListItem from "../ListItem";
import database from "../../data/mock";
import { Container, Grid, Typography } from "@mui/material";

function ListTransactions() {
  const income = database.transactions.filter((i) => i.type === "income");
  const outcome = database.transactions.filter((i) => i.type === "outcome");

  return (
    <Container maxWidth="md">
      <Grid container paddingY={2} spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" color="initial">
            Entradas
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {income.map((i) => (
              <ListItem
                createdAt={i.createdAt}
                description={i.description}
                type={i.type}
                value={i.value}
              />
            ))}
          </List>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h6" color="initial">
            Saídas
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {outcome.map((i) => (
              <ListItem
                createdAt={i.createdAt}
                description={i.description}
                type={i.type}
                value={i.value}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListTransactions;
