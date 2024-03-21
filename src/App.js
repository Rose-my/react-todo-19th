import styled from "styled-components";
import Edit from "./components/Edit";
import Current from "./components/Current";
import EditModal from "./components/EditModal";
import { useEffect, useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const initiate = JSON.parse(localStorage.getItem("testify")) || [];
    setList(initiate);
  }, []);

  function handleOpenModal() {
    setOpen((open) => !open);
  }

  return (
    <>
      <Header>TODO LIST</Header>
      <Current list={list} />
      <hr />
      <Edit list={list} setList={setList} />
      <Footer>
        <FooterButton onClick={handleOpenModal}>ADD</FooterButton>
      </Footer>
      {open && (
        <EditModal
          handleOpenModal={handleOpenModal}
          list={list}
          setList={setList}
        />
      )}
    </>
  );
}

const Header = styled.h1`
  padding: 1.5rem;
  border-bottom: 1px solid black;
  background-color: ${({ theme }) => theme.colors.mainbg};
  text-align: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.mainbg};
  text-align: center;
`;

const FooterButton = styled.button`
  width: 4rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.commonbg};
  color: white;
  ${({ theme }) => theme.fonts.eng};
`;
