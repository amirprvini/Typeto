import { ReactQueryDevtools } from 'react-query/devtools'
import { RouteProvider } from './routes/route';
import { QueryClientProvider } from 'react-query';
import { QueryClientStore } from './components/services/queryClientStore';
import { ContextProvider } from './components/context/store';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Toaster } from 'react-hot-toast';
// import { AppProvider } from './context/store';


function App() {
  
  return (
    <QueryClientProvider client={QueryClientStore}>
      <ContextProvider>
        {/* <ProviderOfContext> */}
          <Toaster />
          <RouteProvider />
        {/* </ProviderOfContext> */}
      </ContextProvider>
      <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  )

}

export default App;
