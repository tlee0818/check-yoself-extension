import React from 'react';
import { TextareaAutosize, Button } from '@mui/material';
import { useState } from 'react';
import api from '../../api';
import { ACTION } from '../../model';
import './searchbar.css';

const Searchbar = ({ dispatch }) => {
  const [comment, setComment] = useState('');
  const handleSubmit = async (e) => {
    const { data } = await api.get('/getEntities', {
      params: { text: comment },
    });

    dispatch({ type: ACTION.SET_KEYWORDS, payload: data });
  };

  const handleChange = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <TextareaAutosize
        maxRows={4}
        aria-label="maximum height"
        placeholder="Your Comment"
        value={comment}
        onChange={handleChange}
        style={{ width: 350, fontSize: 20, fontFamily: 'BlinkMacSystemFont' }}
      />
      <Button
        variant="text"
        onClick={handleSubmit}
        style={{ fontFamily: 'BlinkMacSystemFont' }}
      >
        Get Keywords
      </Button>
    </div>
  );
};

export default Searchbar;
