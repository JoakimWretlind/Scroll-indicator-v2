import { GlobalStyle } from './globalStyle';
import { Home, About, Work, Portfolio, Contact } from './components/index';
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator';

function App() {
  return (
    <>
      <ScrollIndicator />
      <GlobalStyle />
      <Home />
      <About />
      <Work />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
