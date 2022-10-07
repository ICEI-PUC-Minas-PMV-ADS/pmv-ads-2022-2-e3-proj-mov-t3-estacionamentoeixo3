# Arquitetura da Solução
A solução consiste em uma aplicação móvel construída sob tecnologia híbrida que deve ser apta a rodar nos sistemas operacionais Android e IOS. 
A aplicação não é considerada offline first, portanto haverá comunicação com interfaces externas para persistência em banco de dados do servidor remoto.
Contudo, pequenas funcionalidades terão como fonte de dados o armazenamento local do dispositivo. Assim, a camada mais externa da aplicação terá dupla persistência e comunicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

![DiagramDeClasse1](https://user-images.githubusercontent.com/88635266/194168035-f77d7159-4c78-40da-9728-f52b2af91459.jpg)


## Modelo ER

![entidaderelacionamento drawio](https://user-images.githubusercontent.com/88635266/194167981-ba559680-6666-43c6-9965-47f8eaa44690.jpg)

## Esquema Relacional

![Relacional](https://user-images.githubusercontent.com/88635266/194168069-0222220a-24ef-4e6c-a62c-aaebf89ea475.jpg)

## Modelo Físico

Além dos arquivos localizados em src/bd, o modelo físico está assim representado: 

![image](https://user-images.githubusercontent.com/88635266/194170630-f5b9ddd9-9b3d-465a-b4d2-453ec67772dc.png)

## Tecnologias Utilizadas

A aplicação foi desenvolvida nas linguagens Java Script com React Native. O CSS é a linguagem responsável por dar estilo ao projeto. Por sua vez, SQL para o banco de dados remoto e SQlite para o banco de dados do dispositivo.
O ambiente de desenvolvimento foi configurado utilizando como IDE o VS Code com auxílio do Expo para uniformização dos códigos. O Android Studio foi utilizado para emular os dispositivos Android. 
Quanto ao back-end, foi desenvolvido em node.js com o pacote npm express para rodar o servidor. Está hospedado no heroku: https://whypark.herokuapp.com/.
Por fim, utilizamos o GIT como sistema de versionamento de código e o GitHub como plataforma para hospedagem do código fonte da aplicação.

## Hospedagem

A princípio a aplicação rodará em ambiente local com possibilidade de ser hospedada posteriormente na playStore, caso os custos se mostrem viáveis.
O back-end foi criado separadamente e hospedado no Heroku: Cloud Application Platform. Encontra-se online até o presente momento. Como a interface foi hospedada em um plano gratuito, a depender da quantidade de requisições poderá sofrer instabilidade.

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

 

 


