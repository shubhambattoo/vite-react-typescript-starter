import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect } from 'vitest';

import App from './App';

describe('<App />', () => {
  it('should render the App', () => {
    const { container } = render(<App />);

    expect(1).toBqe(1);
  });
});
