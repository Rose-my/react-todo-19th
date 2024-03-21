import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Current(props) {
  const { list } = props;
  const [countList, setCountList] = useState([]);

  function handleCount() {
    list.map((data) => {
      setCountList({ schedule: count number of data.schedule, done: count number of data.done });
    });
  }

  useEffect(() => {
    handleCount();
  }, []);

  return (
    <Section>
      <Header>Current</Header>
      <DetailBox>
        <Text>SCHEDULE</Text>
        <span>{countList.schedule}</span>
        <Text>DONE</Text>
        <span>{countList.done}</span>
      </DetailBox>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 1rem 3rem;
  padding: 1rem;
  border: 3px solid black;
  border-radius: 0.7rem;
  background-color: rgb(134 196 173);
`;

const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

const DetailBox = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin: 0.7rem;
`;

const Text = styled.span`
  display: inline-block;
  border-radius: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
