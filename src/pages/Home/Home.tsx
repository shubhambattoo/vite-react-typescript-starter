import { Container } from '@components/layout';
import { useDisclosure } from '@hooks/useDisclousure';
import React from 'react';

const Home: React.FC = () => {
  const { toggle, isOpen } = useDisclosure(true);

  return (
    <>
      <Container>
        <button
          onClick={toggle}
          style={{
            textTransform: 'capitalize',
            padding: '4px 24px',
          }}
        >
          toggle
        </button>
        {isOpen && <div style={{ fontSize: 20 }}>Hello world!</div>}
      </Container>
    </>
  );
};

export default Home;
