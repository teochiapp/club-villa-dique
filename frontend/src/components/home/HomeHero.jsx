import styled, { keyframes } from 'styled-components';

// ── Animations ─────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ── Styled Components ──────────────────────────────────────
const Section = styled.section`
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26, 107, 58, 0.35) 0%, transparent 70%),
    var(--color-bg);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px),
      repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px);
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  animation: ${fadeUp} 0.8s ease both;
`;

const Badge = styled.span`
  display: inline-block;
  background: rgba(39, 168, 90, 0.15);
  border: 1px solid rgba(39, 168, 90, 0.3);
  color: var(--color-primary-light);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 1rem;
  border-radius: 999px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-white);

  span {
    color: var(--color-primary-light);
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: var(--color-text-muted);
  max-width: 480px;
  line-height: 1.6;
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-muted);
`;

const Hashtag = styled.span`
  display: inline-block;
  color: var(--color-accent);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.03em;
`;

const Stats = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 0.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  width: 100%;
  justify-content: center;

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

const Stat = styled.div``;

const StatValue = styled.span`
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-white);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// ── Component ──────────────────────────────────────────────
function HomeHero() {
  return (
    <Section>
      <Content>
        <Badge>🏃🏻 Espacio de Deportes y Recreación</Badge>

        <Title>
          Club Deportivo y<br />
          <span>Biblioteca</span> Villa del Dique
        </Title>

        <Subtitle>
          Canchas de Fútbol, Básquet y más disciplinas al servicio de toda la comunidad.
        </Subtitle>

        <Location>📍 Villa del Dique, Calamuchita</Location>

        <Hashtag>#PorUnMismoSentimiento</Hashtag>

        <Stats>
          <Stat>
            <StatValue>442</StatValue>
            <StatLabel>Publicaciones</StatLabel>
          </Stat>
          <Stat>
            <StatValue>2.547</StatValue>
            <StatLabel>Seguidores</StatLabel>
          </Stat>
          <Stat>
            <StatValue>1.321</StatValue>
            <StatLabel>Seguidos</StatLabel>
          </Stat>
        </Stats>
      </Content>
    </Section>
  );
}

export default HomeHero;
