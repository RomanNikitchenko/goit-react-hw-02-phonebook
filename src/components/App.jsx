import React from 'react';

class App extends React.Component {
  state = {
    contacts: [],
    name: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, contacts } = this.state;
    contacts.push(name);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: ''
    });
  };

  render() {
    const { name, contacts } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <ul>
          {contacts.map(contact => ( <li key={contact}>{contact}</li> ))}
        </ul>
      </div>
    );
  }
};

export default App