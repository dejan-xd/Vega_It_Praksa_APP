import React from 'react'
import NewReport from './NewReport'
import Report from './Report'

function Reports() {
    return (
        <section className="content">
            <h2><i className="ico report"></i>Reports</h2>
            <NewReport />
            <table className="default-table">
                <tr>
                    <th>
                        Date
						</th>
                    <th>
                        Team member
						</th>
                    <th>
                        Projects
						</th>
                    <th>Categories</th>
                    <th>Description</th>
                    <th className="small">Time</th>
                </tr>
                <Report />
            </table>
            <div className="total">
                <span>Report total: <em>7.5</em></span>
            </div>
            <div className="grey-box-wrap reports">
                <div className="btns-inner">
                    <a href="javascript:;" className="btn white">
                        <span>Print report</span>
                    </a>
                    <a href="javascript:;" className="btn white">
                        <span>Create PDF</span>
                    </a>
                    <a href="javascript:;" className="btn white">
                        <span>Export to excel</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Reports
