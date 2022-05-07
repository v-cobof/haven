CREATE TABLE Usuario(
   idUsuario     INTEGER  NOT NULL PRIMARY KEY 
  ,nome          VARCHAR(100) NOT NULL
  ,cpf           INTEGER  NOT NULL
  ,telefone      INTEGER  NOT NULL
  ,email         VARCHAR(50) NOT NULL
  ,senha         VARCHAR(50) NOT NULL
  ,administrador BIT  NOT NULL
);
INSERT INTO Usuario(idUsuario,nome,cpf,telefone,email,senha,administrador) VALUES (1,'Administrador da Silva',12345678912,11912345678,'adm_silva@email.com','admin',1);
INSERT INTO Usuario(idUsuario,nome,cpf,telefone,email,senha,administrador) VALUES (2,'João Pereira',98765432121,11987654321,'joao.pereira23@email.com','joao123',0);
INSERT INTO Usuario(idUsuario,nome,cpf,telefone,email,senha,administrador) VALUES (3,'Maria Lucia',33344455567,11999999999,'marilu@email.com','ma12',0);
INSERT INTO Usuario(idUsuario,nome,cpf,telefone,email,senha,administrador) VALUES (4,'Joana Silva',33344455690,1198888888,'joanasilva@email.com','jo123',0);
INSERT INTO Usuario(idUsuario,nome,cpf,telefone,email,senha,administrador) VALUES (5,'Kleber Machado',11111111111,11911111111,'kleber@email.com','kl123',0);
