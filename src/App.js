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
          variant="h3"
          component="h1"
        >
          Freelando
        </Typography>
      </Card>
    </ThemeProvider>
  );
}

export default App;
