import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { Container } from "./styles";
import { DialogCharacter } from "../DialogCharacter";

interface CardCharacterProps {
  name: string;
  image: string;
}
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    "min-width": theme.spacing(43),
  },
}));

export function CardCharacter(props: CardCharacterProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          {props.name}
        </Button>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogCharacter id="customized-dialog-title" onClose={handleClose}>
            Character Details
          </DialogCharacter>
          <DialogContent dividers>
            <Typography gutterBottom></Typography>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </Container>
  );
}
