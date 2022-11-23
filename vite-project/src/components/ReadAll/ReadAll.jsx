import './ReadAll.css'
import ItemCard from '../ItemCard/ItemCard'
import { Api } from '../../api/api'

function ReadAll() {
    const itens = [
        {
            _id: "1",
            nome: "Item 1",
            imagemUrl: "https://picsum.photos/201/201"
        },
        {
            _id: "2",
            nome: "Item 2",
            imagemUrl: "https://picsum.photos/200/200"
        }
    ]

    const readAllUrl = Api.itens.readAll()
    console.log(readAllUrl)
    Api.buildApiGetRequest(readAllUrl)

    return (
        <div className='ReadAll'>
            {itens.map(function (item, index) {
                return <ItemCard key={`item-card-${index}`} item={item} />
            })}
        </div>
    )
}

export default ReadAll