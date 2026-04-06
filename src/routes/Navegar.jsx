import { useState } from 'react';
import AnaliseCandidato from '../pages/analise_candidato/AnaliseCandidato';
import InfoIntegracaoGestaoPresente from '../pages/gestao_matricula/InfoIntegracaoGestaoPresente';
import { useNavigate } from 'react-router-dom';

const styles = {
    backgroundColor: '#197DFF',
    color: '#fff',
    fontWeight: 700,
    padding: 10,
    borderRadius: 5
};

const Navegar = () => {
    const [openCloseDrawer, setOpenCloseDrawer] = useState(false);
    const navigation = useNavigate();
    const [openCloseDrawerInfoIntegracaoGestaoPresente, setOpenCloseDrawerInfoIntegracaoGestaoPresente] = useState(false);

    return (
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia cum enim maxime velit nam perspiciatis ratione, consectetur obcaecati cupiditate voluptatum nesciunt beatae, voluptate pariatur provident, repudiandae cumque ab ipsa dolor?</p>
            <br />
            <button style={styles} onClick={() => navigation("/home")}>boas-vindas</button>
            <br />
            <br />
            <button style={styles} onClick={() => navigation("/login")}>login</button>
            <br />
            <br />
            <button style={styles} onClick={() => navigation("/gestao-matricula/historico-escolar-lancamentos")}>gestao-matricula/historico-escolar-lancamentos</button>
            <br />
            <br />
            <button style={styles} onClick={() => navigation("/gestao-matricula/gestao-matricula")}>gestao-matricula/gestao-matricula</button>
            <br />
            <br />
            <button style={styles} onClick={() => setOpenCloseDrawer(true)}>Open Drawer AnaliseCandidato</button>
            <br />
            <br />
            <button style={styles} onClick={() => setOpenCloseDrawerInfoIntegracaoGestaoPresente(true)}>Open Drawer InfoIntegracaoGestaoPresente</button>

            <AnaliseCandidato
                openCloseDrawer={openCloseDrawer}
                setOpenCloseDrawer={setOpenCloseDrawer}
            />

            <InfoIntegracaoGestaoPresente
                openCloseDrawer={openCloseDrawerInfoIntegracaoGestaoPresente}
                setOpenCloseDrawer={setOpenCloseDrawerInfoIntegracaoGestaoPresente}
            />
        </div>
    )
}

export default Navegar
