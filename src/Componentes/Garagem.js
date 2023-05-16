import Carro from "./Carro";

function Garagem({
  nome,
  sobrenome,
  apresentaGaragem,
  dadosCarro,
  dadosCarro2,
  dadosCarro3,
  dadosCarro4
}) {

  if(!sobrenome) sobrenome = ""

  return (
    <div>
      <h1>Garagem de {nome + sobrenome}</h1>
      <Carro dadosCarro={dadosCarro}/>
      <Carro dadosCarro={dadosCarro2}/>
      <Carro dadosCarro={dadosCarro3}/>
      <Carro dadosCarro={dadosCarro4}/>

      <button onClick={() => apresentaGaragem(nome + sobrenome)} >Botao</button>
    </div>
  );
}

export default Garagem;
