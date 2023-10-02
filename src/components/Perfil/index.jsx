import styles from './index.css';
import imgPerfil from '../../assets/imagemPerfil.png'

import { FcApproval } from 'react-icons/fc';
import { IoSettingsOutline } from 'react-icons/io5';

const Perfil = () =>{
    return (
        <div className="container">
            <div className="imagemPerfil">
                <img src={imgPerfil}></img>
            </div>
            <div className="containerInfo">
                <div className="nomePerfil">
                    Marcos
                    <FcApproval size={24} />
                </div>

                <div className="infoLocalizacao">
                    Recife, PE | na plataforma há 1 mês
                </div>

                <div className="bioUsuario">
                    Uber, 42 anos.
                </div>

                <div className="linkPerfil">
                    *link aqui*

                </div>

            </div>
            <div className="buttonGerenciar">
                <button>
                    <IoSettingsOutline size={22}/>
                    gerenciar
                </button>
            </div>
        </div>
    );
}

export default Perfil;