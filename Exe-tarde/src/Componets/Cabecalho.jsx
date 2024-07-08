import "./Cabecalho.css";


    function handleClick() {
        alert("vamos para o loguin");
}


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
                <span className="chip">
                    <span className="chip-text" onClick={handleClick}>Entrar 🚪</span>
                    <span className="chip-background"></span>
                </span>
                <section className="imagem"></section>

        </section>
    )
}

export default Cabecalho;