function pegaInformacoes(){
    const minhaPublicacao = document.getElementById("publicado")
    const meuTitulo = document.getElementById("titulo")
    const meuAutor = document.getElementById("autor")
    const meuConteudo = document.getElementById("conteudo")
    const elemento = document.getElementById("imagem")

    let informacoes = {
        valorMeuTitulo: meuTitulo.value,
        valorMeuAutor: meuAutor.value,
        valorMeuConteudo: meuConteudo.value,
        
    }

    console.log(informacoes)
    let linkImagem= elemento.value


    minhaPublicacao.innerHTML += `<h1> Título: ${informacoes.valorMeuTitulo}</h1>`
    minhaPublicacao.innerHTML += `<p> Autor: ${informacoes.valorMeuAutor}</p>`
    minhaPublicacao.innerHTML += `<p>${informacoes.valorMeuConteudo}</p>`
    
    if((linkImagem.includes(".jpeg")) ||(linkImagem.includes(".jpg")) || (linkImagem.includes(".png"))){
        minhaPublicacao.innerHTML += `<img src=${linkImagem}>`
    }
    
    meuTitulo.value = ""
    meuAutor.value = ""
    meuConteudo.value = ""
    elemento.value = ""
}