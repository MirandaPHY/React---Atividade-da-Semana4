import "./Cabecalho.css";


document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const background = chip.querySelector('.chip-background');
        if (background){
            background.classList.toggle('active');
        }
        });
});


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
                    <span className="chip-text">Entrar 🚪</span>
                    <span className="chip-background"></span>
                </span>
                <section className="imagem"></section>

        </section>
    )
}

export default Cabecalho;