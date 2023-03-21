import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { GlobalProvider } from './Components/GlobalContex';
import List from './Components/List';
import Create from './Components/Create';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
