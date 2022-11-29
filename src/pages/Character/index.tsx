import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { CardCharacter } from "../../components/CardCharacter";
import { characterList, Result } from "../../types/character.model";

import { Container } from "./styles";

export default function Character() {
  const [characters, setCharacters] = useState<Result[]>([]);

  function searchCharacters() {
    api.get<characterList>(`/character`).then((response) => {
      setCharacters(response.data.results);
    });
  }

  useEffect(() => {
    searchCharacters();
  }, []);

  return (
    <Container>
      <h1>Character</h1>
      <div className="content__list">
        {characters.map((charac) => (
          <CardCharacter
            key={charac.id}
            id={charac.id}
            name={charac.name}
            image={charac.image}
          />
        ))}
      </div>
    </Container>
  );
}
