import logo from './logo.svg';
import './App.css';
import {MyNAVE} from './component/MyNAVE.jsx';
import {MySlide} from './component/MySlider.jsx';
import {MyCard} from './component/MyCard.jsx';
import {MyFooter} from './component/MyFooter.jsx';

function App() {
  return (
    <div ClassName="App">
      <MyNAVE />
      
      <MySlide />
      <div className="container">
            <div className="row">
               <div className="p-4 col-3">
                  <MyCard />
               </div>
               
               <div className="p-4 col-3">
               <MyCard />
               </div>

               <div className="p-4 col-3">
               <MyCard />
               </div>
               <div className="p-4 col-3">
               <MyCard />
               </div>
               <div className="p-4 col-3">
               <MyCard />
               </div>
               <div className="p-4 col-3">
               <MyCard />
               </div>
               <div className="p-4 col-3">
               <MyCard />
               </div>
               <div className="p-4 col-3">
               <MyCard />
               </div>

            </div>
         </div>
      <MyFooter />
    
    </div>
  );
}

export default App;
