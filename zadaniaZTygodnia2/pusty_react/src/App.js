
import ClickBait from './ClickbaitApp';
import Timer from './Timer';
import UUIDGenerator from './UUIDGenerator';

const App = () => {
  return (
    <div>
    <div className='zadanie_1'>
      <ClickBait/>
    </div>
    <div className='zadanie_2'>
      <UUIDGenerator/>
    </div>
    <div>
      <Timer/>
    </div>
    </div>
  );
}

export default App;
