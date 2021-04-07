import React, {useEffect} from 'react';

import Header from './modules/components/header/Header';
import Footer from './modules/components/footer/Footer'

import ViewManager from './modules/layouts/ViewManager'
import ScrolledViewContainer from './modules/layouts/ScrolledViewContainer'

import Home from './modules/pages/Home'
import Kinds from './modules/pages/Kinds'
import Benefits from './modules/pages/Benefits'
import Drinks from './modules/pages/Drinks'

import {BrowserRouter} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {PageMenuActions} from './redux/PageMenu/PageMenu'

import api from './utils/api'

import './styles/main.scss'


const App = () => {

  const dispatch = useDispatch()
  const page = useSelector(state => state.pageMenu.page)

  useEffect(() => {
    let pathname = document.location.pathname
    if(pathname !== api.pages[page].pathname){
      for(let i = 1; i < api.pages.length; i++){
        if(pathname === api.pages[i].pathname){
          dispatch(PageMenuActions.setPage(i))
          break
        }
      }
    }
  });

  return (
    <BrowserRouter>
      <ScrolledViewContainer height='100vh'>
        <Header page={page}  />
        <main>
          <ViewManager  
            items={[
              {item: <Home      page={api.pages[0].content}  />, id: api.pages[0].pathname},
              {item: <Kinds     page={api.pages[1].content}  />, id: api.pages[1].pathname},
              {item: <Benefits  page={api.pages[2].content}  />, id: api.pages[2].pathname},
              {item: <Drinks    page={api.pages[3].content}  />, id: api.pages[3].pathname}
            ]}
          />
        </main>
        <Footer  />
      </ScrolledViewContainer>
    </BrowserRouter>
  );
};

export default App;
