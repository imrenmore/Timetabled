import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <>
      <div className="Calendar"></div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Honors 192OS 🛩️" location="Tahoe Hall" color="orange" />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Web Dev 🛜" location="Remote" color="pink" />
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <Event event="Cybersecurity 🛡️" location="Alpine" color="pink" />
            <td></td>
            <Event event="Cybersecurity 🛡️" location="Alpine" color="pink" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event event="OOP CSC 133 👩🏻‍💻" location="Remote" color="blue" />
            <td></td>
            <Event event="OOP CSC 133 👩🏻‍💻" location="Remote" color="blue" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">6 pm</td>
            <td></td>
            <td></td>
            <Event event="Circuits CSC 137 🤖" location="Sequoia Hall" color="green" />
            <td></td>
            <Event event="Circuits CSC 137 🤖" location="Sequoia Hall" color="green" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">7 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Sr Project CSC 191 👩🏻‍💻" location="Remote" color="orange" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Calendar;
