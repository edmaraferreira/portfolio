function verificar() {
    var resposta1 = document.getElementById('resposta1')
    var resposta2 = document.getElementById('resposta2')
    var resposta3 = document.getElementById('resposta3')

    var resp1 = document.getElementById('resp1')
    var resp2 = document.getElementById('resp2')
    var idade = document.getElementById('resp3')

    var ct1 = Number(resp1.value)
    var ct2 = Number(resp2.value)
    var ct3 = Number(resp3.value)

    var imagem1 = document.getElementById('img1')
    var imagem2 = document.getElementById('img2')
    var imagem3 = document.getElementById('img3')

    var img1 = document.createElement("img")
    var img2 = document.createElement("img")
    var img3 = document.createElement("img")

    img1.setAttribute('src', ' ')
    img2.setAttribute('src', ' ')
    img3.setAttribute('src', ' ')

    if (ct1 == 0 || ct2 == 0 || ct3 == 0) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        if (ct1 == 26) {
            resposta1.innerHTML = `[CERTO] Ross e Rachel namoraram por <strong>26</strong> espódios. Começaram a namorar no episódio 14 da 2ª temporada, e "dão o tempo" no 15 da 3ª temporada.`
            img1.setAttribute('src', 'rg4.png')
            imagem1.appendChild(img1)
        } else {
            resposta1.innerHTML = `[ERRADO] Ross e Rachel namoraram por <strong>26</strong> espódios. Começaram a namorar no episódio 14 da 2ª temporada, e "dão o tempo" no 15 da 3ª temporada.`
            img1.setAttribute('src', 'rg1.png')
            imagem1.appendChild(img1)
        }

        if (ct2 == 5) {
            resposta2.innerHTML = `[CERTO] Monica e Chandler começaram a namorar na 5ª temporada. `
            img2.setAttribute('src', 'rg5.png')
            imagem2.appendChild(img2)
        } else {
            resposta2.innerHTML = `[ERRADO]  Monica e Chandler começaram a namorar na <strong>5ª</strong> temporada.`
            img2.setAttribute('src', 'rg2.png')
            imagem2.appendChild(img2)

        }

        if (ct3 == 18) {
            resposta3.innerHTML = `[CERTO] A lista da Rachel tinha <strong>18</strong> páginas.`
            img3.setAttribute('src', 'rg6.png')
            imagem3.appendChild(img3)
        } else {
            resposta3.innerHTML = `[ERRADO]  A lista da Rachel tinha <strong>18</strong> páginas.`
            img3.setAttribute('src', 'rg3.png')
            imagem3.appendChild(img3)
        }
    }

}