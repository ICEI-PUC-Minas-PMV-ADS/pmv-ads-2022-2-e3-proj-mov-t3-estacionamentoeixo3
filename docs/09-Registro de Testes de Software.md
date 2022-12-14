# Registro de Testes de Software

O relatório a seguir apresenta os testes realizados pela equipe baseado no plano de testes de software descrito no item 8 da documentação do projeto.

Nesta etapa de implementação do projeto serão testados através de estratégia de caso de uso e funcional, as seguintes funcionalidades: 

•	Caso de teste CT-01 – O sistema deve permitir que o cliente crie uma conta para realizar um cadastro simples, com exigência de nome e e-mail, que permitirá efetuar login e acessar as funcionalidades do sistema.

![CT01](https://user-images.githubusercontent.com/88891675/198856469-c4db02f4-1010-4299-894a-ee81b3d16f60.jpg)

Em anexo, as imagens ilustrativas que demonstram passo a passo a utilização das funcionalidades disponibilizadas nesta etapa do desenvolvimento do projeto. 

1.1 Após acessar o aplicativo através de dispositivo móvel conectado à internet, o usuário seleciona a opção “cadastre”:

![1](https://user-images.githubusercontent.com/90852295/194711531-45b1a827-b9d6-487c-ab09-fb569c864d87.png)

1.2 O usuário é direcionado para a tela de cadastro:

![2](https://user-images.githubusercontent.com/90852295/194711660-5c898d2a-c282-4379-a8f2-8408a3aef19d.png)

1.3 Em seguida, o usuário insere as informações solicitadas, sendo estas, nome, e-mail e senha, clica em "cadastrar":

![3](https://user-images.githubusercontent.com/90852295/194711672-9f55106b-33f0-4e39-b7b9-57fdcdf95bd0.png)

1.4 O sistema informa ao usuário que o cadastro foi realizado:

![4](https://user-images.githubusercontent.com/90852295/194711737-9d481a5d-dd4c-4392-af4b-8eaf87cfcb21.png)

1.5 O sistema direciona o usuário para a tela de login:

![5](https://user-images.githubusercontent.com/90852295/194711752-7d3e4541-af4f-4588-bd37-eb4ab7abd1b1.png)

1.6 O usuário insere e-mail e senha, e clica em entrar. O cliente foi direcionado para o menu do da conta criada:

![6](https://user-images.githubusercontent.com/90852295/194711773-5ee370cb-d26c-425c-bf4e-1a40327ae515.png)

1.7 O usuário clica em entrar e é direcionado para o menu do sistema:

![7](https://user-images.githubusercontent.com/90852295/194711793-b1ce0683-ef61-4393-9610-ac5cacf45ebc.png)

1.8 O usuário pode optar em alterar o tema do menu entre claro e escuro: 

![8](https://user-images.githubusercontent.com/90852295/194711848-eaf94b25-1442-456b-b5bf-8ad180e8188c.png)

1.9 O usuário poderá editar as informações pessoais da conta criada:

![edit1](https://user-images.githubusercontent.com/90852295/204061277-bff23231-1a05-4274-abfa-b28410f6cf95.png)

1.10 O usuário deverá informar os dados da conta:

![edit2](https://user-images.githubusercontent.com/90852295/204061317-e12d308c-907b-4ab8-8ee7-9e9d8e9d0ecf.png)

1.11 O usuário deverá informar as alterações desejadas e clicar em editar:

![edit3](https://user-images.githubusercontent.com/90852295/204061346-53b70a1a-956b-400a-a550-9048d0566110.png)

1.12 O usuário recebará notificação de que as atualizações foram realizadas:

![edit4](https://user-images.githubusercontent.com/90852295/204061398-0faf332c-9a25-45b2-a998-549436c153b5.png)

<br>

• Caso de teste CT 02 - O sistema deve apresentar um mecanismo de busca que permita ao cliente localizar estacionamentos cadastrados que possuam vagas para estacionamento imediato de acordo com sua localização.

![CT02](https://user-images.githubusercontent.com/88891675/198892902-602fc032-3a39-4208-b204-edceafd96a6f.jpg)

2.1 –  Usuário efetuou login no sistema: 

![login](https://user-images.githubusercontent.com/90852295/198855997-ca651f78-0646-41ff-8dce-4382c4c6f3ea.png)

2.2 – Usuário foi direcionado para o menu com os estacionamentos disponíveis na região:

![menu mapas](https://user-images.githubusercontent.com/90852295/198856000-02a0e087-0441-4cd7-a456-7a04830c87d1.png)

2.3 – Usuário escolheu estacionamento desejado: 

![estacionamentos](https://user-images.githubusercontent.com/90852295/198856022-6cb9df1b-0217-4925-8d6c-87ba4294041f.png)

<br>

• Caso de teste CT 03 - O sistema deve permitir ao cliente visualizar o valor que cobrado pelo estacionamento buscado ou selecionado:

![CT03](https://user-images.githubusercontent.com/90852295/205511543-8ab39bbf-5c66-467f-a3be-f56b0d8ab25c.png)

3.1 O usuário visualiza o valor cobrado pelo estacionamento:

![tela](https://user-images.githubusercontent.com/90852295/205511502-dffdf316-7096-4fae-b0b9-5adb77e1a7ff.jpeg)

<br>

• Caso de teste CT 04 -O sistema deve permitir, a partir da localização geográfica, que o cliente seja redirecionado ao aplicativo de navegação do dispositivo móvel:

![CT04](https://user-images.githubusercontent.com/88891675/198892913-6e086ee4-ae56-4c7a-bbae-15bd2a0abdc4.jpg)

4.1 – Usuário acessou a página de login do sistema:

![1](https://user-images.githubusercontent.com/90852295/198856151-db17d70c-b330-4d57-9b1e-4a5644fff277.png)

4.2 Usuário preenche os campos com os seus dados e clica no botão “Entrar”:

![2](https://user-images.githubusercontent.com/90852295/198856161-0ee21608-4ed9-4e82-992e-cd16052a58f0.png)

4.3 Após entrar, o usuário é redirecionado ao menu do aplicativo, onde conterá um mapa que exibirá estacionamentos de acordo com a localização do usuário, captada pelo localizador geográfico do seu dispositivo móvel

![3](https://user-images.githubusercontent.com/90852295/198856129-ab25d50b-8a72-4b5c-87c8-6675437ad6be.png)

<br>

• Caso de teste CT 05 – O sistema deve permitir que o cliente avalie um estacionamento utilizado por ele:

![CT05](https://user-images.githubusercontent.com/90852295/204060421-191c73d1-78df-44bc-a268-41254654efb6.png)

5.1 Após a utilização do serviço, o cliente poderá enviar feedback, sendo a avaliação representada pelo número de estrelas atribuído ao estacionamento:

![feed1](https://user-images.githubusercontent.com/90852295/204060785-558d1ec5-c20f-4466-ac1a-1ae11f306807.png)

5.2 O usuário deve marcar as estrelas conforme sua avaliação: 

![feed2](https://user-images.githubusercontent.com/90852295/204060989-a7c98495-a588-468c-bcc3-19c079829821.png)

• Caso de teste CT 06 – O sistema deve permitir que o cliente faça comentários sobre um estacionamento utilizado por ele:

![CT06](https://user-images.githubusercontent.com/90852295/204060381-3e752144-202e-47e6-b132-e23df7365ce9.png)

6.1 O cliente pode inserir comentários ao enviar o feedback para o estaciomento utilizado:

![feed3](https://user-images.githubusercontent.com/90852295/204061061-a74f944e-a608-47bf-bc44-64b3fb1337ae.png)

6.2 O cliente pode vizualizar comentários enviados por outros usuários:

![feed4](https://user-images.githubusercontent.com/90852295/204061111-778fbea9-0c70-4b09-9fa8-b66132a4a4a9.png)

• Caso de teste CT 07 - O sistema deve permitir o cadastro simplificado de empresas de estacionamentos:

![CT07](https://user-images.githubusercontent.com/88891675/198892922-5421c42a-5b84-4188-9536-f0e45678dd6a.jpg)

7.1 –  Usuário acessou a página de cadastro no sistema: 

![cadastro estac](https://user-images.githubusercontent.com/90852295/198856084-bce02622-3abb-48fc-b896-db9837a98eb7.png)

7.2 Usuário foi direcionado para o menu com formulário para preenchimento do cadastro:

![dados cadastro](https://user-images.githubusercontent.com/90852295/198856085-3ddc729b-b732-47a6-ac40-98a99f1cd1b3.png)

<br>

## Avaliação

Ao final, a equipe constatou que as funcionalidades pretendidas nesta fase de implementação do projeto atenderam às expectativas almejadas, ressalvadas as devidas modificações que se farão necessárias no decorrer do desenvolvimento das demais funcionalidades, como forma de melhoria da implementação.

