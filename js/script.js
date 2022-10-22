function validacao(){
let usuarioValido = "Felipe";
let senhaValida = "123456";

    let usuario = document.getElementById("usuario").value;
    
    let senha = document.getElementById("senha").value;
          
//usuario vazio
    if (usuario == "" && senha ==""){
        alert ("Não foi possivel logar, usuario e senha vazio");
    }
    else if (usuario == "" && senha == senhaValida){
        alert ("Não foi possivel logar, por favor preencha o usuario");
    }
    else if (usuario == "" && senha != senhaValida){
        alert ("Não foi possivel logar, usuario incorrento");          
    }
        
//usuario invalido
    else if (usuario != usuarioValido && senha == ""){
        alert ("Não foi possivel logar, login incorreto" );
    }
    else if (usuario != usuarioValido && senha == senhaValida){
        alert ("Não foi possivel logar, login incorreto");
    }
    else if (usuario != usuarioValido && senha != senhaValida){
        alert ("Não foi possivel logar, login incorreto");
    }
    
//usuario valido
    else if (usuario == usuarioValido && senha == ""){
        alert ("Não foi possivel logar, a senha não foi digitada");
    }
    else if (usuario == usuarioValido && senha != senhaValida){
        alert ("Não foi possivel logar, senha incorreta");
    }
    else if(usuario == usuarioValido && senha == senhaValida){
        alert ("Logado com sucesso");
        window.open("http://127.0.0.1:5500/NovaPagina.html","_self");
        //document.write("<p></p>");        
        }
    }
    
