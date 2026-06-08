import { useState } from 'react';
import AnaliseCandidato from '../pages/analise_candidato/AnaliseCandidato';
import DesligamentoExpress from '../pages/desligamento_express/DesligamentoExpress';
import NovaMatricula from '../pages/nova_matricula/NovaMatricula';
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
    const [openDesligamentoExpress, setOpenDesligamentoExpress] = useState(false);
    const [openNovaMatricula, setOpenNovaMatricula] = useState(false);
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
            <button style={styles} onClick={() => setOpenDesligamentoExpress(true)}>Open Drawer Desligamento Express</button>
            <br />
            <br />
            <button style={styles} onClick={() => setOpenNovaMatricula(true)}>Open Drawer Nova Matrícula</button>
            <br />
            <br />
            <button style={styles} onClick={() => setOpenCloseDrawerInfoIntegracaoGestaoPresente(true)}>Open Drawer InfoIntegracaoGestaoPresente</button>

            <AnaliseCandidato
                openCloseDrawer={openCloseDrawer}
                setOpenCloseDrawer={setOpenCloseDrawer}
            />

            <DesligamentoExpress
                openCloseDrawer={openDesligamentoExpress}
                setOpenCloseDrawer={setOpenDesligamentoExpress}
            />

            <NovaMatricula
                openCloseDrawer={openNovaMatricula}
                setOpenCloseDrawer={setOpenNovaMatricula}
            />

            <InfoIntegracaoGestaoPresente
                openCloseDrawer={openCloseDrawerInfoIntegracaoGestaoPresente}
                setOpenCloseDrawer={setOpenCloseDrawerInfoIntegracaoGestaoPresente}
            />
        </div>
    )
}

export default Navegar
