import { useState } from 'react';
import DrawerComponent from './components/DrawerComponent';
import AnaliseCandidato from './pages/analise_candidato/AnaliseCandidato';
import InfoIntegracaoGestaoPresente from './pages/gestao_matricula/InfoIntegracaoGestaoPresente';
import ControleMatriculaSimples from './pages/listagem/controle_matricula_simples/ControleMatriculaSimples';
import RoutesComponent from './routes/RoutesComponent';

const styles = {
  backgroundColor: '#197DFF',
  color: '#fff',
  fontWeight: 700,
  padding: 10,
  borderRadius: 5
};

function App() {
  const [openCloseDrawer, setOpenCloseDrawer] = useState(false);
  const [openCloseDrawerInfoIntegracaoGestaoPresente, setOpenCloseDrawerInfoIntegracaoGestaoPresente] = useState(false);

  return (
    // <div>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum enim maxime velit nam perspiciatis ratione, consectetur obcaecati cupiditate voluptatum nesciunt beatae, voluptate pariatur provident, repudiandae cumque ab ipsa dolor?</p>
    //   <br />
    //   <button style={styles} onClick={() => setOpenCloseDrawer(true)}>Open Drawer AnaliseCandidato</button>
    //   <br />
    //   <br />
    //   <button style={styles} onClick={() => setOpenCloseDrawerInfoIntegracaoGestaoPresente(true)}>Open Drawer InfoIntegracaoGestaoPresente</button>
    //   <AnaliseCandidato
    //     openCloseDrawer={openCloseDrawer}
    //     setOpenCloseDrawer={setOpenCloseDrawer}
    //   />

    //   <InfoIntegracaoGestaoPresente
    //     openCloseDrawer={openCloseDrawerInfoIntegracaoGestaoPresente}
    //     setOpenCloseDrawer={setOpenCloseDrawerInfoIntegracaoGestaoPresente}
    //   />
    // </div>
    // <ControleMatriculaSimples />
    <RoutesComponent />
  )
}

export default App
