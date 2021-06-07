import styled from 'styled-components';

export const Root = styled.div`
color: white;
background-image: url(${props => props.backgroundImage});
height: 100vh;
background-size: cover;
`;

export const Content = styled.div`
max-width: 400px;
display:flex;
flex-direction: column;
justify-content: center;
height: 100%;
padding-left: 50px;
`;

export const MovieTitle = styled.h1`
font-size: 3rem;
font-weight: 800;
margin-bottom:20px;
`;

export const MovieOverwiew = styled.p`
font-size: 1rem;
font-weight: 500;
height:100px;
`;

export const ButtonBox = styled.div`
display: flex;
flex-direction: row;
margin-top: 20px;
`;

export const PlayButton = styled.button`
display:flex;
align-items:center; 
padding: 8px 23px;
border-radius: 5px;
border: none;
outline: none;
margin-right: 10px;
background: lightgrey;
font-weight: 700; 
cursor:pointer;
color: black;
&:hover{
  background: #ffffff;
}
`;

export const MoreInfoButton = styled.button`
display:flex;
align-items:center; 
border-radius: 5px;
padding: 8px 23px;
border-radius: 5px;
border: none;
background: rgba(109, 109, 110, 0.7);
font-weight: 700; 
color: #c5c6c7;
cursor:pointer;
&:hover{
  background: rgba(109, 109, 110, 0.4);
}
`;
