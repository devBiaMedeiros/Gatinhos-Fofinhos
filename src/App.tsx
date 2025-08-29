import "./App.css";
import MaktubImg from "./assets/Maktub.jpg";
import NinhoImg from "./assets/Ninho.jpg";
import PavarottiImg from "./assets/Pavarotti.jpg";
import PatrickImg from "./assets/Patrick.jpg";
import MartinImg from "./assets/Martin.jpg";
import Card from "./components.tsx/Card";

function App() {
  return (
    <>
      <h2>Família Bastos Correa</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Card title="Maktub" foto={MaktubImg} footer={<span>Idade: 7 anos</span>}>
        Medroso e adora se esconder em lugares improváveis.
        
      </Card>

      <Card title="Ninho" foto={NinhoImg} footer={<span>Idade: 7anos</span>}>
        Sempre curioso, adora um carinho e uma boa aventura.
      </Card>

      <Card title="Pavarotti" foto={PavarottiImg} footer={<span>Idade:7 anos</span>}>
        Preguiçoso e carinhoso, é o rei das sonecas.
      </Card>

      <Card title="Patrick" foto={PatrickImg} footer={<span>Idade: 7 anos</span>}>
        Ciumento e protetor, adora estar perto de quem ama.
      </Card>

      <Card title="Martin" foto={MartinImg} footer={<span>Idade: 6 anos</span>}>
        Desconfiado e independente, mas muito leal.
      </Card>
      </div>
    </>
  )
}

export default App;
