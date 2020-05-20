import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () =>{
    return(
        <React.Fragment>
            <Header/>
            <div className="page">
                <h1>React App With NareshiT</h1>
                <h2>My First App</h2>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));



