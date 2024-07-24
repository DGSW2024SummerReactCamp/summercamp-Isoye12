import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const ChildComp = () => {
  return (
    <div>Child Components</div>
  );
};

const App = () => {
  return (
    <div classNmae="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
};

export default App;
