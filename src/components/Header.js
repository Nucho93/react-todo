import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Header = ({ isEmpty, todoValue, handleTodoChange, handleAddTodo }) => {
  return (
    <Grid item xs={12}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={6}>
          <TextField
            error={isEmpty}
            id="outlined-basic"
            label="Todo"
            variant="outlined"
            value={todoValue}
            onChange={handleTodoChange}
          />
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleAddTodo}>Add todo</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
