import Layout from "../components/Layout"

export default function Home (){
    return (
        <>
            <Layout />
        </>
    )
}
//Inserindo conteudo somente na main/miolo/meio do Layout.jsx
// Inserindo parametros na tag <Layout /> e chamnado na main em js {props.minhaPropriedade}
//Ou colocando o conteudo diretamente na tag Layout, automaticamente ela recebe a propriedade children(definido pelo proprio react)
// posso chamar o conteudo na tag main do Layout atraves do props.children