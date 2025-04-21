import {BrowserRouter} from 'react-router-dom';
import { Proveedorcontexto } from './elementosHooks/proveedorContext';
import LogueoApp from './LogueoApp/LogueoApp';
import RutasForaApp from './Rutas/RutasPublicasApp';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Proveedorcontexto>
          <LogueoApp>
            <RutasForaApp />
          </LogueoApp>
        </Proveedorcontexto> 
      </BrowserRouter>
    </>
  )
}

export default App
