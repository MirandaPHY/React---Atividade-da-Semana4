import "./Cabecalho.css";
import App from './../App';

function Cabecalho(){
    return(
        <section className="box1">
                <ul className="lista">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <a href="#">Serviços</a>
                    <a href="#">Tabela de Preço</a>
                    <a href="#">Planos Mensal</a>
                </ul>
                <button>Entrar</button>
                <section className="imagem"></section>

        </section>
    )
}

export default Cabecalho;