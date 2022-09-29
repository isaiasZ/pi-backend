const createError = require('http-errors');

const estoque = [
    {
        "id": 1,
        "compacto": "2014/15",
        "Modelo": { "nome": "carro 1" },
        "avaliação": "6.8",
        "Preço": "R$162,40",
    },
    {
        "id": 2,
        "compacto": "2016/17",
        "Modelo": { "nome": "carro 2" },
        "avaliação": "8.8",
        "Preço": "269,98",
    },
    {
        "id": 3,
        "compacto": "2019/20",
        "Modelo": { "nome": "carro 3" },
        "avaliação": "7.6",
        "Preço": "164,01",
    },

];

function listarEstoque (req, res, next) {
    res.json(estoque);
}

function listarEstoquesPorId (req, res, next) {
    const localizar = estoque.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ msg: "Estoque não localizado" });
    }
    res.json(localizar);
}

function atualizarEstoques(req, res, next) {
    const localizar = estoque.find(
      (estoques) => estoques.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ msg: "Estoque não encontrado" });
    }
    localizar.compacto = req.body.compacto;
    localizar.Modelo = req.body.Modelo;
    localizar.avaliação = req.body.avaliação;
    localizar.Preço = req.body.Preço;
    res.status(200).json({ msg: "Cobrança atualizado com sucesso" });
  }
  function criarEstoque (req, res, next){
    const novoEstoque = {
    id: estoque[estoque.length-1].id + 1,
    compacto: req.body.compacto,
    Modelo: req.body.Modelo,
    avaliação: req.body.avaliação,
    Preço: req.body.Preço,
    }
    estoque.push(novoEstoque);
    res.status(201).json(novoEstoque);
}

function removerEstoques (req, res, next) {
    const localizar = estoque.findIndex(estoques => estoques.id === Number(req.params.id));
    if(localizar < 0){
            return res.status(404).json({msg:"Estoque não existe"});
    }
    estoque.splice(localizar, 1);
    res.status(200).json({msg:"Estoque deletado com sucesso"});
}

module.exports = { listarEstoque, listarEstoquesPorId, criarEstoque, atualizarEstoques, removerEstoques };