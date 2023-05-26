import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Typography } from "./components/Typography/Typography";

function App() {
  return (
    <ThemeProvider>
      <Styles />
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
      </Card>
    </ThemeProvider>
  );
}

export default App;
