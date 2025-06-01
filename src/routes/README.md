# Pasta rota

As rotas definem os caminhos em seu aplicativo.
A estrutura do Fastify suporta a abordagem de monólitos modulares, onde
O aplicativo é organizado em módulos diferentes e independentes.
Isso facilita a escala mais fácil e a transição futura para uma arquitetura de microsserviço.
No futuro, você pode implantar independentemente alguns deles.

Nesta pasta, você deve definir todas as rotas que definem os terminais
do seu aplicativo da web.
Cada serviço é um [fastify
plugin] (https://fastify.dev/docs/last/reference/plugins/)
encapsulado (pode ter seus próprios plugins independentes) e é
Geralmente armazenado em um arquivo; Tenha cuidado para agrupar suas rotas logicamente,
Por exemplo, todas as rotas `/usuários` em um arquivo 'users.js`. Nós acrescentamos
Um arquivo `root.js` para você com uma raiz '/' adicionada.

Se um único arquivo ficar muito grande, crie uma pasta e adicione um arquivo `index.js` lá:
Este arquivo deve ser um plugue do Fastify e será carregado automaticamente
pelo aplicativo. Agora você pode adicionar quantos arquivos quiser nesta pasta.
Dessa forma, você pode criar rotas complexas em um único monólito,
e eventualmente os extraía.

Se você precisar compartilhar a funcionalidade entre as rotas, coloque-a
funcionalidade no `plugins` e compartilhe -a pasta via pasta
[Decoradores] (https://fastify.dev/docs/last/reference/decoraors/).

Se você é um pouco confuso sobre o uso de rotas assíncronas/esperando para escrever, você faria
Melhor dar uma olhada na [Promise Resolution] (https://fastify.dev/docs/last/reference/Routates/#promise-solition) para obter mais detalhes.