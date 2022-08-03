import React, { useReducer } from 'react';
import api from './api';
import Keywords from './components/keywords/Keywords';
import Searchbar from './components/searchbar/Searchbar';
import { ACTION, initialState, reducer, STATUS } from './model';
import './Popup.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Claims from './components/claims/Claims';
import QueryButtons from './components/queryButtons/QueryButtons';

const Popup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async () => {
    const { data } = await api.post('/factcheck', {
      texts: state.keywords,
    });

    dispatch({ type: ACTION.SET_CLAIMS, payload: data.claims });
    // dispatch({ type: ACTION.SET_STATUS, payload: STATUS.CLAIMS });
  };

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/popup.html">
              <Route
                path=""
                element={
                  <>
                    <Searchbar dispatch={dispatch} />
                    <Keywords entities={state.keywords} dispatch={dispatch} />
                    <QueryButtons
                      dispatch={dispatch}
                      keywords={state.keywords}
                    />
                  </>
                }
              ></Route>
            </Route>
            <Route
              path="/claims"
              element={<Claims claims={state.claims} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Popup;
