import { Box, Typography, Paper, Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";

export const Modals = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box>
          <Paper>
            <Typography>Modal opened</Typography>
            <Button onClick={() => setOpen(false)} color="secondary">
              Close
            </Button>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};
