import React, {Component} from 'react';
class Clock extends Component {
    render() {
        return (
            <div className="clock">
              <div className="clock__days clock__flex">
                <label className="clock__title">Days</label>
                <label className="clock__amount">300</label>
              </div>
              <div className="clock__hours clock__flex">
                <label className="clock__title">Hours</label>
                <label className="clock__amount">42</label>
              </div>
              <div className="clock__minutes clock__flex">
                <label className="clock__title">Minutes</label>
                <label className="clock__amount">216</label>
              </div>
              <div className="clock__seconds clock__flex">
                <label className="clock__title">Seconds</label>
                <label className="clock__amount">20</label>
              </div>
            </div>    
        )
    }
}
export default Clock;  