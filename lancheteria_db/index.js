const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
  host: "mysql://root@localhost:3306/lancheteria",
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
  const cpf_cnpj = req.body.cpf_cnpj;
  const rg_ie = req.body.rg_ie;
  const tel_fixo = req.body.tel_fixo;
  const tel_cel = req.body.tel_cel;
  const rua = req.body.rua;
  const complemento = req.body.complemento;
  const cep = req.body.cep;
  const bairro = req.body.bairro;
  const cidade = req.body.cidade;
  const estado = req.body.estado;

  console.log(
    cod_cliente,
    nome,
    cpf_cnpj,
    rg_ie,
    tel_cel,
    tel_fixo,
    rua,
    complemento,
    bairro,
    cidade,
    estado
  );

  db.query(
    "INSERT INTO cliente ( cod_cliente, nome,cpf_cnpj,rg_ie, tel_fixo, tel_cel, rua, complemento, cep, bairro, cidade, estado) VALUE(?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      cod_cliente,
      nome,
      cpf_cnpj,
      rg_ie,
      tel_cel,
      tel_fixo,
      rua,
      complemento,
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

app.listen(4444, () => {
  console.log("servidor rodando na porta 4444");
});

// Mandando para o banco de dados//
