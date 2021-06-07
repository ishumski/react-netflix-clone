import styled from 'styled-components';

export const Root = styled.div`
color: #ffffff;
`;

export const RowTitle = styled.h2`
color: #ffffff;
`;

export const Arrow = styled.div`
top: 0;
height: 100%;
width: 80px;
display: flex;
align-items:center;
justify-content: center;
cursor: pointer;
color: transparent;

&:hover {
  background: rgba(20,20,20,0.5 );
  transition: 400ms all ease-in-out;
  color: #ffffff;

}
`;


export const ArrowRight = styled(Arrow)`
position: absolute;
right: 0;

`;
export const ArrowLeft = styled(Arrow)`
position: absolute;
left: 0;
`;

export const RowSlider = styled.div`
position: relative;
&:hover ${Arrow} {
  color: #ffffff;
  transition: 400ms all ease-in-out;
}
`;

export const RowPosters = styled.div`
display:flex;
overflow-y: hidden;
overflow-x: hidden;
scroll-behavior: smooth;
&::webkit-scrollbar {
  display: none;
}
`;

export const RowPoster = styled.img`
max-height: 144px;
object-fit: contain;
border-radius: 5px;
margin-right: 10px;
`;


