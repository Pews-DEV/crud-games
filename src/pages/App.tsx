import { useState } from "react";
import AddUserForm from "../components/AddUserForm";
import List from "../components/List";
import Navbar from "../components/Navbar";
import { Container, MainContainer } from "../styles/Containers";
import GlobalStyles from "../styles/globals";

const App = () => {
  const usersData = [
    {
      id: 1,
      titulo: "Lost Ark",
      descricao:
        "Embarque numa odisseia pela Arca Perdida num mundo vasto e vibrante: explore novas terras, procure tesouros perdidos e teste-se num combate de ação emocionante neste RPG grátis para jogar. ",
      desenvolvedor: "Smilegate RPG",
      publicadora: "Amazon Games",
      data: "11/fev./2022",
    },
    {
      id: 2,
      titulo: "Lost Ark",
      descricao:
        "Embarque numa odisseia pela Arca Perdida num mundo vasto e vibrante: explore novas terras, procure tesouros perdidos e teste-se num combate de ação emocionante neste RPG grátis para jogar. ",
      desenvolvedor: "Smilegate RPG",
      publicadora: "Amazon Games",
      data: "11/fev./2022",
    },
    {
      id: 3,
      titulo: "Lost Ark",
      descricao:
        "Embarque numa odisseia pela Arca Perdida num mundo vasto e vibrante: explore novas terras, procure tesouros perdidos e teste-se num combate de ação emocionante neste RPG grátis para jogar. ",
      desenvolvedor: "Smilegate RPG",
      publicadora: "Amazon Games",
      data: "11/fev./2022",
    },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user: {
    id: any;
    titulo: string;
    descricao: string;
    desenvolvedor: string;
    publicadora: string;
    data: string;
  }) => {
    user.id = usersData.length + 1;
    setUsers([...usersData, user]);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <MainContainer>
          {/*<AddUserForm addUser={addUser} />*/}
          <List users={users} />
        </MainContainer>
      </Container>
    </>
  );
};

export default App;
