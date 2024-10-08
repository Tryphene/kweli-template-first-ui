import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from '@mui/material';

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then((d) => ({
    default: d.ReactQueryDevtools,
  }))
);
export default function AppQueryProvider({ children }: AppProviderProps) {
  const [showDevtools, setShowDevtools] = React.useState(false);

  React.useEffect(() => {
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);
  

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen />
        {showDevtools && (
          <React.Suspense fallback={<>Chargement...</>}>
            <ReactQueryDevtoolsProduction />
          </React.Suspense>
        )}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const ErrorFallback = () => (
  <div role="alert">
    <h2>{`Ooops, une erreur s'est produite :(`}</h2>
    <Button onClick={() => window.location.assign(window.location.origin)}>Refresh</Button>
  </div>
);
