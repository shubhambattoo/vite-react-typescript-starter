import { ErrorBoundary as Boundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

const FallbackComponent: React.FC<{
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}> = ({ error, resetErrorBoundary }) => {
  return (
    <div
      style={{
        padding: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '90vh',
      }}
    >
      <p>Looks like something went wrong!</p>
      <div style={{ width: '80%', margin: '20px auto' }}>
        <code>{error.message}</code>
      </div>
      <p>
        We track these errors automatically, but if the problem persists feel
        free to <span className={'cursor-pointer'}>contact us</span>. In the
        meantime, try refreshing.
      </p>
      <p style={{ margin: 1.5 }}>
        If the problem persists, reach us on{' '}
        <a href="mailto:support.cadenz@thedatateam.com">
          support.cadenz@thedatateam.com
        </a>
      </p>
      <button onClick={resetErrorBoundary}>Try again</button>
      <div style={{ margin: 1.5 }}>OR</div>
      <p style={{ margin: 1.5 }}>
        Go Back to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Boundary FallbackComponent={FallbackComponent}>{children}</Boundary>;
};

export default ErrorBoundary;
