import styled from 'styled-components';

export const Root = styled.header`
position: fixed;
top:0;
width:100%;
display: flex;
padding:10px 50px;
box-sizing: border-box;
`;

export const Logo = styled.img`
width:165px;
`;

export const NavList = styled.ul`
display: flex;
align-items: center;
list-style-type: none;
padding:0;
margin:0;
flex-grow:1;
`;

export const NavListItem = styled.li`
margin-left: 15px;
`;

export const NavListItemLink = styled.a`
cursor:pointer;
text-decoration:none;
color: #e5e5e5;
transition: 0.5s ease-in-out color;

/*bug */
${(props) => (
    props.active
      ? `
    color: #ffffff;
cursor: default;
font-weight: 700;
`
      : `&:hover{
    color: #b3b3b3;
}`)}
`;

export const ProfileImg = styled.img``;

export const HeaderWrapper = styled.div`
display: flex;

`;

