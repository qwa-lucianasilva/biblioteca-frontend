import { Card } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Card.Root width="200px">
        <Card.Body>
          <Card.Title mt="2">150</Card.Title>
          <Card.Description>
            Livros emprestados.
          </Card.Description>
        </Card.Body>
      </Card.Root>
       <Card.Root width="200px">
        <Card.Body>
          <Card.Title mt="2">360</Card.Title>
          <Card.Description>
            Livros disponíveis.
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </>
  );
}

export default App;
