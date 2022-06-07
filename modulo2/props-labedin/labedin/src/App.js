import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './img/perfil.png';
import seta from './img/down-arrow.png';
import email from './img/email.png';
import localizacao from './img/localizacao.jpg';
import logoProvecom from './img/provecom-logo.png';
import logoLabenu from './img/labenu.jpg';
import logoGit from './img/github.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ perfil } 
          nome="Joclelson Rodrigues" 
          descricao="Oi, eu sou o Joclelson. Sou técnico em informática a mais de 10 anos. Atualmente estou migrando de carreira para area da programação, estou estudando 
          Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem= { seta }
          texto="Ver mais"
        />

        <CardPequeno 
          imagem= { email }
          texto = 'jocleelson.159@hotmail.com'
        />
        <CardPequeno 
          imagem = { localizacao }
          texto = 'Rua A nº 09, Vila Pioneira - Tucuruí-PA'
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= { logoProvecom } 
          nome="Provecom Telecomunicações LTDA" 
          descricao="Técnico em Informática e Redes" 
        />
        <h2>Formação academica</h2>
        <CardGrande 
          imagem= { logoLabenu }
          nome="Labenu" 
          descricao="Web Full Stack" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>

        <ImagemButton 
          imagem= { logoGit }
          texto="GitHub" 
          link='https://github.com/Joclelsonr'
        /> 

        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
          link='https://pt-br.facebook.com/joclelsonr'
        />

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
          link='https://twitter.com/joclelsonr'
        /> 

      </div>
    </div>
  );
}

export default App;
