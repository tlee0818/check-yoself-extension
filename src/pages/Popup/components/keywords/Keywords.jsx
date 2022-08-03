import React, { useEffect } from 'react';
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  OutlinedInput,
  InputAdornment,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ACTION } from '../../model';
import { useState } from 'react';
import './keywords.css';

const Keywords = ({ entities, dispatch }) => {
  const [newKeyword, setNewKeyword] = useState('');
  const handleRemove = (value) => {
    dispatch({ type: ACTION.REMOVE_KEYWORD, payload: value });
  };

  const handleAdd = (e) => {
    dispatch({ type: ACTION.ADD_KEYWORD, payload: newKeyword });
    setNewKeyword('');
  };
  useEffect(() => {
    console.log(entities);
  }, [entities]);

  return (
    <div>
      {entities && (
        <div className="keyword-list">
          <List style={{ width: 350 }} className="keyword-list">
            {entities.map((value, i) => {
              return (
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleRemove(value)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={value}
                    style={{ fontFamily: 'BlinkMacSystemFont' }}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
      {!entities && <h2>Search for Facts</h2>}
      <OutlinedInput
        value={newKeyword}
        onChange={(e) => setNewKeyword(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleAdd} edge="end">
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
        style={{ fontFamily: 'BlinkMacSystemFont', width: 350, height: 50 }}
      />
    </div>
  );
};

export default Keywords;
