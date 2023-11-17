
import './App.css'
import PostList from './react-query/PostList ';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


function App() {
  return (
  
    <QueryClientProvider client={queryClient} >
       <PostList/>
    </QueryClientProvider>
   
  
  )
}

export default App
