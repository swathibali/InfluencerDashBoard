
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { AppDetailsContext } from './contexts/AppDetailsContext';
import data from './data';
import MyCampaigns from './pages/MyCampaigns';

const Layout = ({ children }) => {

  const [appDetails, setAppDetails] = useState(data?.socialmedia?.instagram);
  const value = { appDetails, setAppDetails };

  return (
    <AppDetailsContext.Provider value={value}>

      <div className='app'>

        <div className="header"> <Header /></div>
        <div className="sidebar"><Sidebar /> </div>
        {children}
      </div>
    </AppDetailsContext.Provider>
  )
}
function App() {
  return (
    <Router>

      <Route path='/' exact>
        <Layout>
          <MyCampaigns />
        </Layout>

      </Route>

    </Router>
  );
}

export default App;
