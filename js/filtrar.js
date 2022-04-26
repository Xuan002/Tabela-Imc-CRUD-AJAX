var campoFiltro = document.querySelector('#filtrar-tabela') 

campoFiltro.addEventListener('input', function(){ 
    console.log(this.value);
    var pacientes = document.querySelectorAll('.paciente')//pegando as informação da tabela nome,peso,imc

    if(this.value.length > 0){ //se for escrito algo no input vai rodar esse if
        for( var i = 0; i < pacientes.length; i++){ //loop q pega a informação de todos os paciente
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector('.info-nome') //pegando só o nome da variavel paciente
            var nome = tdNome.textContent; // pegando o valor q fica dentro do input
            var expressao = RegExp(this.value,'i') // pra procurar por letras n por nome completo Ex: colocar J e aparecer joão
            if(!expressao.test(nome)){ //se os nomes for diferente do role escrito vai sumir ficando só a procura
                paciente.classList.add("invisivel")
            } else{
                paciente.classList.remove("invisivel")
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) { // quando vc apaga oq foi escrito ele tira o efeito q faz os nome ficar invisivel 
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

})    
    
    
    
    
    
    
    
    