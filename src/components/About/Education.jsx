import React from 'react'
import "./Education.css"

const Education = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Department</th>
                    <th>Institution</th>
                    <th>year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Master in Science</td>
                    <td>Computer Science</td>
                    <td>California State University East Bay</td>
                    <td>2021-2022</td>
                </tr>
                <tr>
                    <td>Bacheloers in Technology</td>
                    <td>Computer Science And Engineering</td>
                    <td>SR University</td>
                    <td>2011-2015</td>
                </tr>
                <tr>
                    <td>Intermediate</td>
                    <td>MPC</td>
                    <td>NVB Juniour College</td>
                    <td>2009-2011</td>
                </tr>
                <tr>
                    <td>SSC</td>
                    <td>Regular Syllabus</td>
                    <td>St Gabriels High School</td>
                    <td>1999-2009</td>
                </tr>
            </tbody>
        </table>
    )
}
export default Education