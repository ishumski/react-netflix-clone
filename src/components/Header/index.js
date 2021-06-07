import { Wrapper } from "../common/wrapper/style";
import { HeaderWrapper, Logo, NavList, NavListItem, NavListItemLink, ProfileImg, Root } from "./style";


const navItems = [
  { title: 'Home', active: true, href: '#' },
  { title: 'TV Shows', active: true, href: '#' },
  { title: 'Movies', active: true, href: '#' },
  { title: 'Latest', active: true, href: '#' },
  { title: 'My list', active: true, href: '#' },
];

const Header = () => {
  return <Root>

    <Wrapper>
      <HeaderWrapper>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
        <NavList>
          {navItems.map(navItem => (
            <NavListItem key={navItem.title}>
              <NavListItemLink active={navItem.active}>
                {navItem.title}
              </NavListItemLink>
            </NavListItem>
          )
          )}
        </NavList>
        <ProfileImg src="https://occ-0-3666-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUDLNoFrTAMPR1hLKhHfy0Tnf5VuVYazhwh6YpZbLuF70qdwyKva-qoHUgvzm6WhxI01p1VmaKsmgdTNYJGBYnU.png?r=08f" />
      </HeaderWrapper>
    </Wrapper>

  </Root>
}

export default Header;