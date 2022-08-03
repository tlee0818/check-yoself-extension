import React from 'react';
import { Link } from 'react-router-dom';
import './queryButtons.css';
import { Button } from '@mui/material';

import api from '../../api';
import { ACTION } from '../../model';

const QueryButtons = ({ dispatch, keywords }) => {
  const handleSubmit = async () => {
    const { data } = await api.post('/factcheck', {
      texts: keywords,
    });

    dispatch({ type: ACTION.SET_CLAIMS, payload: data.claims });
    // dispatch({ type: ACTION.SET_STATUS, payload: STATUS.CLAIMS });
  };
  const handleReset = async () => {
    dispatch({ type: ACTION.SET_KEYWORDS, payload: [] });
    // dispatch({ type: ACTION.SET_STATUS, payload: STATUS.CLAIMS });
  };
  return (
    <div>
      <Button
        variant="text"
        onClick={handleReset}
        style={{ fontFamily: 'BlinkMacSystemFont', color: 'red' }}
      >
        Reset
      </Button>
      <Link
        to="/claims"
        className={keywords.length === 0 ? 'disabled-link link' : 'link'}
      >
        <Button
          variant="text"
          onClick={handleSubmit}
          disabled={keywords.length === 0}
          style={{ fontFamily: 'BlinkMacSystemFont' }}
        >
          Factcheck
        </Button>
      </Link>
    </div>
  );
};

export default QueryButtons;
