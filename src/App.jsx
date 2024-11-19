import Player from './components/Player.jsx';
import TImerChallenge from './components/TImerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TImerChallenge title="Easy" targetTime={1}/>
      <TImerChallenge title="Not Easy" targetTime={5}/>
      <TImerChallenge title="Getting Tough" targetTime={10}/>
      <TImerChallenge title="Pros Only" targetTime={20}/>
    </>
  );
}

export default App;
