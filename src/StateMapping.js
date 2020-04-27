import React, { Component } from 'react'
import './assets/styles/styles.scss'
import './App.css'

class App extends Component {
  state = {
    students: [
      {
        firstName: 'William',
        lastName: 'Runolfsdottir',
        title: 'Future Brand Designer',
        jobTitle: 'Global Paradigm Engineer',
        avatar:
          'https://s3.amazonaws.com/uifaces/faces/twitter/dgajjar/128.jpg',
        age: 28,
        country: 'Gabon',
        email: 'william.runolfsdottir@cfeo.io',
        phone: '428-785-1001'
      },
      {
        firstName: 'Dereck',
        lastName: 'Heaney',
        title: 'Legacy Configuration Producer',
        jobTitle: 'Global Quality Architect',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/croakx/128.jpg',
        age: 48,
        country: 'Slovakia (Slovak Republic)',
        email: 'dereck.heaney@cfeo.io',
        phone: '543-122-0345'
      },
      {
        firstName: 'Ernest',
        lastName: 'Swaniawski',
        title: 'Legacy Communications Liason',
        jobTitle: 'Dynamic Division Planner',
        avatar:
          'https://s3.amazonaws.com/uifaces/faces/twitter/increase/128.jpg',
        age: 34,
        country: 'Mauritius',
        email: 'ernest.swaniawski@cfeo.io',
        phone: '975-721-9776'
      },
      {
        firstName: 'Nichole',
        lastName: 'Grant',
        title: 'Dynamic Factors Facilitator',
        jobTitle: 'Dynamic Infrastructure Officer',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg',
        age: 59,
        country: 'Cyprus',
        email: 'nichole.grant@cfeo.io',
        phone: '814-883-1128'
      },
      {
        firstName: 'Bruce',
        lastName: 'Rosenbaum',
        title: 'Regional Accounts Supervisor',
        jobTitle: 'Future Factors Engineer',
        avatar:
          'https://s3.amazonaws.com/uifaces/faces/twitter/cliffseal/128.jpg',
        age: 59,
        country: 'Chile',
        email: 'bruce.rosenbaum@cfeo.io',
        phone: '003-525-5423'
      }
    ]
  }
  render() {
    const { students } = this.state
    const studentsList = students.map(student => (
      <div>
        <h1>
          {student.firstName} {student.lastName}
        </h1>
        <h2>{student.country}</h2>
      </div>
    ))
    console.log(studentsList)
    return (
      <div className='App'>
        <h1>Students list:{students.length}</h1>
        {studentsList}
      </div>
    )
  }
}

export default App