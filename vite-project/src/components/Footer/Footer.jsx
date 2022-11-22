import "./Footer.css"

function Footer () {
    const anoAtual = new Date().getFullYear()
    return (
        <div className="Footer">
            {anoAtual} ~ todos os direitos reservados.
        </div>
    )
}

export default Footer