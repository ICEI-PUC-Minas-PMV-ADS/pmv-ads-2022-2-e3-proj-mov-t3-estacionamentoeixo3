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

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade abaixo faz um mapeamento do relacionamento entre Requisitos funcionais (RFs), Requisitos não funcionais (RNFs), Casos de uso (UC), Casos de teste (CTs) e Módulos (M). 

Para a construção da matriz, foram utilizadas dois tipos de rastreabilidade:
* Vertical, do tipo para frente; e
* Horizontal.

![Matriz de rastreabilidade](https://user-images.githubusercontent.com/88891675/188517105-943766ca-61cc-4062-86e3-7e5f38acfdd6.jpg)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
