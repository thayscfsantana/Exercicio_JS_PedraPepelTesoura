function Rock(){
  var rn = Math.floor (Math.random() *3) +1;
// == 1 - Pedra , rn == 2 - Papel , rn == 3 - Tesoura
    if(rn == 1)[
        alert('A escolha da máquina foi pedra, o resultado é: Empate!')
    ]
    else{
        if(rn == 2)[
            alert('A escolha da máquina foi papel, o resultado é: Você Perdeu!')

        ]
        else[
            alert('A escolha da máquina foi tesoura, o resultado é: Você Venceu!')
        ]
    }
}

function Paper(){
    var rn = Math.floor (Math.random() *3) +1;
  // == 1 - Pedra , rn == 2 - Papel , rn == 3 - Tesoura
      if(rn == 1)[
          alert('A escolha da máquina foi pedra, o resultado é: Você Venceu!')
      ]
      else{
          if(rn == 2)[
              alert('A escolha da máquina foi papel, o resultado é: Empate!')
  
          ]
          else[
              alert('A escolha da máquina foi tesoura, o resultado é: Você Perdeu!')
          ]
      }
  }

  function Scissors(){
    var rn = Math.floor (Math.random() *3) +1;
  // == 1 - Pedra , rn == 2 - Papel , rn == 3 - Tesoura
      if(rn == 1)[
          alert('A escolha da máquina foi pedra, o resultado é: Você Perdeu!')
      ]
      else{
          if(rn == 2)[
              alert('A escolha da máquina foi papel, o resultado é: Você venceu!')
  
          ]
          else[
              alert('A escolha da máquina foi tesoura, o resultado é: Empate!')
          ]
      }
  }