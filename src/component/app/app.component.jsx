import React from 'react';
import './app.component.scss';

//  customComponents
import Header from './header/header.component';
import Main from './main/main.component';
import Footer from './footer/footer.component';


const App = ({ match }) => {
    return (
        <div className='APP'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
