import { useState } from "react";
import Typography from "@mui/material/Typography";
import { Divider, Grid, Paper } from "@mui/material";
import Header from "./Header";
import Body from "./Body";

export const TodoComponent = () => {
  const [todoValue, setTodoValue] = useState("");
  const [isEmpty, setEmpty] = useState(false);
  const [todoItems, setTodoItems] = useState(undefined);

  const handleTodoChange = (e) => {
    setEmpty(false);
    setTodoValue(e.target.value);
  };

  const delTodoItem = (idx) => {
    const len = todoItems.length;
    const begin = todoItems.slice(0, idx);
    const end = todoItems.slice(idx + 1, len);

    console.log(len, begin, end);
    setTodoItems([...begin, ...end]);
  };

  const handleAddTodo = (e) => {
    if (!todoValue) {
      setEmpty(true);
      return;
    }
    setTodoItems((prevTodo) => {
      if (prevTodo) {
        const myMaxInt = prevTodo[prevTodo.length - 1].id + 1;
        return [...prevTodo, { id: myMaxInt, value: todoValue }];
      } else return [{ id: 100, value: todoValue }];
    });

    setTodoValue("");
  };

  return (
    <Grid container spacing={3} flexDirection="column" alignItems="center">
      <Grid item xs={3}>
        <Typography variant="h3">Todos:</Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={3}>
            <Header
              isEmpty={isEmpty}
              todoValue={todoValue}
              handleTodoChange={handleTodoChange}
              handleAddTodo={handleAddTodo}
            />

            <Grid item xs={12}>
              <Divider flexItem />
            </Grid>
            <Body todoItems={todoItems} delTodoItem={delTodoItem} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
