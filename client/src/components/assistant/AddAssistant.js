import React from 'react'

class AddAssistant extends React.Component {
  state = {
    Name: '',
    Rut: '',
    Email: '',
    Fono: '',
    Address: {
      Street: '',
      City: '',
      Commune: ''
    },
    PaymentDetails: {
      AccountNumber: '',
      BankName: '',
      AccountType: ''
    }
  }

  add = (e) => {
    e.preventDefault()
    if (
      this.state.Name === '' ||
      this.state.Rut === '' ||
      this.state.Email === '' ||
      this.state.Fono === ''
    ) {
      alert('Todos los campos estan vacios')
      return
    }

    this.props.addAssistantHandler(this.state)
    this.setState({ Name: '', Rut: '', Email: '', Fono: '' })
  }

  render() {
    return (
      <div className='flex flex-col items-center'>
        <h2>Add Assistant</h2>
        <form className='flex flex-col gap-3 w-full' onSubmit={this.add}>
          <div className='flex items-center gap-2'>
            <div className='flex flex-col gap-2'>
              <label>Name</label>
              <input
                className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
                type='text'
                name='name'
                placeholder='Name'
                value={this.state.Name}
                onChange={(e) => this.setState({ Name: e.target.value })}
              />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <label>Rut</label>
            <input
              className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
              type='text'
              name='rut'
              placeholder='Rut'
              value={this.state.Rut}
              onChange={(e) => this.setState({ Rut: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none'
              type='text'
              name='email'
              placeholder='Email'
              value={this.state.Email}
              onChange={(e) => this.setState({ Email: e.target.value })}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Fono</label>
            <div className='flex items-center gap-2 w-full'>
              <label className='text-gray-500'>+56</label>
              <input
                className='border-2 border-gray-300 h-10 rounded-md p-2 outline-none w-full'
                type='text'
                name='fono'
                placeholder='Fono'
                value={this.state.Fono}
                onChange={(e) => this.setState({ Fono: e.target.value })}
              />
            </div>
          </div>

          <button className='bg-primary text-white rounded-lg p-3'>
            Add Assistant
          </button>
        </form>
      </div>
    )
  }
}

export default AddAssistant
