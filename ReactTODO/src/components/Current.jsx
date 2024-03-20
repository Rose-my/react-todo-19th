import styled from "styled-components";

export default function Current() {
  return (
    <Section>
      <Header>Current</Header>
      <DetailBox>
        <Text>SCHEDULE</Text>
        <span>10</span>
        <Text>DONE</Text>
        <span>10</span>
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
