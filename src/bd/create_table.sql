create table users(
    id serial,
    name_user text not null,
    email text not null,
    pass text not null,
);

create table estacionamento(
    id serial primary key,
    park_name text not null,
    vagas int,
);

create table endereco(
    zip_code text,
    address text,
    city text,
    state text,
    foreign key (park_id) references estacionamento (id)
);
