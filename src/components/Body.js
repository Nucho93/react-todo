import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Body = ({ todoItems, delTodoItem }) => {
  return (
    <Grid item xs={12}>
      {todoItems &&
        todoItems.map((item, idx) => (
          <Grid
            container
            key={item.id}
            justifyContent="space-between"
            paddingTop={1}
          >
            <Grid item xs={6}>
              <Typography>{item.value}</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button
                onClick={() => delTodoItem(idx)}
                variant="contained"
                color="error"
                endIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        ))}

      {(!todoItems || todoItems.length == 0) && (
        <Typography>Items not found</Typography>
      )}
    </Grid>
  );
};

export default Body;
