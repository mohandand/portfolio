import React from 'react'
import "./Skills.css"
const Skills = () => {
    const frontendSkills = [
        {
            title: 'JavaScript',
            width: '95%',
            percentage: '95%'
        },
        {
            title: 'ReactJS',
            width: '90%',
            percentage: '90%'
        },
        {
            title: 'Redux',
            width: '80%',
            percentage: '80%'
        },
        {
            title: 'HTML5',
            width: '95%',
            percentage: '95%'
        },
        {
            title: 'CSS3',
            width: '95%',
            percentage: '95%'
        }
    ]
    const otherSkills = [
        {
            title: 'NodeJS',
            width: '80%',
            percentage: '80%'
        },
        {
            title: 'Java',
            width: '70%',
            percentage: '70%'
        },
        {
            title: 'Python',
            width: '80%',
            percentage: '80%'
        },
        {
            title: 'MongoDB',
            width: '95%',
            percentage: '95%'
        },
        {
            title: 'MySql',
            width: '95%',
            percentage: '95%'
        }
    ]
    const skilItem = ({ title, percentage }) => {
        return (<div className='skill__data mb-3'>
            <div className='skill__title d-flex align-items-center justify-content-between'>
                <h6>{title}</h6>
                <span>{percentage}</span>
            </div>
            <div className='skill__bar'>
                <span className='skill__bar-percentage' style={{ width: `${percentage}` }}></span>
            </div>
        </div>)
    }
    return (<div className='skills__wrapper d-flex justify-content-between'>
        <div className='frontend__skill w-50'>
            {
                frontendSkills.map((item, index) => {
                    return (<div className='skill__data mb-3'>
            <div className='skill__title d-flex align-items-center justify-content-between'>
                <h6>{item.title}</h6>
                <span>{item.percentage}</span>
            </div>
            <div className='skill__bar'>
                <span className='skill__bar-percentage' style={{ width: `${item.percentage}` }}></span>
            </div>
        </div>)
                })
            }
        </div>
        <div className='other__skill w-50'>
            {
                otherSkills.map((item, index) => {
                    return (<div className='skill__data mb-3'>
            <div className='skill__title d-flex align-items-center justify-content-between'>
                <h6>{item.title}</h6>
                <span>{item.percentage}</span>
            </div>
            <div className='skill__bar'>
                <span className='skill__bar-percentage' style={{ width: `${item.percentage}` }}></span>
            </div>
        </div>)
                })
            }
        </div>
    </div>)

}
export default Skills