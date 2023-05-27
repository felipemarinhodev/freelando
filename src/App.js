import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { Header } from "./components/Header/Header";
import { TextField } from "./components/TextField/TextField";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Typography } from "./components/Typography/Typography";

function App() {
  return (
    <ThemeProvider>
      <Styles />
      <Header />
      <Card>
        <Typography
          variant="h1"
          component="h1"
        >
          Freelando
        </Typography>
        <Typography
          variant="body"
          component="body"
        >
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Typography>

        <TextField title="Nome completo" />
      </Card>
    </ThemeProvider>
  );
}

export default App;
