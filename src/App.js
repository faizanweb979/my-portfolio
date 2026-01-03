import './App.css';
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import { StickyScrollRevealDemo } from './components/Skills';

function App() {
  return (
    <div className="">
      <Home/> 
      <StickyScrollRevealDemo/>
      <PageTwo/>  
      <PageThree/> 
    </div>
  );
}

export default App;
