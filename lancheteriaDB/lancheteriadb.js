const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "lancheteria",
});

// app.get("/", (req, res) => {
//   res.send( "Node pro no Senac Bauru, com o Professor Luciano");
// });

app.post("/cadastroclientes", (req, res) => {
  //post = input
  const cod_cliente = req.body.cod_cliente;
  const nome = req.body.nome;
  const telefone_Fixo = req.body.telefone_Fixo;
  const telefone_Celular = req.body.telefone_Celular;
  const rua = req.body.rua;
  const complemento = req.body.complemento;
  const cep = req.body.cep;
  const bairro = req.body.bairro;
  const cidade = req.body.cidade;
  const estado = req.body.estado;

  console.log(
    cod_cliente,
    nome,
    telefone_Fixo,
    telefone_Celular,
    rua,
    complemento,
    cep,
    bairro,
    cidade,
    estado
  );

  db.query(
    "INSERT INTO cliente ( cod_cliente, nome, telefone_Fixo, telefone_Celular, rua, complemento, cep, bairro, cidade, estado) VALUE(?,?,?,?,?,?,?,?,?,?)",
    [
      cod_cliente,
      nome,
      telefone_Fixo,
      telefone_Celular,
      rua,
      complemento,
      cep,
      bairro,
      cidade,
      estado,
    ],
    (err) => {
      if (err) {
        res.send(err);
      }
      res.send({ msg: "Dados Cadastrados Com Sucesso" });
    }
  );
});

app.get("/visualizadados", (req, res) => {
  db.query("SELECT * FROM cliente", (err, result) => {
    if (err) {
      res.send({ msg: "Dados Não Encontrados" });
    }
    res.send(result);
  });
});

app.get("/visualizadadosunicos/:id", (req, res) => {
  const { id } = req.params;

  // console.log(id)
  db.query(
    "SELECT * FROM cliente  WHERE cod_cliente = ?",
    [id],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

app.put("/alteraDados/:id", (req, res) => {
  const { id } = req.params;
  const nome = req.body.nome;
  console.log(id);
  db.query(
    "UPDATE cliente SET nome = ? WHERE cod_cliente = ?",
    [id, nome],
    (err) => {
      if (err) {
        res.send(err);
      }
      res.send({ msg: "Alterados com sucesso" });
    }
  );
});

app.delete("/deleteUser/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  db.query("DELETE FROM cliente  WHERE id_cliente = ?", [id], (err) => {
    if (err) {
      res.send(err);
    }
    res.send({ msg: "Dados Deletados" });
  });
});

app.listen(3333, () => {
  console.log("servidor rodando na porta 3333");
});

// Mandando para o banco de dados//
