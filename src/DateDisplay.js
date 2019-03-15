import React from 'react'

class DateDisplay extends React.Component {
  render () {
    let dates = {

    }
    this.props.array.forEach(array => {
      let date = array.commit.author.date.slice(5, 10)
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
        Todays Commits: {dates["0" + (new Date().getMonth() + 1 )+ "-" + new Date().getDate()]}
        <ul>
          {display}
        </ul>
      </div>
    )
  }
}

export default DateDisplay;
