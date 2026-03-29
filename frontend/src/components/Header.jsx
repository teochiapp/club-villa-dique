import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

// ── Styled Components ──────────────────────────────────────
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-h);
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }
`;

const LogoText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
  letter-spacing: -0.02em;

  @media (max-width: 640px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const NavItem = styled(NavLink)`
  padding: 0.45rem 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: var(--transition);

  &:hover {
    color: var(--color-white);
    background: var(--color-border);
  }

  &.active {
    color: var(--color-primary-light);
    background: rgba(39, 168, 90, 0.1);
  }
`;

// ── Component ──────────────────────────────────────────────
function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo to="/">
          <img src="/isologo.png" alt="Club Deportivo y Biblioteca Villa del Dique" />
          <LogoText>Club Villa del Dique</LogoText>
        </Logo>

        <Nav>
          <NavItem to="/" end>Inicio</NavItem>
          <NavItem to="/deportes">Deportes</NavItem>
          <NavItem to="/noticias">Noticias</NavItem>
          <NavItem to="/institucional">Institucional</NavItem>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
