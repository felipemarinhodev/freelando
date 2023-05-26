import { Card } from "./components/Card/Card";
import { Styles } from "./components/GlobalStyles/Styles";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Styles />
      <Card>
        <h1>Freelando</h1>
      </Card>
    </ThemeProvider>
  );
}

export default App;
