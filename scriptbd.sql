Create table utilizador(
    userID serial primary key,
    nome varchar not null,
    contacto varchar not null,
    email varchar not null,
    pass varchar not null,
    isAdmin boolean not null
);
create table morada(
    moradaID serial primary key,
    rua varchar not null,
    cidade varchar not null,
    codigo_postal varchar not null,
    pais varchar not null,
    descricao varchar
);
create table moradaUtilizador(
    moradaID int,
    userID int,
    primary key(moradaID,userID),
    foreign key(moradaID) references morada(moradaID),
    foreign key(userID) references utilizador(userID)
);
Create table categoria(
    categoriaID serial primary key,
    nome varchar not null
);
Create table produto(
    produtoID serial primary key,
    nome varchar not null,
    preco decimal not null,
    desconto decimal not null,
    stock int not null,
    imagens varchar,
    descricao varchar not null
);
Create table categoriaProduto(
    categoriaID int,
    produtoID int,
    primary key(categoriaID,produtoID),
    foreign key (categoriaID) references categoria(categoriaID),
    foreign key(produtoID) references produto(produtoID)
);
Create table review(
    reviewID serial primary key,
    titulo varchar not null,
    descricao varchar not null,
    rating int not null,
    _data timestamp not null,
	produtoID int not null,
    foreign key(produtoID) references produto(produtoID)
);
create table estadoTransacao(
    estadoTransacaoID serial primary key,
    nome varchar
);
create table metodoPagamento(
    metodoPagamentoID serial primary key,
    nome varchar
);

create table estadoCompra(
    estadoCompraID serial primary key,
    nome varchar not null
);
create table transacao(
    transacaoID serial primary key,
    criadoEm timestamp not null,
	metodoPagamentoID int not null,
	estadoTransacaoID int not null,
    foreign key(metodoPagamentoID) references metodoPagamento(metodoPagamentoID),
    foreign key(estadoTransacaoID) references estadoTransacao(estadoTransacaoID)
);
create table compra(
   compraID serial primary key,
   desconto decimal,
   portes decimal not null,
   total decimal,
   criadaEm timestamp not null,
   descricao varchar,
	userID int not null,
	moradaID int not null,
	estadoID int not null,
	estadoCompraID int not null,
	transacaoID int not null,
	foreign key(transacaoID) references transacao(transacaoID),
   foreign key(userID) references utilizador(userID),
   foreign key(moradaID) references morada(moradaID),
   foreign key(estadoCompraID) references estadoCompra(estadoCompraID)
);
create table linhaCompra(
    compraID int,
    produtoID int,
    quantidade int,
    primary key(compraID,produtoID),
    foreign key (compraID) references compra(compraID),
    foreign key (produtoID) references produto(produtoID)
);

Create table carrinho(
	carrinhoID serial primary key,
	descricao varchar not null,
	userID int not null,
  foreign key(userID) references utilizador(userID)
);
create table linhaCarrinho(
    carrinhoID int,
    produtoID int,
    quantidade int,
    primary key(carrinhoID,produtoID),
    foreign key (carrinhoID) references carrinho(carrinhoID),
    foreign key (produtoID) references produto(produtoID)
);