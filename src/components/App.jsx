import React from 'react';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { elements } = evt.target;
    this.similarSearch(elements);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      search: '',
    });
  };

  handleChangeFilter = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });

    const { contacts } = this.state;

    const search = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(value);
    });

    this.setState({ search });
  };

  similarSearch = elements => {
    const { name, contacts, number } = this.state;

    const listNames = [];

    contacts.map(({ name }) => listNames.push(name));

    if (!listNames.includes(elements.name.value)) {
      contacts.push({ name: name, number: number });
    } else {
      alert(`${elements.name.value} is already in contacts`);
    }
  };

  render() {
    const { name, contacts, number, filter, search } = this.state;

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

          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <label>
          Filter
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={this.handleChangeFilter}
          />
        </label>

        <ul>
          {search
            ? search.map(({ name, number }) => (
                <li key={number}>
                  {name}: {number}
                </li>
              ))
            : contacts.map(({ name, number }) => (
                <li key={number}>
                  {name}: {number}
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default App;
