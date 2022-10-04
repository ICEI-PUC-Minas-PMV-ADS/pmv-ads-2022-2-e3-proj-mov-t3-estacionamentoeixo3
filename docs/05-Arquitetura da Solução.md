# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

As características básicas de uma aplicação móvel são: portabilidade, usabilidade, funcionalidade e conectividade. Tais características dão significado ao que é ser móvel, pois mobilidade pode ser definida como capacidade de se mover ou ser movido facilmente. Assim, a aplicação móvel deve ser desenvolvida para ser utilizada em dispositivos móveis portáteis. 

Um dispositivo móvel portátil deve ser capaz de se conectar, obter e fornecer dados para outros usuários, aplicativos e sistemas, ou seja, deve ser interativo. Por meio deste dispositivo, poderá ser possível ao produto de software que foi projetado para funcionar em um dispositivo móvel atender às necessidades de seus usuários. Pode-se dizer que um software que satisfaz às expectativas dos seus stakeholders é um software de qualidade.

Após serem consideradas as características básicas de uma aplicação móvel, foram identificadas algumas sub-características dentre as oito características de qualidade para produtos de software definidas na norma internacional ISO/IEC 25010, que serão utilizadas como base para nortear o desenvolvimento da aplicação móvel. 

As características estão especificadas abaixo em negrito, e as subcaracterísticas estão organizadas em tópicos. Além disso, para cada subcaracterística, será definida uma métrica subjetiva para medir a qualidade do software. As métricas serão avaliadas pelos usuários, exceto segurança, manutenibilidade e portabilidade (avaliada pelos desenvolvedores). A cada somatório das subcaracterísticas, será obtido o resultado da qualidade das características. Algumas características possuirão valor com peso 2, ou seja, o total avaliado terá o seu valor multiplicado por dois. Isso se dará devido à relevância da característica para a aplicação como um todo. Por fim, o somatório das oito características definirá o quanto o software terá de qualidade.
 
Veja abaixo: 

1. **Adequação funcional**<br>
- Correção funcional: pois a aplicação deve fornecer resultados corretos, com o necessário grau de precisão.<p>
`Métrica`: a aplicação fornece resultados corretos e precisos ao buscar estacionamentos próximos ao endereço informado na busca?<p>
a) Não fornece (valor = 0)<p>
b) Fornece parcialmente (valor = 2)<p>
c) Fornece plenamente (valor = 3)<p>
Total = 5<p>

- Pertinência funcional: pois a aplicação deve facilitar a realização de tarefas pelo usuário para cumprir os objetivos especificados.<p>
`Métrica`: a aplicação facilita a busca por estacionamentos próximos ao endereço informado?<p>
a) Não facilita (valor = 0)<p>
b) Facilita parcialmente (valor = 2)<p>
c) Facilita plenamente (valor = 3)<p>
Total = 5<p>
<br>

> Total avalidado = 10<p>
> Característica de peso 2, portanto:<p>
> Somatório das subcaracterísticas = 20<p>
---

2. **Eficiência de Desempenho**<br>
- Comportamento temporal: pois o tempo de espera entre requisitar um dado e obter a resposta da aplicação deve ser o menor possível.<p>
`Métrica`: a aplicação possui uma navegação rápida?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode melhorar (valor = 2)<p>
c) Sim  (valor = 5)<p>
	Total = 5<p>
<br>
 
> Total avalidado = 5<p>
> Característica de peso 2, portanto:<p>
> Somatório das subcaracterísticas = 10<p>
---

3. **Compatibilidade**<br>
- Coexistência: pois a aplicação deve ser capaz de desempenhar suas funções requeridas de forma eficiente, enquanto compartilha um ambiente e recursos comuns com outros produtos, sem causar impacto negativo em qualquer outro produto.<p>
 `Métrica`: a aplicação consome recursos do dispositivo móvel, de forma a não prejudicar o funcionamento de outras aplicações?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode melhorar (valor = 2)<p>
c) Sim (valor = 5)<p>
Total = 5<p>
<br>

> Total avalidado = 5<p>
> Característica de peso 1 portanto:<p>
> Somatório das subcaracterísticas = 5<p>
---

4. **Usabilidade**<br>
- Adequação ao reconhecimento: pois o usuário poderá reconhecer se a aplicação é apropriada para suas necessidades.<p>
`Métrica`: os serviços oferecidos pela aplicação atende totalmente às necessidades do usuário que busca um estacionamento?<p>
a) Não atende (valor = 0)<p>
b) Atende parcialmente (valor = 2)<p>
c) Atende plenamente (valor = 3)<p>
Total = 5<p>
<br>

- Apreensibilidade ou aprendizagem: pois a aplicação poderá ser utilizada com baixo esforço de aprendizagem.<p>
`Métrica`: a aplicação é de fácil utilização?
a) Não (valor = 0)<p>
b) Sim, mas pode ficar ainda mais fácil (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>

 - Operacionalidade ou operabilidade: pois a aplicação possui atributos que o tornam fácil de operar e controlar.<p>
`Métrica`: os ícones utilizados pela aplicação facilitam a utilização do sistema?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode ficar ainda mais fácil (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>

- Estética da interface: pois a interface da aplicação permite interação agradável e satisfatória para o usuário.<p>
`Métrica`: as fontes e cores da interface da aplicação são satisfatórias para a utilização do sistema?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode melhorar (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>
<br>

> Total avalidado = 20<p>
> Característica de peso 2, portanto:<p>
> Somatório das subcaracterísticas = 40<p>
---

5. **Confiabilidade**<br>
- Maturidade: pois a aplicação atende às necessidades de confiabilidade sob operação normal.<p>
`Métrica`: a aplicação se comporta do modo esperado pelo usuário, de forma consistente?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode melhorar (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>

- Disponibilidade: pois a aplicação deverá estar operacional e acessível quando necessária para uso.<p>
`Métrica`: a aplicação está sempre disponível para uso no momento em que ela precisa ser utilizada?<p>
a) Não (valor = 0)<p>
b) Sim, mas pode melhorar (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>
<br>

> Total avalidado = 10<p>
> Característica de peso 1 portanto:<p>
> Somatório das subcaracterísticas = 10<p>
---

6. **Segurança**<br>
- Confidencialidade: pois a aplicação garante que os dados sejam acessíveis apenas àqueles autorizados a ter acesso.<p>
`Métrica`: a aplicação garante a privacidade dos dados do usuário?<p>
a) Não garante (valor = 0)<p>
b) Garante parcialmente (valor = 2)<p>
c) Garante plenamente (valor = 3)<p>
Total = 5<p>

- Integridade: pois a aplicação impede o acesso não autorizado ou a modificação de programas ou dados do dispositivo móvel.<p>
`Métrica`: a aplicação possui mecanismos que garantem a integridade da informação?<p>
a) Não (valor = 0)<p>
b) Sim, mas não são suficientes (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>
<br>
 
> Total avalidado = 10<p>
> Característica de peso 1 portanto:<p>
> Somatório das subcaracterísticas = 10<p>
---

7. **Manutenibilidade**<br>
- Modularidade: a aplicação é composta de componentes (ou blocos de construção, ou módulos), ou seja, caso haja mudança em algum componente, o impacto será mínimo em outros componentes.<p>
`Métrica`: a aplicação possui arquitetura em camadas?<p>
a) Não (valor = 0)<p>
b) Sim (valor = 5)<p>
Total = 5<p>

- Reusabilidade: pois a aplicação poderá ser modificada de forma eficaz e eficiente, sem introduzir defeitos ou degradar a qualidade do produto existente.<p>
`Métrica`: o software poderá ser refatorado, sem necessidade de mudar o seu comportamento, visando a melhoria contínua?<p>
a) Não (valor = 0)<p>
b) Sim, mas será necessário realizar ajustes (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>

- Modificabilidade: pois a aplicação poderá ser modificada de forma eficaz e eficiente, sem introduzir defeitos ou degradar a qualidade do produto existente.<p>
`Métrica`: o software poderá ser refatorado, sem necessidade de mudar o seu comportamento, visando a melhoria contínua?<p>
a) Não (valor = 0)<p>
b) Sim, mas será necessário realizar ajustes (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>
<br>

> Total avalidado = 15<p>
> Característica de peso 1 portanto:<p>
> Somatório das subcaracterísticas = 10<p>
---

8. **Portabilidade**<br>
- Adaptabilidade: a aplicação pode ser adaptada de forma eficaz e eficiente para hardware ou software ou outros ambientes operacionais ou de uso diferentes ou em evolução.<p>
`Métrica`: a aplicação poderá ser utilizada em qualquer modelo de dispositivo móvel, em qualquer versão e em qualquer sistema operacional?<p>
a) Não (valor = 0)<p>
b) Sim, mas parcialmente (valor = 2)<p>
c) Sim (valor = 3)<p>
Total = 5<p>
<br>

> Total avalidado = 5<p>
> Característica de peso 2, portanto:<p>
> Somatório das subcaracterísticas = 10<p>
---
<br> 
Serão medidas então 16 subcaracterísticas. A qualidade máxima que a aplicação poderá obter será de 120 pontos. A aplicação será considerada, em termos de qualidade de software:<p>
<br>
- Muito boa: mais de 100 pontos<p>
- Boa: entre 100 a 80 pontos<p>
- Regular: entre 79 a 50 pontos<p>
- Ruim: menos de 50 pontos<p>

 

 


