function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
        gênero = 'Um Homem'
        if (idade >=0 && idade < 10){
            // Criança
            img.setAttribute('src','Homem-bebe.png ')
        }else if (idade >= 10 && idade < 21) {
            //Jovem
            img.setAttribute('src','Homem-jovem.png')
        }else if (idade < 50){
            // Adulto
            img.setAttribute('src','Homem-Adulto.png')
        }else {
            //Idoso
            img.setAttribute('src','Homem-Velho.png')
            
        }

        } else if (fsex[1].checked){
            gênero = 'Uma Mulher'
            if (idade >=0 && idade < 10){
                // Criança
                img.setAttribute('src','Mulher-bebe.png')
            }else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','Mulher-Jovem.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src','Mulher-adulta.png')
            }else {
                //Idoso
                img.setAttribute('src','Mulher-velha.png')
        }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    }