import styled from "styled-components";

const Section = ({title, desc, brk}) => {
  return (
    <section>
      {brk ? <H3>{title}</H3> : <P>{title}</P>}
      {brk && <br />}
      <P>{desc}</P>
    </section>
  );
}

const H3 = styled.h3`
  display: inline;
`

const P = styled.p`
  display: inline;
`

export default Section;
