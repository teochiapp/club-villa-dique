import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ── Styled Components ──────────────────────────────────────
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
  text-align: center;
  padding: 2rem;
`;

const Code = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: var(--color-primary-light);
  line-height: 1;
  letter-spacing: -0.04em;
`;

const Message = styled.p`
  color: var(--color-text-muted);
  font-size: 1.1rem;
`;

const BackLink = styled(Link)`
  margin-top: 0.5rem;
  padding: 0.65rem 1.75rem;
  background: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-light);
    transform: translateY(-2px);
  }
`;

// ── Component ──────────────────────────────────────────────
function NotFound() {
  return (
    <Wrapper>
      <Code>404</Code>
      <Message>¡Oops! La página que buscás no existe.</Message>
      <BackLink to="/">Volver al inicio</BackLink>
    </Wrapper>
  );
}

export default NotFound;
