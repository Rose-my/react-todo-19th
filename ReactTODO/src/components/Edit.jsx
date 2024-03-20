import Dates from './Dates';
import styled from 'styled-components';

export default function Edit(props) {
  const { list, setList } = props;

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

  return (
    <Section>
      <Dates />
      <ListContainer>
        <CheckBox>
          <input name="schedule" type="checkbox" id="schedule" />
          <label>SCHEDULE</label>
          <input name="done" type="checkbox" id="done" />
          <label>DONE</label>
        </CheckBox>
        <ListBox>
          {list.map((data) => (
            <Lists key={data.id}>
              <CurrentStatus type="button" $schedule={data.schedule} onClick={() => handleStatus(data.id)}>
                {data.schedule ? 'SCHEDULE' : 'DONE'}
              </CurrentStatus>
              <p>{data.description}</p>
              <TrashButton type="button" onClick={() => handleTrash(data.id)}>
                TRASH
              </TrashButton>
            </Lists>
          ))}
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

const CheckBox = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
  margin-bottom: 1rem;
  padding: 0 3.2rem;
  border-bottom: none;
  background-color: white;
  font-weight: 400;

  > input {
    display: none;
  }

  > label {
    padding: 0.3rem 1rem;
    border: 1px solid rgb(33 109 176);
    border-radius: 0.5rem;
    background-color: white;
    color: rgb(33 109 176);
  }
  /* > input:checked + label {
    background-color: rgb(33 109 176);
    color: white;
  } */
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
  width: 8rem;
  color: ${({ theme, $schedule }) => ($schedule ? theme.colors.schedule : theme.colors.done)};
  cursor: pointer;
`;

const TrashButton = styled.button`
  padding: 0.3rem 1rem;
  border: 1px solid rgb(33 109 176);
  border-radius: 0.5rem;
  background-color: white;
  color: rgb(33 109 176);
  ${({ theme }) => theme.fonts.eng};
`;
