// Code to render the app and the main component
import { ThemeProvider, ThemeContext } from './src/theme/ThemeContextv2';
import {Main} from './src/Components/Main';










export default function App() {

  
 
  return (

    <ThemeProvider>

      
        
    
      <Main />

     
   
    </ThemeProvider>
   
   
  );
}


