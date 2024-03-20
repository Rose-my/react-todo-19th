import { useState } from 'react';
import styled from 'styled-components';

export default function EditModal(props) {
  const { handleOpenModal } = props;
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() !== '') {
      handleList(input);
      closeModal();
    } else {
      alert('Please enter your TODO');
    }
  }

  function handleList(input) {
    const newSchedule = {
      id: Date.now(),
      description: input,
      schedule: true,
    };
    console.log('새로 추가한 스케줄: ', newSchedule);
    handleLocalStorage(newSchedule);
    console.log('로컬', localStorage.getItem('testify'));
  }

  function handleLocalStorage(newSchedule) {
    const savedList = JSON.parse(localStorage.getItem('testify')) || [];
    savedList.push(newSchedule);
    localStorage.setItem('testify', JSON.stringify(savedList));
  }

  function closeModal() {
    setInput('');
    handleOpenModal();
  }

  return (
    <Background>
      <ModalBox>
        <ModalTitle>Things to be done</ModalTitle>
        <ModalForm>
          <label>Description</label>
          <input type="text" value={input} onChange={handleInput} />
        </ModalForm>
        <ModalButton>
          <SaveButton type="submit" onClick={handleSubmit}>
            SAVE
          </SaveButton>
          <CloseButton type="button" onClick={closeModal}>
            CLOSE
          </CloseButton>
        </ModalButton>
      </ModalBox>
    </Background>
  );
}

const Background = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 70%);
`;

const ModalBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30%;
  padding: 0 0 1rem;
  border-radius: 1rem 1rem 0 0;
  background-color: rgb(169 208 194);
`;

const ModalTitle = styled.h2`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

const ModalForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  gap: 1rem;

  > label {
    border: 0;
    color: black;
    font-size: 1.2rem;
  }

  > input {
    display: block;
    align-items: center;
    width: 100%;
    height: 2rem;
    border: 3px solid black;
    border-radius: 0.2rem;
  }
`;

const ModalButton = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`;

const SaveButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: black;
  font-family: 'omyu_pretty';
  color: white;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: white;
  font-family: 'omyu_pretty';
  color: black;
  font-size: 1.2rem;
`;
