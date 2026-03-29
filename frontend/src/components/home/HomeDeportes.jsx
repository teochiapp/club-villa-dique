import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ── Styled Components ──────────────────────────────────────
const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: var(--color-white);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: var(--color-text-muted);
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
`;

const Card = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  transition: var(--transition);
  cursor: default;

  &:hover {
    background: var(--color-bg-card-hover);
    border-color: rgba(39, 168, 90, 0.3);
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }
`;

const Icon = styled.span`
  font-size: 2.2rem;
  line-height: 1;
`;

const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
`;

const Desc = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.5;
`;

const CtaWrap = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const Cta = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(39, 168, 90, 0.35);
  }
`;

// ── Data ───────────────────────────────────────────────────
const deportes = [
  { icono: '⚽', nombre: 'Fútbol',     descripcion: 'Canchas reglamentarias disponibles para todos.' },
  { icono: '🏀', nombre: 'Básquet',    descripcion: 'Cancha techada para entrenamientos y partidos.' },
  { icono: '🏃🏻', nombre: 'Atletismo', descripcion: 'Espacio abierto para recreación y running.' },
];

// ── Component ──────────────────────────────────────────────
function HomeDeportes() {
  return (
    <Section>
      <Header>
        <Title>Nuestras Disciplinas</Title>
        <Subtitle>Actividades para todas las edades y niveles</Subtitle>
      </Header>

      <Grid>
        {deportes.map((d) => (
          <Card key={d.nombre}>
            <Icon>{d.icono}</Icon>
            <Name>{d.nombre}</Name>
            <Desc>{d.descripcion}</Desc>
          </Card>
        ))}
      </Grid>

      <CtaWrap>
        <Cta to="/deportes">Ver todos los deportes</Cta>
      </CtaWrap>
    </Section>
  );
}

export default HomeDeportes;
