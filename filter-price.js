/* CAMPOS DE FILTRO DE PREÇO CUSTOMIZÁVEL NA PÁGINA DE CATEGORIAS 
   AUTOR: Marcus Galdino
   CONTATO: mvgaldino60@gmail.com
*/
        
const showFilter = function(start = true, show="Faixa.preço", max = false, btn = false) {
    
    content = "<input id='min' type='number' placeholder='Min.' required></input><input id='max' type='number' placeholder='Máx.' required></input>";

    if(btn !== false) {
        content += "<span id='go'><img src='/arquivos/" + btn + "'></span>"
    } else {
        content += "<button id='go'>Enviar</button>"
    }

    el = document.querySelector(show);

    if(init === true ) {
        el.insertAdjacentHTML('beforeend', content);
    } else if(start === false) {
        el.insertAdjacentHTML('afterbegin', content);
    } else {
        console.log("Erro. Parâmetro start deve ser TRUE ou FALSE");
        return;
    }
}
/*
function showFilter(start = true, show = ".Faixa.preço", max = false, btn = false) {
        
    content = "<input id='min' type='number' placeholder='Min.' required></input><input id='max' type='number' placeholder='Máx.' required></input>";

    if(btn !== false) {
        content += "<span id='go'><img src='/arquivos/" + btn + "'></span>"
    } else {
        content += "<button id='go'>Enviar</button>"
    }

    if(init === true ) {
        $(show).append(content);
    } else if(start === false) {
        $(show).prepend(content);
    } else {
        console.log("Erro. Parâmetro start deve ser TRUE ou FALSE");
        return
    }

    $("#go").click(function(max){

        var valmin = $("#min").val();
        var valmax = $("#max").val();
           
        if(max !== false) {
            if(valmax > max) {
                alert("Valor máximo deve ser menor que " + max);
                return;
            }
        }
        window.location.href = "de-" + valmin + "-a-" + valmax + "?PS=32&map=c,priceFrom";
            
    })
}*/

