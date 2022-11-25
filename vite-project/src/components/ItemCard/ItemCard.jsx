import "./ItemCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons" 
import { Api } from "../../api/api"

function ItemCard(props) {
    const item = props.item

    async function excluirItem() {
        if (!confirm("Tem certea que deseja excluir o item?")){
            return
        }

        const deleteUrl = Api.itens.delete(item._id)
        const response = await Api.buildApiDeleteRequest(deleteUrl)
        const body = await response.json

        if (response.status === 200){
            alert(body.message)
            navigate(0)
        } else {
            alert("ERRO! tente novamente.")
        }
    }

    return (
        <div className="ItemCard">
            <FontAwesomeIcon className="icon-delete" icon={faTrashCan} />
            <FontAwesomeIcon className="icon-edit" icon={faEdit} /> 
            <h1>{item.nome}</h1>
            <img src={item.imagemUrl} alt={"Imagem do " + item.nome} width={200} />
        </div>
    )
}

export default ItemCard