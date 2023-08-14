import '../App.css';
import Footer from '../common/templates/footer';
import Header from '../common/templates/header';
import Route from './routes';
import Messages from '../common/msg/messages';


function App() {
  return (
    <div className='content-wrapper'>
      <Header/>
        <div className='card-body'>
          <Route/>
        </div>
          <Footer/>
          <Messages/>
    </div>
  );
}

export default App;
