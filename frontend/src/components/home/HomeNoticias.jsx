import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ── Styled Components ──────────────────────────────────────
const Section = styled.section`
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  padding: 5rem 1.5rem;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const Card = styled.article`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: var(--transition);

  &:hover {
    border-color: rgba(39, 168, 90, 0.3);
    background: var(--color-bg-card-hover);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
  }
`;

const Fecha = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-primary-light);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const CardTitle = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.3;
`;

const Resumen = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  line-height: 1.6;
`;

const CtaWrap = styled.div`
  text-align: center;
  margin-top: 2.5rem;
`;

const Cta = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 1px solid var(--color-primary);
  color: var(--color-primary-light);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
  }
`;

// ── Data ───────────────────────────────────────────────────
const noticias = [
  {
    id: 1,
    titulo: 'Inicio de la temporada 2025',
    fecha: 'Marzo 2025',
    resumen: 'El club da arranque oficial a la nueva temporada con inscripciones abiertas.',
  },
  {
    id: 2,
    titulo: 'Torneo interno de fútbol',
    fecha: 'Febrero 2025',
    resumen: 'Gran participación en el torneo interno con más de 8 equipos inscriptos.',
  },
  {
    id: 3,
    titulo: 'Mejoras en las instalaciones',
    fecha: 'Enero 2025',
    resumen: 'Se renovó la iluminación de la cancha principal gracias al apoyo de la comunidad.',
  },
];

// ── Component ──────────────────────────────────────────────
function HomeNoticias() {
  return (
    <Section>
      <Inner>
        <Header>
          <Title>Últimas Noticias</Title>
          <Subtitle>Novedades del club y la comunidad</Subtitle>
        </Header>

        <List>
          {noticias.map((n) => (
            <Card key={n.id}>
              <Fecha>{n.fecha}</Fecha>
              <CardTitle>{n.titulo}</CardTitle>
              <Resumen>{n.resumen}</Resumen>
            </Card>
          ))}
        </List>

        <CtaWrap>
          <Cta to="/noticias">Ver todas las noticias</Cta>
        </CtaWrap>
      </Inner>
    </Section>
  );
}

export default HomeNoticias;
