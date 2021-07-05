import React, { useState, useEffect } from 'react'
import moment from 'moment'
import createCalendar from "./Calendar"
import dayStyles from "./DayStyles"

function TimeSheets() {

    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment());

    useEffect(() => {
        setCalendar(createCalendar(value))
    }, [value])

    function currentMonthName() {
        return value.format("MMMM")
    }

    function currentYear() {
        return value.format("YYYY")
    }

    function previousMonth() {
        return value.clone().subtract(1, "month")
    }

    function nextMonth() {
        return value.clone().add(1, "month")
    }

    function thisMonth() {
        return value.isSame(new Date(), "month")
    }

    return (
        <section className="content">
            <h2><i className="ico timesheet"></i>TimeSheet</h2>
            <div className="grey-box-wrap">
                <div className="top">
                    <a className={!thisMonth() ? "prev months-fix" : "prev previous-month-fix months-fix"}
                        onClick={() => !thisMonth() && setValue(previousMonth())}>
                        <i className="zmdi zmdi-chevron-left"></i>previous month</a>
                    <span className="center">{currentMonthName()} {currentYear()}</span>
                    <a className="next months-fix" onClick={() => setValue(nextMonth())}>next month
                        <i className="zmdi zmdi-chevron-right"></i></a>
                </div>
                <div className="bottom"></div>
            </div>
            <table className="month-table">
                <tbody>
                    <tr className="head">
                        <th><span>monday</span></th>
                        <th>tuesday</th>
                        <th>wednesday</th>
                        <th>thursday</th>
                        <th>friday</th>
                        <th>saturday</th>
                        <th>sunday</th>
                    </tr>
                    {calendar.map((week) => (
                        <tr>
                            {week.map((day) => (
                                <td className={dayStyles(day)}>
                                    <div className="date">
                                        <span>{day.format("D").toString()}</span>
                                    </div>
                                    <div className="hours" onClick={() => setValue(day)}>
                                        <a href="days.html">Hours: <span>7.5</span></a>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total">
                <span>Total hours: <em>90</em></span>
            </div>
        </section>
    )
}

export default TimeSheets

