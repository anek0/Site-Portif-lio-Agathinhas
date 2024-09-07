function pesquisar(){
    
    
    let section = document.getElementById("resultados-pesquisa"); 
   
    let campoPesquisa =document.getElementById("campo-pesqusa").value; //coloca o valor que está inserido dentro da tag
    
    // se o campoPesquisa for uma string sem nada
    if(!campoPesquisa)
      {
        section.innerHTML = "<p>Oops... nada foi inserido. -_-</p> "
        return
      }
    
    
    //campoPesquisa= campoPesquisa.toLowerCase();


    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    
    // para cada dado dentro da lista de dados queremos que algo aconteça
       for (let dado of dados)
       {
        titulo = dado.titulo.toLowerCase();
        descricao= dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //se o titulo inclui o que está no campoPesquisa então faça isso
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

     resultados +=  `
     <div class="item-resultado">
                    <h2>
                        <a href="${dado.linkSite}" target="_blank">${dado.titulo}</a>
                   </h2>
                       <p class="descricao-meta">
                           ${dado.descricao}
                       </p>
                       <a href="${dado.link}" target="_blank"> Acesse meu Artstation :3 </a>
    </div>
                
       `;


       }
         if (!resultados) {
            resultados = "<p>Oops... nada foi entrado. Este assunto não se encontra no site :/</p>";
            
         }


       section.innerHTML = resultados;
        }
       
   
        
    
}


        
            
