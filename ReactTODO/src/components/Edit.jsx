import Dates from './Dates';
import styled from 'styled-components';

export default function Edit() {
  const test = [
    { id: 1, schedule: true, description: 'happy' },
    { id: 2, schedule: false, description: 'happy' },
    { id: 3, schedule: true, description: 'happy' },
    { id: 4, schedule: true, description: 'happy' },
    { id: 5, schedule: true, description: 'happy' },
    { id: 6, schedule: true, description: 'happy' },
    { id: 7, schedule: true, description: 'happy' },
    { id: 8, schedule: true, description: 'happy' },
    { id: 9, schedule: true, description: 'happy' },
  ];

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
          {test.map((e) => (
            <Lists key={e.id}>
              <h2>{e.schedule ? 'SCHEDULE' : 'DONE'}</h2>
              <p>{e.description}</p>
              <TrashButton type="button">TRASH</TrashButton>
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

// const Current = styled.h2`
//   width: 23rem;
// `;

// const Detail = styled.div`
//   display: flex;
//   align-items: center;
// `;

const TrashButton = styled.button`
  padding: 0.3rem 1rem;
  border: 1px solid rgb(33 109 176);
  border-radius: 0.5rem;
  background-color: white;
  color: rgb(33 109 176);
  ${({ theme }) => theme.fonts.eng};
`;
