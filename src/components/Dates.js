import styled from "styled-components";

export default function Dates() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const date = `${year}.${month}.${day}.`;

  return <DateBox>{date}</DateBox>;
}

const DateBox = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
