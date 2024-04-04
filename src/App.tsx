import { ReactQueryDevtools } from 'react-query/devtools'
import { RouteProvider } from './routes/route';
import { QueryClientProvider } from 'react-query';
import { QueryClientStore } from './components/services/queryClientStore';
import { ContextProvider } from './components/context/store';
// import { AppProvider } from './context/store';


function App() {
  
  return (
    <QueryClientProvider client={QueryClientStore}>
      <ContextProvider>
        <RouteProvider />
      </ContextProvider>
      <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  )

}

export default App;
