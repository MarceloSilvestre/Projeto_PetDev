import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Animais from "./pages/animais";
import Quiz from "./pages/quiz/quizOptions";
import Sobre from "./pages/sobre";
import Sugestao from "./pages/sugestoes";
import Depoimentos from "./pages/depoimentos";
import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer";
import Breadcrumb from "./componentes/breadcrumb/Breadcrumb";
import Siames from "./pages/animais/Gatos/siames";
import Angora from "./pages/animais/Gatos/angora";
import Persa from "./pages/animais/Gatos/persa";
import BorderCollie from "./pages/animais/Cachorros/bordercollie";
import Pitbull from "./pages/animais/Cachorros/pitbull";
import CanarioBelga from "./pages/animais/Passaros/CanarioBelga";
import Prego from "./pages/animais/Macacos/Prego";
import Sagui from "./pages/animais/Macacos/Sagui";
import CornSnake from "./pages/animais/Cobras/CornSnake";
import Gopher from "./pages/animais/Cobras/Gopher";
import Jiboia from "./pages/animais/Cobras/Jiboia/jiboia";
import ScrollTop from "./componentes/scrollTop/ScrollTop";
import QuizBetta from "./pages/quiz/quizBetta/quizBetta";
import QuizHamster from "./pages/quiz/quizHamster/quizHamster";
import QuizSagui from "./pages/quiz/quizSagui/quizSagui";
import Rottweiler from "./pages/animais/Cachorros/rottweiler";
import GoldenRetriever from "./pages/animais/Cachorros/goldenretriever";
import PastorAlemao from "./pages/animais/Cachorros/pastoralemao";
import ChowChow from "./pages/animais/Cachorros/chowchow";
import Poodle from "./pages/animais/Cachorros/poodle";
import Pinscher from "./pages/animais/Cachorros/pinscher";
import ShihTzu from "./pages/animais/Cachorros/shihtzu";
import Calopsita from "./pages/animais/Passaros/Calopsita/calopsita";
import Periquito from "./pages/animais/Passaros/Periquito/periquito";
import Betta from "./pages/animais/Peixes/Betta/betta";
import Hamster from "./pages/animais/Roedores/Hamster";
import PorquinhoDaIndia from "./pages/animais/Roedores/PorquinhoDaIndia";


function App() {
  return (
    <Router>
      <ScrollTop />
      <Navbar />

      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animais" element={<Animais />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Sugestoes" element={<Sugestao />} />
        <Route path="/Depoimentos" element={<Depoimentos />} />
        <Route path="/Animais/Siames" element={<Siames/>} />
        <Route path="/Animais/Angora" element={<Angora/>} />
        <Route path="/Animais/Persa" element={<Persa/>} />
        <Route path="/Animais/BorderCollie" element={<BorderCollie/>} />
        <Route path="/Animais/Pitbull" element={<Pitbull/>} />
        <Route path="/Animais/CanarioBelga" element={<CanarioBelga/>} />
        <Route path="/Animais/Prego" element={<Prego/>} />
        <Route path="/Animais/Sagui" element={<Sagui/>} />
        <Route path="/Animais/CornSnake" element={<CornSnake/>} />
        <Route path="/Animais/Gopher" element={<Gopher/>} />
        <Route path="/Animais/Jiboia" element={<Jiboia/>} />
        <Route path="/quiz/quizBetta" element={<QuizBetta/>} />
        <Route path="/quiz/quizHamster" element={<QuizHamster/>} />
        <Route path="/quiz/quizSagui" element={<QuizSagui/>} />
        <Route path="/Animais/Rottweiler" element={<Rottweiler/>} />
        <Route path="/Animais/GoldenRetriever" element={<GoldenRetriever/>} />
        <Route path="/Animais/PastorAlemao" element={<PastorAlemao/>} />
        <Route path="/Animais/ChowChow" element={<ChowChow/>} />
        <Route path="/Animais/Poodle" element={<Poodle/>} />
        <Route path="/Animais/Pinscher" element={<Pinscher/>} />
        <Route path="/Animais/ShihTzu" element={<ShihTzu/>} />
        <Route path="/Animais/Betta" element={<Betta/>} />
        <Route path="/Animais/Calopsita" element={<Calopsita/>} />
        <Route path="/Animais/Periquito" element={<Periquito/>} />
        <Route path="/Animais/Porquinho-Da-India" element={<PorquinhoDaIndia/>} />
        <Route path="/Animais/Hamster" element={<Hamster/>} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

