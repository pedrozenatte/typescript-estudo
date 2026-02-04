// ASYNC E AWAIT - FUNÇÕES ASSÍNCRONAS EM JS

/**
 * O que é processamento assíncrono?
 * Processamento assíncrono é quando uma operação não bloqueia a execução do programa enquanto espera algo terminar.
 * 
 * Em vez disso:
 * - você dispara a operação
 * - o programa continua rodando
 * - quando o resultado fica pronto, ele é tratado depois
 * 
 * Como se ocorresse o seguinte:
 * Estou em uma conversa com alguém e pedi um chop ao garçom. Enquanto ele vai buscar, não vou parar de conversar até chegar o chop, a conversa continua. 
 * 
 * O JS é um atendente sozinho
 * Ele anota pedidos (I/O)
 * Enquanto o pedido é preparado, ele atende outras pessoas
 * Quando o pedido fica pronto, alguém chama ele
 * 
 * Basicamente a thread principal dispara uma operação assíncrona, não fica esperando, continua executando outras coisas. Quando o resultado fica pronto, o runtime sinaliza, e a thread principal trata o resultado.
 * O que ocorre? 
 * A thread JS registra uma promessa/callback
 * O runtime/SO executa a operação de I/O fora da thread JS
 * Quando termina, o runtime coloca uma tarefa numa fila
 * O event loop entrega essa tarefa à thread JS quando ela estiver livre
 * 
 * CUIDADO: Não está ocorrendo paralelismo, o que ocorre é: 
 * Primeiro que o JS não é multithread, existe apenas a thread principal (thread JS) a qual executa o código. Quando uma operação assíncrona aparece (normalmente uma operação que vai ser externa de I/O), a thread JS dispara a operação que o runtime + SO vão cuidar, meio que parando a função em um determinado ponto, delegando o trabalho para o runtime + SO (então quem trata a operação externa não é mais a thread principal, inclusive nem faz mais parte do mesmo processo), e enquanto não tem o resultado da operação assíncrona, a thread JS continua executando o código, até que o SO avisa o runtime que a operação terminou, o qual lança uma tarefa na fila e, assim que a thread principal se desocupar, ela busca a tarefa e volta para continuar a função de onde parou. 
 * 
 * 
 * Para isso funcionar, precisa ser avisado:
 * 
 * async -> avisa que é uma operação assíncrona e autoriza a pausa da função.
 * await -> mostra exatamente o ponto que a função será pausada (apenas a função pausa, não o programa)
 */

function operacaoLenta(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Esperou 3s aqui!");
      resolve();
    }, 3000);
  });
}

async function exemplo() {
  console.log("antes");

  await operacaoLenta(); // ponto de pausa

  console.log("depois");
}

exemplo()
console.log('continuou enquanto esperava')

/**
 * O que é uma Promise
 * Uma Promise é um objeto que representa um valor que ainda não existe, mas vai existir no futuro (ou vai dar erro).
 * 
 * Ela é um acordo:
 * “Eu prometo que vou te entregar um resultado depois.”
 */
