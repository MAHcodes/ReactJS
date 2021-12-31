import styled from "styled-components";

const Section = ({ title, desc, brk, warning }) => {
  return (
    <StyledSection>
      {brk ? <H3>{title}</H3> : <H4>{title}</H4>}
      {brk && <br />}
      <span>&#9;&nbsp;</span>
      {!warning ? <span>{desc}</span> : <Warn>{desc}</Warn>}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  padding: 1rem;

  &:nth-child(even) {
    background-color: #ddd;
  }
  &:nth-child(odd) {
    background-color: #eee;
  }
`;

const H3 = styled.h3`
  display: inline-block;
  margin-block: 0.4em;
`;

const H4 = styled.h4`
  display: inline-block;
  margin-block: 0.4em;
`;

const Warn = styled.span`
  color: red;
`;

export default Section;
