import React, { useEffect } from 'react';
import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { ACTION } from '../../model';
import { useState } from 'react';

const Keywords = ({ entities, dispatch }) => {
  const [add, setAdd] = useState(false);
  const [newKeyword, setNewKeyword] = useState('');
  const handleRemove = (value) => {
    dispatch({ type: ACTION.REMOVE_KEYWORD, payload: value });
  };

  const handleAdd = (e) => {
    dispatch({ type: ACTION.ADD_KEYWORD, payload: newKeyword });
    setNewKeyword('');
    setAdd(false);
  };
  useEffect(() => {
    console.log(entities);
  }, [entities]);

  return (
    <div>
      {entities && (
        <List>
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
                <ListItemText primary={value} />
              </ListItem>
            );
          })}
        </List>
      )}
      {!entities && <h2>Search for Facts</h2>}
      {add && (
        <OutlinedInput
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleAdd}
                edge="end"
              >
                <AddIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Keyword"
        />
      )}
      <AddIcon onClick={() => setAdd(true)} />
    </div>
  );
};

export default Keywords;
