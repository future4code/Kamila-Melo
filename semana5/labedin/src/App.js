import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaImagem from './images/Kamila.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaImagem}
          nome="Kamila" 
          descricao="Oi, eu sou a Kamila. Sou aluna da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno 
          imagem="https://i.pinimg.com/564x/ee/cf/b4/eecfb44035adc837709f26d0e8d72173.jpg"
          texto = "Email:"
          email = "kamilamelo5@hotmail.com"
        />

        <CardPequeno 
          imagem="https://i.pinimg.com/564x/31/aa/b2/31aab2e2b860315397d621ab0344ee5e.jpg"
          texto = "Endereço:"
          endereco = "Rua Pedro Américo"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluna do curso Web Full Stack" 
        />
        
        <CardGrande 
          imagem="https://www.fsfx.com.br/csfx/images/unidade-colegio.jpg" 
          nome="CSFX" 
          descricao="Auxiliar de Secretaria Escolar/Financeiro" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
