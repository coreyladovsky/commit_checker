import React, { Component } from 'react';
import axios from 'axios';
import { USER } from './config/config';
// import './App.css';

class App extends Component {
  state =
  {
    "Isa Alvarado": "isaink/Web_Final_Practical",
    "Jonathan Andrade": "xpectro93/webfinal",
    "Erick Arellano": "earellano1719/technicalFinal",
    "Jonelle Bain": "jbain424/WebFinal",
    "Jonathan Bayne": "baynejd/Web_Final_Practical",
    "Treagan Birbal": "treaganbirbal/Web_Final_Exam",
    "Andres Cabrera": "acabrera100/Web_Final_Practical",
    "Jonathan Erquinigo": "https://github.com/jerquinigo/unit6FinalExamEarWormReport",
    "Evgeniya Ezhova": "https://github.com/evgeniyaezhova/EarwormReport",
    "Diana Gaona": "https://github.com/dianacgaona/web_final_practical",
    "Jung Rae Jang": "https://github.com/jungraejang/technical_assessment_practical",
    "Morteza Khaki": "https://github.com/khakimorteza/Comprehensive-Technical-Assessment-Practical",
    "Andrew Kil": "https://github.com/Andrew-Kil/Web_Final_Practical",
    "Kelly Liang": "https://github.com/kellyliang7/Web_Final_Practical",
    "Nicolle Loyaza": "https://github.com/NikkiVee/EarWorm",
    "Jean Max Mezalon": "https://github.com/jmezalon/Max_Mezalon_Final_Practical",
    "Mateo Navarrete": "https://github.com/mateo-navarrete/finally",
    "Jacky Ong": "https://github.com/JJGITTY2018/Web_Final_Private",
    "Deyvi Ortiz": "https://github.com/SurgamSurgam/web_final_practical",
    "Tyson Pan": "https://github.com/ThaiSonP/finalAssesment",
    "Alex Park": "https://github.com/ajinsoopark/Final-Exam",
    "Thomas Perez": "https://github.com/Jevit01/WEB-FINAL-EXAM",
    "Wynter Reid": "https://github.com/wynterreid/Finalllll",
    "Muna Sharma": "https://github.com/munarsharma/comprehensive-assessment",
    "T'Keya Stevens": "https://github.com/Pixelynx/unit6test_TKeyaStevens",
    "Carina Taveras": "https://github.com/tCarina/earwormapp",
    "Michell Tejada": "https://github.com/mitejada/Web_Final_Practical",
    "Nielene Thomas": "https://github.com/Nielene/Unit_5_Final",
}
  componentDidMount() {
    axios({
      method: "get",
      url: "https://api.github.com/repos/mateo-navarrete/finally/commits",
      auth: {
        username: USER.NAME,
        password: USER.PASSWORD
      }
    })
    .then(res => {
      debugger
    })
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
