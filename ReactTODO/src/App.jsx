import styled from 'styled-components';
import Edit from './components/Edit';
import Current from './components/Current';
import EditModal from './components/EditModal';
import { useEffect, useState } from 'react';

export default function App() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const initiate = JSON.parse(localStorage.getItem('testify')) || [];
    setList(initiate);
  }, []);

  function handleOpenModal() {
    setOpen((open) => !open);
  }

  return (
    <>
      <Header>TODO LIST</Header>
      <Current />
      <hr />
      <Edit list={list} />
      <Footer>
        <FooterButton onClick={handleOpenModal}>ADD</FooterButton>
      </Footer>
      {open && <EditModal handleOpenModal={handleOpenModal} list={list} setList={setList} />}
    </>
  );
}

const Header = styled.h1`
  padding: 1.5rem;
  border-bottom: 1px solid black;
  background-color: rgb(134 196 173);
  text-align: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 0;
  background-color: rgb(134 196 173);
  text-align: center;
`;

const FooterButton = styled.button`
  width: 4rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: rgb(33 109 176);
  font-family: 'omyu_pretty';
  color: white;
  font-size: 1rem;
`;
