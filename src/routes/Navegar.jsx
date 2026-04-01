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
            <button style={styles} onClick={() => navigation("/teste")}>Lista Intenção de Vagas</button>
            <br />
            <br />
            <button style={styles} onClick={() => navigation("/historico-escolar")}>Lista Histórico Escolar</button>
            <br />
            <br />
            <button style={styles} onClick={() => navigation("/controle-matricula/simples")}>Lista Controle de Matriculas</button>
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
