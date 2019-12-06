/* CAMPOS DE FILTRO DE PREÇO CUSTOMIZÁVEL NA PÁGINA DE CATEGORIAS 
   AUTOR: Marcus Galdino
   CONTATO: mvgaldino60@gmail.com
*/
        
function showFilter(start = true, show = ".Faixa.preço", max = false, btn = false) {
        
    content = "<input id='min' type='number' placeholder='Min.' required></input><input id='max' type='number' placeholder='Máx.' required></input>";

    if(btn !== false) {
        content += "<span id='go'><img src='/arquivos/" + btn + "'></span>"
    } else {
        content += "<button id='go'>Enviar</button>"
    }

    if(start === true ) {
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
}

