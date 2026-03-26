import { useState } from 'react';
import DrawerComponent from './components/DrawerComponent';
import AnaliseCandidato from './pages/analise_candidato/AnaliseCandidato';
import Tela1 from './pages/gestao_matricula/Tela1';

function App() {
  const [openCloseDrawer, setOpenCloseDrawer] = useState(false);

  return (
    // <Tela1 />
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum enim maxime velit nam perspiciatis ratione, consectetur obcaecati cupiditate voluptatum nesciunt beatae, voluptate pariatur provident, repudiandae cumque ab ipsa dolor?</p>
      <button onClick={() => setOpenCloseDrawer(true)}>Open Drawer</button>
      <DrawerComponent
        bgColor="#fff"
        openCloseDrawer={openCloseDrawer}
        setOpenCloseDrawer={setOpenCloseDrawer}
      >
        <AnaliseCandidato setOpenCloseDrawer={setOpenCloseDrawer} />
      </DrawerComponent>
    </div>
  )
}

export default App
