import React from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import api from '../../api';
import { ACTION } from '../../model';

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
      <TextField
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        value={comment}
        onChange={handleChange}
      />
      <Button variant="text" onClick={handleSubmit}>
        Get Keywords
      </Button>
    </div>
  );
};

export default Searchbar;
