 create table cliente(
    id serial primary key,
    nome TEXT not null,
    email TEXT not null,
    senha TEXT not null,
);
 
create table estacionamento(
    id serial primary key,
    external_id TEXT not null,
    nome TEXT not null,
    vagas INT not null,
    valor_carro DECIMAL not null,
    valor_moto DECIMAL not null,
);
 
create table endereco(
    rua TEXT not null,
    bairro TEXT not null,
    cidade TEXT not null,
    estado TEXT not null,
    cep TEXT not null,
    foreign key (id_estacionamento) references estacionamento (id),
);
 
create table avaliacao(
    comentario TEXT not null,
    nota TEXT not null,
    foreign key (id_estacionamento) references estacionamento (id),
    foreign key (id_cliente) references cliente (id),
);
