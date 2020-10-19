import React, { Component } from 'react';

class Calendar extends Component {
  render() {

    return (
      <section id="calendar">
        <div className="row education">
          <div className="three columns header-col">   
              <h3 className="importantDates">Important Dates</h3>
              <hr></hr>
              <h6 className="importantDates">First Meeting</h6>
              <br></br>
              <h6 className="importantDates">Seminar 1</h6>
              <br></br>
              <h6 className="importantDates">Potluck</h6>
            </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <iframe
                  title="calendar"
                  src="https://calendar.google.com/calendar/embed?src=mlekee6v03iq4r9ihuu2chqe00%40group.calendar.google.com&ctz=America%2FPhoenix"
                  style={{ border: "solid 5px #fff", backgroundColor: "BLACK", padding: "10px", borderRadius: "3%" }}
                />
              </div>
            </div><br></br>
          </div>  
          
          <hr></hr>
        </div>
      
      </section>
    );
  }
}

export default Calendar;
