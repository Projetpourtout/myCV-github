interface CV {
    Nom: string;
    Poste: string;
    Competences:string[];
    Education: { Université: string; Departement:string;  Année: string }[];
    LANGUES:string;
    COORDONNEES: {
        Email: string;
        Telephone: string;
        Address: string;
    };
  }
  
  const myCV: CV = {
    Nom: "THIERNO ABDOULAYE BARRY",
    Poste:"Developpeur",
    Competences: ["TypeScript", "JavaScript", "SCSS", "HTML", "CSS"],
    Education: [
        { Université: "Université Barack Obama de Guinée", Departement: "Licence en Genie Informatique", Année: "2021-2025" },
        { Université: "G.S Abdoul Aziz Diguiline", Departement: "BACCALAUREAT UNIQUE(BAC)", Année: "2020-2021" },
        { Université: "G.S Hadjia Mariama Diallo", Departement: "BREVET D'ETUDE DU PREMIER CYCLE(BEPC)", Année: "2017-2018" },
    ],
    COORDONNEES: {
        Email: " barrythiernoabdoulaye177@gmail.com ",
        Telephone: " 625-11-18-30 ",
        Address:" KOUNTIA NORD "
    },
    LANGUES:"Français, Anglais(en apprentissage)"

  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = `
        <div class="cv">
         <div class="pour__header">
          <h1>${myCV.Nom}</h1>
          <h2>${myCV.Poste}</h2>
          </div>
         
          <h3>Competences</h3>
          <ul>${myCV.Competences.map(skill => `<li>${skill}</li>`).join("")}</ul>
          <h3>Education</h3>
          <ul>
            ${myCV.Education.map(edu => `<p>${edu.Departement} - ${edu.Université} ${edu.Année}</p>`).join('')}
          </ul>
          <div class="pour__lacom">
            <div class="section">
            <h3>LANGUES</h3>
          <p>${myCV.LANGUES}</p>
             </div>
             <div class="section">
          <h3>COORDONNEES</h3>
          <p><span> Email:${myCV.COORDONNEES.Email}</span></p>
          <p>telephone:${myCV.COORDONNEES.Telephone}</p>
          <p>Address:${myCV.COORDONNEES.Address}</p>
          </div>
          </div>
        </div>
      `;
    }
  });
  