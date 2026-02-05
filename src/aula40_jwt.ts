// AUTENTICAÇÃO JWT (JSON Web Token)

/**
 * O que é JWT? 
 * 
 * JWT é um mecanismo de autenticação baseado em token.
 * Em vez de o servidor “lembrar” quem você é (sessão em memória - Session), ele confia em um token assinado que o cliente envia a cada requisição.
 * 
 * O JWT é um recurso de autorização, e não de autenticação. Após a autenticação, o token é enviado pelo sistema. 
 * O token é criptografado, então precisamos decodificar na parte do back-end.
 * 
 * Por que e onde utilizar JWT? 
 * - O JWT tem uma vantagem de transmitir os dados do usuário por meio do token
 * - Fazendo com que seja melhor que Session para algumas situações
 * - Esta abordagem também segue padrões do RESTful, onde não podemos manter uma ligação entre a API e outras aplicações. 
 * 
 * 
 * Ponto negativos do JWT
 * - Algumas críticias se devem ao secret ser único para toda a aplicação, o que pode compromoter um ou mais usuários se este for descoberto. 
 * - O tamanho do token, que gasta recursos dos servidores sendo transmitido e decodificado entre as requisições. Pode parecer irrelevante, mas grandes aplicações representa um custo. 
 * 
 * 
 * Acesse o site: jwt.io
 * 
 * O Token JWT possui o seguinte formato:
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
 * 
 * Esse token vai no header da requisição para a sua API. Assim que o token é enviado para a API, a API faz a validação e, caso o token seja válido, você consegue ter o retorno da sua requisição. 
 * Perceba que o token é dividido em TRÊS partes separadas por '.'
 * 
 * 1° parte) Header, que é onde vai as informações do próprio token, como o algoritmo para gerar a assinatura, e o tipo de token (JWT).
 * 2° parte) Payload, que é onde são armazenadas as informações importantes para o sistema (as mais utilizadas), por exemplo, username.
 * 3° parte) Assinatura, que é um hash gerado a partir de toda a informação do token + uma chave secreta. Essa chave secreta fica armazenada no servidor, ou seja, ninguém tem acesso a não ser o servidor, até porque se alguém tiver acesso a essa chave secreta, o seu sistema está vulnerável.
 * ATENÇÃO: É impossível, através do token, saber qual é a chave secreta.
 * 
 * Login → Banco valida → JWT
 * Requisição → JWT válido → userId
 * userId → Banco → dados do usuário
 * 
 */
