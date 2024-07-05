import "./Galeria.css";
import App from './../App';


function Galeria() {
    return (
    
        <div className="galeria">
           <h1>GALERIA</h1>
           <article className="Cards">
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
                <img src="https://picsum.photos/200" alt="imagem Aleatoria" />
           </article>
        </div>
    )
}

export default Galeria;