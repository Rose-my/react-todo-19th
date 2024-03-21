import styled from 'styled-components';
import { useEffect, useState } from 'react';

export default function Current(props) {
  const { list } = props;
  const [countList, setCountList] = useState({ schedule: 0, done: 0 });

  useEffect(() => {
    handleCount();
  }, [list]);

  function handleCount() {
    let scheduleCount = 0;
    let doneCount = 0;

    list.forEach((data) => {
      if (data.schedule) {
        scheduleCount++;
      } else {
        doneCount++;
      }
    });
    setCountList({ schedule: scheduleCount, done: doneCount });
  }

  return (
    <Section>
      <Header>Current</Header>
      <DetailBox>
        <Text $schedule={true}>SCHEDULE</Text>
        <Count $schedule={true}>{countList.schedule}</Count>
        <Text $schedule={false}>DONE</Text>
        <Count $schedule={false}>{countList.done}</Count>
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
  background-color: ${({ theme }) => theme.colors.mainbg};
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

const Text = styled.p`
  border-radius: 2rem;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme, $schedule }) => ($schedule ? theme.colors.schedule : theme.colors.done)};
`;

const Count = styled.span`
  color: ${({ theme, $schedule }) => ($schedule ? theme.colors.schedule : theme.colors.done)};
`;
