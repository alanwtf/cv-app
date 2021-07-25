import './App.css';
import PersonalInfo from './components/PersonalInfo.js';
import Experience from './components/Experience.js';
function App() {
  return (
    <div id="app">
      <PersonalInfo />
      <Experience title="Experience" />
      <Experience title="Studies" />
    </div>
  );
}

export default App;
