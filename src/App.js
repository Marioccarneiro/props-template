import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Mario";
  const sobrenome = " Carneiro";

  const apresentaGaragem = (nome) => alert("Boas vindas a garagem de " + nome);
  // alert(`Boas vindas a garagem de ${nome}`)

  const nome2 = "Karina";

  const dadosCarro = {
    nome: "Twingo",
    ano: 2003,
    cor: "Verde Abacate",
    flex: false
  };

  const dadosCarro2 = {
    nome: "Fusca",
    ano: 1995,
    cor: "Azul",
    flex: true
  };

  const dadosCarro3 = {
    nome: "Onix",
    ano: 2019,
    cor: "Vermelho",
    flex: true
  };

  const dadosCarro4 = {
    nome: "Crossfox",
    ano: 2010,
    cor: "Amarelo",
    flex: false
  };

  return (
    <div className="App">
      {/* <Garagem
        nome={nome}
        sobrenome={sobrenome}
        apresentaGaragem={apresentaGaragem}
        dadosCarro={dadosCarro}
      /> */}
      <Garagem
        nome={nome2}
        apresentaGaragem={apresentaGaragem}
        dadosCarro={dadosCarro}
        dadosCarro2={dadosCarro2}
        dadosCarro3={dadosCarro3}
        dadosCarro4={dadosCarro4}
      />
    </div>
  );
}