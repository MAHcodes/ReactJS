import styled from "styled-components";

const PageCtrl = ({ page, setPage }) => {
  return (
    <Flex className="container">
      <p>Page: {page}</p>
      <StyledBtn
        title="Previous Page"
        onClick={() => page > 1 && setPage(page - 1)}
      >
        &#60;
      </StyledBtn>
      <StyledBtn title="Next Page" onClick={() => setPage(page + 1)}>
        &#62;
      </StyledBtn>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    flex: 0.1;
  }
`;

const StyledBtn = styled.button`
  padding: 1em 1.5em;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #ddd;
    transition: background-color 0.25s ease-in-out;
  }
`;

export default PageCtrl;
