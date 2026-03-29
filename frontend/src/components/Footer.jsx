import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ── Styled Components ──────────────────────────────────────
const StyledFooter = styled.footer`
  background: #080c10;
  border-top: 1px solid var(--color-border);
  padding: 3.5rem 1.5rem 1.5rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const Brand = styled.div``;

const FooterLogo = styled.img`
  width: 44px;
  height: 44px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const Hashtag = styled.p`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--color-accent);
`;

const ColTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: 0.75rem;
`;

const LinksCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  transition: var(--transition);

  &:hover {
    color: var(--color-primary-light);
  }
`;

const InfoCol = styled.div``;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.7;
`;

const Bottom = styled.div`
  max-width: 1200px;
  margin: 1.5rem auto 0;
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-align: center;
`;

// ── Component ──────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Container>
        <Brand>
          <FooterLogo src="/isologo.png" alt="Club Villa del Dique" />
          <Hashtag>#PorUnMismoSentimiento</Hashtag>
        </Brand>

        <LinksCol>
          <ColTitle>Secciones</ColTitle>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/deportes">Deportes</FooterLink>
          <FooterLink to="/noticias">Noticias</FooterLink>
          <FooterLink to="/institucional">Institucional</FooterLink>
        </LinksCol>

        <InfoCol>
          <ColTitle>Contacto</ColTitle>
          <InfoText>📍 Villa del Dique, Calamuchita</InfoText>
          <InfoText>⚽ Fútbol · 🏀 Básquet · y más</InfoText>
        </InfoCol>
      </Container>

      <Bottom>
        © {currentYear} Club Deportivo y Biblioteca Villa del Dique. Todos los derechos reservados.
      </Bottom>
    </StyledFooter>
  );
}

export default Footer;
