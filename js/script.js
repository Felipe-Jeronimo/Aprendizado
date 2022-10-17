function validacao(){
let usuarioValido = "Felipe";
let senhaValida = "123456";

    let usuario =document.getElementById("usuario").value;
    
    let senha = document.getElementById ("senha").value;
    
//usuario vazio
    if (usuario == "" && senha ==""){
        alert ("Não foi possivel logar, usuario e senha vazio");
    }
    else if (usuario == "" && senha != "senhaValida"){
        alert ("Não foi possivel logar, porfavor preencha o usuario");
    }
    else if (usuario == "" && senha != "senhaValida"){
        alert ("Não foi possivel logar, porfavor preencha o usuario");
    }
/*
//usuario invalido
    else if (usuario != "usuarioValido" && senha == ""){
        alert ("Não foi possivel logar, login incorreto");
    }
    else if (usuario != "usuarioValido" && senha == "senhaValida"){
        alert ("Não foi possivel logar, login incorreto");
    }
    else if (usuario != "usuarioValido" && senha != "senhaValida"){
        alert ("Não foi possivel logar, login incorreto");
    }
    
    //usuario valido
    else if (usuario == "usuarioValido" && senha == ""){
        alert ("Não foi possivel logar, a senha não foi digitada");
    }
    else if (usuario == "usuarioValido" && senha != "senhaValida"){
        alert ("Não foi possivel logar, senha incorreta");
    }
    else if (usuario == "usuarioValido" && senha == "senhavalida"){
        alert ("Logado com sucesso");
    }
 
       
    *usuario vazio, senha vazia
    *usuario vazio, senha valida
    *usuario vazio, senha invalida
    
    usuario invalido, senha vazia 
    usuario invalido, senha valida
    usuario invalido, senha invalida
    
    usuario valido, senha vazia
    usuario valido, senha invalida

    usuario valido, senha valida
  */  


    }