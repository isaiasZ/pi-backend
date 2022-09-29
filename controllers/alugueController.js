const createError = require('http-errors');

const alugue = [
    {
        "id": 1,
        "retirada": "11/06/2022",
        "devolução": "22/06/2022",
        "valor": "R$220,00",
        "situação": "Pago",
    },
    {
        "id": 2,
        "retirada": "28/04/2022",
        "devolução": "28/07/2022",
        "valor": "R$130,00",
        "situação": "Pago",
    },
    {
        "id": 3,
        "retirada": "18/02/2022",
        "devolução": "19/08/2022",
        "valor": "R$360,00",
        "situação": "Atrasado",
    },
];

function listarAlugue(req, res, next) {
    res.json(alugue);
}

function listarAluguePorId (req, res, next) {
    const localizar = alugue.find((item) => item.id === Number(req.params.id));
    if (!localizar) {
      return res.status(404).json({ msg: "Estoque não localizado" });
    }
    res.json(localizar);
}

function atualizarAlugue (req, res, next) {
    const localizar = alugue.find(
      (alugue) => alugue.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ msg: "carro não encontrado" });
    }
    localizar.retirada = req.body.retirada;
    localizar.devolução = req.body.devolução;
    localizar.valor = req.body.valor;
    localizar.situação = req.body.situação;
    res.status(200).json({ msg: "carro atualizado com sucesso" });
  }
  function criarAlugue (req, res, next){
    const novaoAlugue  = {
    id: alugue[alugue.length-1].id + 1,
    retirada: req.body.retirada,
    devolução: req.body.devolução,
    valor: req.body.valor,
    situação: req.body.situação,
    }
    alugue.push(novaoAlugue);
    res.status(201).json(novaoAlugue);
}

function removerAlugue (req, res, next) {
    const localizar = alugue.findIndex(alugue => alugue.id === Number(req.params.id));
    if(localizar < 0){
            return res.status(404).json({msg:"carro não existe"});
    }
    alugue.splice(localizar, 1);
    res.status(200).json({msg:"carro excluído com sucesso"});
}

module.exports = { listarAlugue, listarAluguePorId, criarAlugue, atualizarAlugue, removerAlugue};