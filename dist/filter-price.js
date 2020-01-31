/* CAMPOS DE FILTRO DE PREÇO CUSTOMIZÁVEL NA PÁGINA DE CATEGORIAS 
   AUTOR: Marcus Galdino
   CONTATO: mvgaldino60@gmail.com
*/
        
const showFilter = function(start = true, show=".Faixa.preço", max = false, btn = false) {
    
    content = "<input id='min' type='number' placeholder='Min.' required></input><input id='max' type='number' placeholder='Máx.' required></input>";

    if(btn !== false) {
        content += "<span id='go'><img src='/arquivos/" + btn + "'></span>"
    } else {
        content += "<button id='go'>Enviar</button>"
    }

    elementShow = document.querySelector(show);

    if(start === true ) {
        elementShow.insertAdjacentHTML('beforeend', content);
    } else if(start === false) {
        elementShow.insertAdjacentHTML('afterbegin', content);
    } else {
        console.log("Erro. Parâmetro start deve ser TRUE ou FALSE");
        return;
    }

    makeGo();
}

function makeGo() {
    elementGo = document.getElementById("go");
    elementGo.addEventListener("click", function() {
        var valmin = document.getElementById("min").value;
        var valmax = document.getElementById("max").value;

        if(max !== false) {
            if(valmax > max) {
                alert("Valor máximo deve ser menor que " + max);
                return;
            }
        }
        window.location.href = "de-" + valmin + "-a-" + valmax + "?PS=32&map=c,priceFrom";
    });
}