import { useState } from "react";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import { Container, Content, DialogContainer } from "./styles";
import { DialogCharacter } from "../DialogCharacter";
import { api } from "../../services/api";
import { Result } from "../../types/character.model";
import moment from "moment";

interface CardCharacterProps {
  id: number;
  name: string;
  image: string;
}

export function CardCharacter(props: CardCharacterProps) {
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState<Result>({} as Result);

  async function searchCharacterById(id: number) {
    await api.get<Result>(`/character/${id}`).then((response) => {
      setCharacter(response.data);
    });
  }

  function handleClickOpen(id: number) {
    searchCharacterById(id).catch(console.error);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function convertDate(date: Date): any {
    return moment(date).format("DD-MM-YYYY");
  }

  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <div>
        <Button variant="outlined" onClick={() => handleClickOpen(props.id)}>
          {props.name}
        </Button>

        <DialogContainer
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogCharacter id="customized-dialog-title" onClose={handleClose}>
            {character.name}
          </DialogCharacter>
          <DialogContent dividers>
            <Typography gutterBottom>
              <ul>
                <Content>
                  <label>Data criação: </label>
                  <li>{convertDate(character.created)}</li>
                </Content>

                <Content>
                  <label>Gênero: </label>
                  <li>{character.gender}</li>
                </Content>

                <Content>
                  <label>Localização: </label>
                  <li>{character.location?.name}</li>
                </Content>
              </ul>
            </Typography>
          </DialogContent>
        </DialogContainer>
      </div>
    </Container>
  );
}
