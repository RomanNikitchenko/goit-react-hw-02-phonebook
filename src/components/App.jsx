import React from 'react';
import ContactForm from './form/contactForm'

class App extends React.Component {

  formSubmitHandler = data => {
    console.log(data)
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
      </div>
    )
  }
}

export default App;
