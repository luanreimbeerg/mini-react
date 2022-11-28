import Dialog from "@mui/material/Dialog";
import style from "styled-components";
import { styled } from "@mui/material/styles";

export const Container = style.div`
  border: 4px solid;
  padding: 0.75rem;
  border-radius: 8px;
  margin-block-end: 0.75rem;

  img {
    width: 252px;
    height: 252px;
  }
`;

export const DialogContainer = styled(Dialog)(({ theme }) => ({
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
