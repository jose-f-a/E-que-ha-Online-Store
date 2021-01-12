INSERT INTO categoria(nome) values('Casa de banho');
INSERT INTO categoria(nome) values('Interior');
INSERT INTO categoria(nome) values('Jardim');
INSERT INTO categoria(nome) values('Cozinha');
INSERT INTO categoria(nome) values('Casa inteligente');
INSERT INTO categoria(nome) values('Mobilia');
INSERT INTO categoria(nome) values('Criança');
INSERT INTO categoria(nome) values('Eletrodomésticos');
INSERT INTO categoria(nome) values('Iluminação');
INSERT INTO categoria(nome) values('Lazer e viagem');
INSERT INTO categoria(nome) values('Verão');
INSERT INTO categoria(nome) values('Inverno');

INSERT INTO produto(nome,preco,desconto,stock,descricao) values('VÅGSJÖN-Branco',9,0,3,'Lençol de banho, branco100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) values('VÅGSJÖN-Azul',9,0,3,'Lençol de banho, azul escuro100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) values('VÅGSJÖN-Cinza',9,0,3,'Lençol de banho, cinza escuro100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) values('VÅGSJÖN-Roxo',9,0,3,'Lençol de banho, roxo100x150 cm');

INSERT INTO categoriaproduto(produtoid,categoriaid) values(16,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(17,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(18,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(19,2);

INSERT INTO morada(rua,cidade,codigo_postal,pais,descricao)
	VALUES('Rua 25 Abril','Guimarães','4835-111','Portugal','Perto de quem vai')
INSERT INTO moradautilizador(moradaid,userid) values(1,1)

INSERT INTO morada(rua,cidade,codigo_postal,pais,descricao)
	VALUES('Rua Da descida','Pé na cova','3412-111','Portugal','Longe de tudo')
INSERT INTO moradautilizador(moradaid,userid) values(2,1)

INSERT into metodopagamento(nome) values('mbway')
INSERT into metodopagamento(nome) values('multibanco')
INSERT into metodopagamento(nome) values('cartão')


INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('KORNAN-Rosa',7,0,3,'Lençol de banho, rosa100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('KORNAN-Azul Claro',7,0,3,'Lençol de banho, azul claro100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('KORNAN-Cinza',7,0,3,'Lençol de banho, cinz100x150 cm');


INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('HIMLEÅN-Amarelo',15,0,3,'Lençol de banho, amarelo100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('HIMLEÅN-Azul escuro',15,0,3,'Lençol de banho, azul100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('HIMLEÅN-Bege',15,0,3,'Lençol de banho, bege/mescla100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('HIMLEÅN-Cinzento',15,0,3,'Lençol de banho, cinza100x150 cm');
INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('HIMLEÅN-Vermelho',15,0,3,'Lençol de banho, vermelho100x150 cm');

INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('FOSKÅN',9.99,0,3,'Toalha de banho, branco/multicor70x140 cm');

INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('RÖRANDE',6,0,3,'Toalha de banho, branco/multicor70x140 cm');

INSERT INTO produto(nome,preco,desconto,stock,descricao) 
values('KLÄMMIG',2.75,0,3,'Toalha de rosto, verde/branco3 unidades');



INSERT INTO categoriaproduto(produtoid,categoriaid) values(20,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(21,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(22,2);

INSERT INTO categoriaproduto(produtoid,categoriaid) values(23,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(24,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(25,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(26,2);
INSERT INTO categoriaproduto(produtoid,categoriaid) values(27,2);

INSERT INTO categoriaproduto(produtoid,categoriaid) values(28,2);

INSERT INTO categoriaproduto(produtoid,categoriaid) values(29,2);

INSERT INTO categoriaproduto(produtoid,categoriaid) values(30,2);