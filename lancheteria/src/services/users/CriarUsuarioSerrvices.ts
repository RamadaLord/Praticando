

interface CriarUsuario{
    nome: string,
    email:string,
    senha:string
}

class CriarUsuarioServices {

  async excecute({ nome, email, senha }:CriarUsuario) {


    console.log(nome)
  }
}

export { CriarUsuarioServices };
