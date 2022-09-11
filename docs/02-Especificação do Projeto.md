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

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

Para alcançar satisfatoriamente a solução do problema apresentado, todas as suas características serão descritas por meio dos requisitos que serão apresentados para tal, com o objetivo de determinar as funcionalidades previstas para o projeto.

Assim, serão apresentados requisitos funcionais e requisitos não funcionais, sendo respectivamente, os que descrevem as funcionalidades que o sistema deverá apresentar para permitir a interação dos usuários, e aqueles que descrevem as qualidades que o sistema e suas funcionalidades devem apresentar para sua aceitação.

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O sistema deve permitir que o cliente crie uma conta para realizar um cadastro simples, com exigência de nome e email, que permitirá a utilização das funcionalidades do sistema. | ALTA | 
|RF-02| O sistema deve apresentar um mecanismo de busca que permita ao cliente localizar estacionamentos cadastrados que possuam vagas para estacionamento imediato de acordo com sua localização. | ALTA |
|RF-03| O sistema deve permitir ao cliente informar o valor que deseja pagar pelo tempo de estacionamento. | MÉDIA |
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
|RNF-06| o sistema deverá utilizar o Firebase para o cadastro e autenticação do cliente |  ALTA |

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
