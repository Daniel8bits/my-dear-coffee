import React from 'react';

import TopMenu from './modules/components/menu/TopMenu'
import Footer from './modules/components/footer/Footer'

import ViewManager from './modules/layouts/ViewManager'
import ScrolledViewContainer from './modules/layouts/ScrolledViewContainer'

import Home from './modules/pages/Home'
import Kinds from './modules/pages/Kinds'
import Benefits from './modules/pages/Benefits'
import Drinks from './modules/pages/Drinks'

import {BrowserRouter} from 'react-router-dom'

import './styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <ScrolledViewContainer height='100vh'>
        <TopMenu  />
        <ViewManager  
          items={[
            {item: <Home  />,     id: ""        },
            {item: <Kinds  />,    id: "kinds"   },
            {item: <Benefits  />, id: "benefits"},
            {item: <Drinks  />,   id: "drinks"  }
          ]}
        />
        <Footer  />
      </ScrolledViewContainer>
    </BrowserRouter>
  );
};

export default App;
