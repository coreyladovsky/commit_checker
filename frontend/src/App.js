import React, { Component } from "react";
import axios from "axios";
import DateDisplay from "./DateDisplay";
import "./App.css";
// import { USERNAME, PASSWORD} from './config/config'


class App extends Component {
  state = {
    allStudents: {
      "Isa Alvarado": "isaink/Web_Final_Practical",
      "Jonathan Andrade": "xpectro93/webfinal",
      // "Erick Arellano": "earellano1719/technicalFinal",
      // "Jonelle Bain": "jbain424/WebFinal",
      // "Jonathan Bayne": "baynejd/Web_Final_Practical",
      // "Treagan Birbal": "treaganbirbal/Web_Final_Exam",
      // "Andres Cabrera": "acabrera100/Web_Final_Practical",
      // "Jonathan Erquinigo": "jerquinigo/unit6FinalExamEarWormReport",
      // "Evgeniya Ezhova": "evgeniyaezhova/EarwormReport",
      // "Diana Gaona": "dianacgaona/web_final_practical",
      // "Jung Rae Jang": "jungraejang/technical_assessment_practical",
      // "Morteza Khaki":
      //   "khakimorteza/Comprehensive-Technical-Assessment-Practical",
      // "Andrew Kil": "Andrew-Kil/Web_Final_Practical",
      // "Kelly Liang": "kellyliang7/Web_Final_Practical",
      // "Nicolle Loyaza": "NikkiVee/EarWorm",
      // "Jean Max Mezalon": "jmezalon/Max_Mezalon_Final_Practical",
      // "Mateo Navarrete": "mateo-navarrete/finally",
      // "Jacky Ong": "JJGITTY2018/Web_Final_Private",
      // "Deyvi Ortiz": "SurgamSurgam/web_final_practical",
      // "Tyson Pan": "ThaiSonP/finalAssesment",
      // "Alex Park": "ajinsoopark/Final-Exam",
      // "Thomas Perez": "Jevit01/WEB-FINAL-EXAM",
      // "Wynter Reid": "wynterreid/Finalllll",
      // "Muna Sharma": "munarsharma/comprehensive-assessment",
      // "T'Keya Stevens": "Pixelynx/unit6test_TKeyaStevens",
      // "Carina Taveras": "tCarina/earwormapp",
      // "Michell Tejada": "mitejada/Web_Final_Practical",
      // "Nielene Thomas": "Nielene/Unit_5_Final"
    },
    studentLookup: {
      isaink: "Isa Alvarado",
      xpectro93: "Jonathan Andrade",
      earellano1719: "Erick Arellano",
      jbain424: "Jonelle Bain",
      baynejd: "Jonathan Bayne",
      treaganbirbal: "Treagan Birbal",
      acabrera100: "Andres Cabrera",
      jerquinigo: "Jonathan Erquinigo",
      evgeniyaezhova: "Evgeniya Ezhova",
      dianacgaona: "Diana Gaona",
      jungraejang: "Jung Rae Jang",
      khakimorteza: "Morteza Khaki",
      "Andrew-Kil": "Andrew Kil",
      kellyliang7: "Kelly Liang",
      NikkiVee: "Nicolle Loyaza",
      jmezalon: "Jean Max Mezalon",
      "mateo-navarrete": "Mateo Navarrete",
      JJGITTY2018: "Jacky Ong",
      SurgamSurgam: "Deyvi Ortiz",
      ThaiSonP: "Tyson Pan",
      ajinsoopark: "Alex Park",
      Jevit01: "Thomas Perez",
      wynterreid: "Wynter Reid",
      munarsharma: "Muna Sharma",
      Pixelynx: "T'Keya Stevens",
      tCarina: "Carina Taveras",
      mitejada: "Michell Tejada",
      Nielene: "Nielene Thomas"
    },
    allCommits: [],
    search: ""
  };

  componentDidMount() {
    let commitList = Object.values(this.state.allStudents).map(student =>
      this.makeRequest(student)
    );
    Promise.all(commitList)
      .then(res => {
        debugger
        let individualCommits = res.map(obj => obj.data);
        this.setState({ allCommits: individualCommits });
      })
      .catch(err => {
        debugger
        console.log(err);
      });
  }

  makeRequest = userRepo => {
    // let url = "https://api.github.com/repos/" + userRepo + "/commits"
    // console.log("request: ", url);

    // return axios({
    //   method: "get",
    //   url: url,
    //   // withCredentials: true,
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   //   'x-access-token': state.tokenid
    //   // }
    //   auth: {
    //     username: USERNAME,
    //     password: PASSWORD
    //   }
    // }).then(response => {
    //   debugger
    //   console.log(response)
    //   })
    //   .catch(err => {

    //     debugger
    //     console.log(err)
    //   });
    return axios.get("/" + userRepo);
  };

  updateSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    let displayPerson = this.state.allCommits.sort((a, b) => b.length - a.length).map(person => {
      if (
        this.state.studentLookup[person[0].comments_url.slice(29).split("/")[0]]
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      ) {
        return (
          <div className="personObj" key={person[0].comments_url.slice(29).split("/")[0]}>
            <div className="personName">
              Name:{"  "}
              {
                this.state.studentLookup[
                  person[0].comments_url.slice(29).split("/")[0]
                ]
              }
            </div>
            <DateDisplay array={person} />
            <br />
            Total Project Commits: {person.length}
          </div>
        );
      } else {
        return null;
      }
    })
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          placeholder="Search"
        />
        {displayPerson}
      </div>
    );
  }
}

export default App;
