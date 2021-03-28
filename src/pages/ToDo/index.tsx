import React from 'react';

import { Container, Content } from './styles';

const ToDo: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>any.do</h1>
          <p>Nunca foi tão fácil controlar suas tarefas</p>
        </div>

        <main>
          <h1>TO-DO LIST</h1>

          <input placeholder="Criar um novo to-do" />
        </main>


      </Content>
    </Container>
  );
};

export default ToDo;
