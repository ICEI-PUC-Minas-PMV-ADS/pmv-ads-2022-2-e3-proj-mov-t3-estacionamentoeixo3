# Especificações do Projeto

A definição do problema foi consolidada tendo como base as experiências pessoais dos membros do grupo, assim como as de pessoas próximas a cada um, que compartilham a mesma necessidade.

Com esta base, foi possível inferir possíveis problemas enfrentados por diversos clientes de estacionamentos. Tais detalhes foram organizados em personas e histórias de usuários. 

## Personas

As personas levantadas durante o processo de compreensão do problema são apresentadas nas figuras que se seguem:

![Personas](https://user-images.githubusercontent.com/88891675/188517846-77419c98-373f-4f2d-8164-501ed4edeb16.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Antônio Alves  | Localizar um estacionamento via aplicativo móvel | Estacionar seu carro em um local que julga ser seguro, com base nos comentários e avaliações de outros usuários |
|Marcelo Moura       | Localizar um estacionamento via aplicativo móvel, com base no valor de cobrança | Conseguir selecionar os locais mais acessíveis e assim, economizar |
|Beatriz Beltrão  | Visualizar em um mapa as opções de estacionamentos disponíveis de acordo com a sua localização, assim como seus valores | Estacionar seu veículo com rapidez, mesmo estando em cidades desconhecidas |
|Luisa Limeira | Ampliar a visibilidade da empresa no mercado de estacionamentos | Aumentar o número de clientes e a receita da empresa |
|Luisa Limeira | Ter acesso aos feedbacks de clientes que já utilizaram os serviços de sua empresa | Melhorar cada vez mais a gestão do seu negócio |

## Casos de uso

De acordo com o perfil e as histórias das personas mencionadas no item anterior, foram identificados os seguintes casos de uso:
 
* Realizar cadastro de usuário cliente, fornecendo nome e email (UC-01);
* Realizar cadastro de empresa de estacionamento, fornecendo nome e email (UC-02);
* Informar o endereço em que estiver no momento da busca (UC-03);
* Efetuar busca por estacionamentos próximos ao endereço informado, podendo informar ou não limites de valor de pagamento  (UC-04);
* Criar um perfil de usuário cliente que permita (UC-05):
* Avaliar estacionamentos já utilizados;
* Deixar comentários sobre o serviço utilizado.


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

A proposta deste projeto se fundamenta na necessidade de apresentar ao usuário de estacionamentos a possibilidade de efetuar busca e reserva de vagas, utilizando para tal, a ferramenta de geolocalização disponibilizada no dispositivo móvel, que direcionará o usuário para os estabelecimentos com vagas disponíveis, permitindo inclusive que o usuário realize a busca de acordo com os valores pretendidos para utilização do serviço.
Para isso, serão implementadas funcionalidades de cadastro do usuário, login, busca de vagas, além de permitir acesso ao histórico de utilização, avaliação e envio de comentários ao estabelecimento. 


### Descrição Geral da Proposta

O objetivo é demonstrar como se dará o processo de negócio, tendo em vista que o ator principal de todo processo aqui apresentado é o usuário do estacionamento, embora o contexto exija a menção indireta do gestor do estacionamento que será o ambiente utilizado para prestação do serviço. Além disso, o pagamento da contratação de reserva da vaga pretendida é mencionado com a finalidade de esclarecer que, embora seja uma condição para utilização dos serviços, esta funcionalidade inicialmente não será implementada no projeto, podendo figurar como melhoria a ser implementada futuramente.  
Contudo a implementação dos requisitos essenciais pretendidos será suficiente para ofertar a totalidade das funcionalidades descritas na documentação do projeto. 

### Processo 1 – Cadastro de usuário e busca por vaga

De acordo com o padrão BPNM, o processo de cadastro e busca de vaga em estacionamento foi desenhado de modo a demonstrar, suscintamente, a maneira como se dará o fluxo do processo a partir da requisição de cadastro do usuário no sistema até o momento em que o usuário encontra a vaga e opta por encerrar a pesquisa ou ser direcionado para login. Vale ressaltar que os estacionamentos que serão alvo das buscas do usuário, não serão geridos por este projeto. 

![1](https://user-images.githubusercontent.com/90852295/193950863-de41afb0-16aa-40b8-ba44-4e009bff4b40.png)


### Processo 2 – Usuário logado e utilização do serviço

A partir do login, o usuário procederá com a reserva da vaga, condicionada ao pagamento prévio, que não será implementado neste sistema, apenas será demonstrado para melhor compreensão do fluxo, e a partir daí fazer uso da vaga pretendida. 

![2](https://user-images.githubusercontent.com/90852295/193950269-76d44aa1-60ff-4b95-a2ea-508f5d0b27e8.png)


### Processo 3 – Encerramento da utilização do serviço

Ao final, com o encerramento da estadia, o usuário pode optar por visualizar opções do menu do sistema, ou efetuar checkout encerrando a utilização do serviço contratado. 

![3](https://user-images.githubusercontent.com/90852295/193951693-a619019a-6a53-45b6-940d-0082d91ba2c7.png)


## Indicadores de Desempenho

| # | Indicador | Objetivo | Descrição | Cálculo | Fonte de dados | Perspectiva | Meta |
|---|----------------|----------------|----------------|-----------------|----------------|-------------|----------------|
| 1 | Taxa de downloads do aplicativo | Verificar a quantidade de downloads do aplicativo | Obter a quantidade de pessoas que baixaram e utilizaram o aplicativo | Número de downloads efetuados/período | Playstore e Apple Store | Difusão do produto | 100 downloads por período |
| 2 | Índice de avaliação na Play Store e Apple Store | Verificar o nível de aceitação do aplicativo | Obter a média das notas dadas pelos usuários que baixaram e utilizaram o aplicativo | Número de estrelas marcadas/período | Playstore e Apple Store | Qualidade do produto | Avaliação acima de 4 estrelas |
| 3 | Quantidade de cadastros na aplicação | Verificar o número de clientes cadastrados | Avaliar a quantidade de cadastros de cliente | Número de cadastro de clientes/período | Banco de dados do aplicativo | Crescimento do produto | 100 clientes por período |
| 4 | Quantidade de avaliações sobre um estacionamento | Estimar o número de clientes que utilizam a aplicação e que também fazem avaliação do estacionamento | Verificar o número de clientes que avaliam um estacionamento após a sua utilização | Número de vezes que o cliente usou o aplicativo para estacionamento + número de avaliações realizadas /período | Banco de dados do aplicativo | Efetividade ao que se propõe | Pelo menos 70% dos clientes que utilizam a aplicação para estacionamento enviem sua avaliação do estabelecimento utilizado |
| 5 | Quantidade de comentários sobre um estacionamento | Estimar o número de clientes que utilizam a aplicação e que também fazem comentários sobre o estacionamento | Verificar o número de comentários sobre um estacionamento após a sua utilização | Número de vezes que o cliente usou o aplicativo para estacionamento + número de comentários realizados /período | Banco de dados do aplicativo | Efetividade ao que se propõe | Pelo menos 50% dos clientes que utilizam a aplicação para estacionamento enviem seus comentários sobre o estabelecimento utilizado |
| 6 | Tempo de resposta na busca pelo estacionamento | Verificar a quantidade de tempo gasto pelo aplicativo leva para retornar um resultado | Avaliar o tempo de resposta da aplicação | Cálculo do tempo de resposta após clicar no botão de busca | Banco de dados da aplicação | Efetividade ao que se propõe | 5 segundos para devolução de resposta |


## Requisitos

Para alcançar satisfatoriamente a solução do problema apresentado, todas as suas características serão descritas por meio dos requisitos que serão apresentados para tal, com o objetivo de determinar as funcionalidades previstas para o projeto.

Assim, serão apresentados requisitos funcionais e requisitos não funcionais, sendo respectivamente, os que descrevem as funcionalidades que o sistema deverá apresentar para permitir a interação dos usuários, e aqueles que descrevem as qualidades que o sistema e suas funcionalidades devem apresentar para sua aceitação.

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que o cliente crie uma conta para realizar um cadastro simples, com exigência de nome e email, que permitirá a utilização das funcionalidades do sistema. | ALTA | 
|RF-02| O sistema deve apresentar um mecanismo de busca que permita ao cliente localizar estacionamentos cadastrados que possuam vagas para estacionamento imediato de acordo com sua localização. | ALTA |
|RF-03| O sistema deve permitir ao cliente visualizar o valor que cobrado pelo estacionamento buscado ou selecionado. | MÉDIA |
|RF-04| O sistema deve permitir, a partir da localização geográfica, que o cliente seja redirecionado ao aplicativo de navegação do dispositivo móvel. | ALTA |
|RF-05| O sistema deve permitir que o cliente avalie um estacionamento utilizado por ele. | ALTA |
|RF-06| O sistema deve permitir que o cliente faça comentários sobre um estacionamento utilizado por ele. | ALTA |
|RF-07| O sistema deve permitir o cadastro simplificado de empresas de estacionamentos.| MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve usar o GPS do dispositivo móvel. | ALTA | 
|RNF-02| O sistema deve ser totalmente responsivo para rodar em um dispositivo móvel. |  ALTA | 
|RNF-03| O sistema deve ser publicado no play store. |  ALTA |
|RNF-04| O sistema deve utilizar a API do google maps ou aplicativo disponível no smartphone do usuário para mapear a rota até o estacionamento|  ALTA | 
|RNF-05| O sistema deverá usar banco de dados relacional |  ALTA |
|RNF-06| O sistema deverá utilizar o Firebase para o cadastro e autenticação do cliente |  ALTA |

## Restrições

As restrições listadas na tabela abaixo limitam a execução deste projeto:

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue até o final do semestre letivo, não podendo ultrapassar a data de 07/12/2022. |
|RE-02| O projeto deverá se restringir às tecnologias básicas de um aplicativo móvel. |
|RE-03| O projeto deverá ser desenvolvido por uma equipe composta por cinco membros. |

## Diagrama de Casos de Uso

O diagrama de casos de uso representado a seguir difine a sequência de ações dos atores, seus relacionamentos e sua interações com o sistema:

![Diagrama de caso de uso](https://user-images.githubusercontent.com/88635266/189545180-f4ed31a5-29e5-4fc6-9625-a1d726dd24ca.png)

# Matriz de Rastreabilidade

A matriz de rastreabilidade abaixo faz um mapeamento do relacionamento entre Requisitos funcionais (RFs), Requisitos não funcionais (RNFs), Casos de uso (UC), Casos de teste (CTs) e Módulos (M). 

Para a construção da matriz, foram utilizadas dois tipos de rastreabilidade:
* Vertical, do tipo para frente; e
* Horizontal.

![Matriz de rastreabilidade](https://user-images.githubusercontent.com/90852295/189489306-7a26e101-9d92-476a-b352-a960ed01bd1e.png)

# Gerenciamento de Projeto

Utilizando o padrão PMBoK todo o projeto será gerenciado utilizando planilhas integradas que possibilitarão a visualização da evolução dos trabalhos, bem como a possibilidade de melhoria diária a cada implementação. Para tal, todas as informações referentes ao cronograma, previsão de custos, recursos e equipe envolvida, atividades diárias, reuniões, produção de documentação, entre outros, serão devidamente registradas com o objetivo de construir base documental sólida a fim de que o desenvolvimento do projeto transcorra obedecendo padrões e normas de excelência e qualidade. 

![cronograma](https://user-images.githubusercontent.com/90852295/189489885-296af0ad-1bef-4daa-88a3-c48bd3ef1893.png)


## Gerenciamento de Tempo

O tempo estimado para realização de cada tarefa prevista no cronograma de gestão do projeto seguirá os padrões estabelecidos no método inspirado no diagrama de Gantt, proporcionado melhor visualização e compreensão do período compreendido entre o início e fim de cada tarefa. 

![prazo](https://user-images.githubusercontent.com/90852295/189491423-0dbace71-db1b-4f26-ba46-7d76ce0e7a60.png)

## Gerenciamento de Equipe

A equipe desempenhará suas tarefas de acordo com as habilidades e características subjetivas de cada membro, a fim de que cada um contribua e produza o melhor trabalho a ser incorporado ao projeto e consequentemente ao produto final. O gerenciamento das tarefas será registrado para que a produtividade e qualidade se mantenham durante todo o desenvolvimento do projeto. 

![equipe](https://user-images.githubusercontent.com/90852295/189491031-cd76458f-2c7a-472a-ad33-8ad307c821fb.png)


## Gestão de Orçamento

Com base em todo o escopo produzido anteriormente, os custos do projeto serão gerenciados em conformidade com os objetivos e requisitos estabelecidos na concepção do projeto, de modo a garantir o desenvolvimento norteado pela realidade financeira pré-definida. 

![custos](https://user-images.githubusercontent.com/90852295/189489435-bf935897-8bfc-46ce-9c3e-31ee5fc05c21.png)
