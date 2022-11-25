import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { CardCharacter } from "../../components/CardCharacter";
import { characterList, Result } from "../../types/character.model";

import { Container } from "./styles";

export default function Character() {
  const [characters, setCharacters] = useState<Result[]>([]);

  useEffect(() => {
    api.get<characterList>(`/character`).then((response) => {
      setCharacters(response.data.results);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <h1>Character</h1>
      <div className="content__list">
        {characters.map((charac) => (
          <CardCharacter
            key={charac.id}
            name={charac.name}
            image={charac.image}
          />
        ))}
      </div>
    </Container>
  );
}
