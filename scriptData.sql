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

