import Dates from './Dates';
import styled from 'styled-components';

import { useState } from 'react';

export default function Edit(props) {
  const { list, setList } = props;
  const [showSchedule, setShowSchedule] = useState(true);
  const [showDone, setShowDone] = useState(true);

  function handleTrash(id) {
    const updatedList = list.filter((data) => data.id !== id);
    setList(updatedList);
    localStorage.setItem('testify', JSON.stringify(updatedList));
  }

  function handleStatus(id) {
    const updatedList = list.map((data) => {
      if (data.id === id) {
        return {
          ...data,
          schedule: !data.schedule,
        };
      }
      return data;
    });
    setList(updatedList);
    localStorage.setItem('testify', JSON.stringify(updatedList));
  }

  function handleFilter(e) {
    const { name, checked } = e.target;
    if (name === 'schedule') {
      setShowSchedule(checked);
    } else if (name === 'done') {
      setShowDone(checked);
    }
  }

  return (
    <Section>
      <Dates />
      <ListContainer>
        <CheckBox>
          <Label $checked={showSchedule}>
            <Input name="schedule" type="checkbox" onChange={handleFilter} />
            SCHEDULE
          </Label>
          <Label $checked={showDone}>
            <Input name="done" type="checkbox" onChange={handleFilter} />
            DONE
          </Label>
        </CheckBox>
        <ListBox>
          {list.map((data) => {
            if ((showSchedule && data.schedule) || (showDone && !data.schedule)) {
              return (
                <Lists key={data.id}>
                  <CurrentStatus type="button" $schedule={data.schedule} onClick={() => handleStatus(data.id)}>
                    {data.schedule ? 'SCHEDULE' : 'DONE'}
                  </CurrentStatus>
                  <Description>{data.description}</Description>
                  <TrashButton type="button" onClick={() => handleTrash(data.id)}>
                    TRASH
                  </TrashButton>
                </Lists>
              );
            }
            return null;
          })}
        </ListBox>
      </ListContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.section`
  width: 100%;
`;

const CheckBox = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  margin-bottom: 1rem;
  padding: 0 3.2rem;
  border-bottom: none;
  background-color: white;
  font-weight: 400;
`;

const Label = styled.label`
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.commonbg};
  border-radius: 0.5rem;
  color: ${({ theme, $checked }) => ($checked ? theme.colors.white : theme.colors.commonbg)};
  background-color: ${({ theme, $checked }) => ($checked ? theme.colors.commonbg : theme.colors.white)};
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const ListBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  overflow: hidden scroll;
  margin-bottom: 1rem;
  height: 45vh;
  padding: 0 3.2rem;

  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #2f3542;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const Lists = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 3.2rem;
  border-radius: 0.2rem;
  background-color: rgb(250 242 242);
  font-size: 1.5rem;
`;

const CurrentStatus = styled.h2`
  width: 5rem;
  color: ${({ theme, $schedule }) => ($schedule ? theme.colors.schedule : theme.colors.done)};
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

const TrashButton = styled.button`
  padding: 0.3rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.commonbg};
  border-radius: 0.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.commonbg};
  ${({ theme }) => theme.fonts.eng};
`;
