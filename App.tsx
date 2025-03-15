// Code to render the app and the main component
import { ThemeProvider } from './src/theme/ThemeContextv2';
import {Main} from './src/Components/Main';






export default function App() {


 
  return (

    <ThemeProvider>
    <Main />
    </ThemeProvider>
   
   
  );
}


