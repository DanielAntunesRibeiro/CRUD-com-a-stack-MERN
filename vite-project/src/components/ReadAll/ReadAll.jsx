import './ReadAll.css'
import ItemCard from '../ItemCard/ItemCard'
import { Api } from '../../api/api'
import { useState } from 'react'
import { useEffect } from 'react'

function ReadAll() {
    //const itens = [
    //    {
    //        _id: "1",
    //        nome: "Item 1",
    //        imagemUrl: "https://picsum.photos/201/201"
    //    },
    //    {
    //        _id: "2",
    //        nome: "Item 2",
    //        imagemUrl: "https://picsum.photos/200/200"
    //    }
    //]

    const [itens, setItens] = useState()

    async function realizarRequisicao() {
        const readAllUrl = Api.itens.readAll()
        const response = await Api.buildApiGetRequest(readAllUrl)
        const resultado = await response.json()

        setItens(resultado)
    }

    useEffect(function(){
        realizarRequisicao()
    }, [])

    if (itens === undefined) {
        return <div>Carregando...</div>
    }

    return (
        <div className='ReadAll'>
            {itens.map(function (item, index) {
                return <ItemCard key={`item-card-${index}`} item={item} />
            })}
        </div>
    )
}

export default ReadAll