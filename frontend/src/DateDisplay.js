import React from 'react'

class DateDisplay extends React.Component {
  state = {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
  render () {
    let dates = {
      [this.state.months[new Date().getMonth()]+ " " + new Date().getDate()]: 0,
    }
    this.props.array.forEach(array => {
      let [month, day] = array.commit.author.date.slice(5, 10).split("-").map(el => Number(el))
      let date = this.state.months[month - 1] + " " + day
      dates[date] ? dates[date]++ : dates[date] = 1;
    })
    let display = Object.keys(dates).map(date => {

      return(
        <li key={date}>
          {date}: {dates[date]}
        </li>
      )
    })
    return(
      <div>
        Todays Commits: {dates[  [this.state.months[new Date().getMonth()]+ " " + new Date().getDate()]]}
        <ul>
          {display}
        </ul>
      </div>
    )
  }
}

export default DateDisplay;
