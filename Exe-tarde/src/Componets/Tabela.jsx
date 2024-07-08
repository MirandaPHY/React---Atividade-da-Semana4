import "./Tabela.css";


function Tabela() {
    return (
        <section className="Tabela_Precos">
            <table className="social">
                
                <tr><h1>TABELA DE VALORES</h1></tr>
                <tr>
                <th>CORTE</th>
                <th>PREÇO</th>
                </tr>

                <tr>
                    <th>DEGRADE</th>
                    <th>R$ 25,00</th>
                </tr>

                <tr>
                    <th>DEGRADE NAVALHADO</th>
                    <th>R$ 30,00</th>
                </tr>

                <tr>
                    <th>SOCIAL</th>
                    <th>R$ 20,00</th>
                </tr>

                <tr>
                    <th>BARBA</th>
                    <th>R$ 20,00</th>
                </tr>

                <tr>
                    <th>SOBRANCELHA</th>
                    <th>R$ 30,00</th>
                </tr>

                <tr>
                    <th>DEGRADE PIGMENTADO</th>
                    <th>R$ 30,00</th>
                </tr>

                <tr>
                    <th>NEVOU</th>
                    <th>R$ 100,00</th>
                </tr>

                <tr>
                    <th>LUZES</th>
                    <th>R$ 70,00</th>
                </tr>

                <th className="Combo">COMBO</th>
                <tr>
                    <th>CABELO + BARBA + SONBRANCELHA </th>
                    <th>R$ 55,00</th>
                </tr>
            </table>

           

        </section>
    )

}

export default Tabela;