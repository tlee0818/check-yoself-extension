import { Button } from '@mui/material';
import React, { createContext, useReducer } from 'react';
import logo from '../../assets/img/logo.svg';
import api from './api';
import Keywords from './components/keywords/Keywords';
import Searchbar from './components/searchbar/Searchbar';
import { initialState, reducer } from './model';
import './Popup.css';

const StateContext = createContext();
const DispatchContext = createContext();

const Popup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async () => {
    const { data } = await api.post('/factcheck', {
      texts: state.keywords,
    });

    dispatch({ type: ACTION.SET_CLAIMS, payload: data.claims });
  };

  return (
    <div className="App">
      <Searchbar dispatch={dispatch} />
      <Keywords entities={state.keywords} dispatch={dispatch} />

      <Button variant="text" onClick={handleSubmit}>
        Factcheck
      </Button>
    </div>
  );
};

export default Popup;
