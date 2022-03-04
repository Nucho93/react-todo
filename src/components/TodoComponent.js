import { useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

export const TodoComponent = () => {
  const [todoValue, setTodoValue] = useState("");
  const [isEmpty, setEmpty] = useState(false);
  const [todoItems, setTodoItems] = useState(undefined);
  console.log(todoValue);

  const handleTodoChange = (e) => {
    setEmpty(false);
    setTodoValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (!todoValue) {
      setEmpty(true);
      return;
    }
    setTodoItems((prevTodo) => {
      if (prevTodo) return [...prevTodo, todoValue];
      else return [todoValue];
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>Todos:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={3}>
            <TextField
              error={isEmpty}
              id="outlined-basic"
              label="Todo"
              variant="outlined"
              value={todoValue}
              onChange={handleTodoChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button onClick={handleAddTodo}>Add todo</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {todoItems &&
          todoItems.map((item) => <Typography key={item}>{item}</Typography>)}

        {(!todoItems || todoItems.length == 0) && <>Items not found</>}
      </Grid>
    </Grid>
  );
};
