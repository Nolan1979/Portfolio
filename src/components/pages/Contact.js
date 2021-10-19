import { useState } from 'react'

const Contact = ({ onAdd }) => {
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [number, setNumber] = useState ('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name && !email) {
            alert('Please Enter Info!')
            return
        }

        onAdd({name, email, number})
        setName('')
        setEmail('')
        setNumber('')
    }

    return (
<form className="contact" onSubmit={onSubmit}>
    <p>Leave Me Your Contact Info!</p>
            <div className="form-control">
                <label>Name</label>
                <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Number</label>
                <input type="text" placeholder='Number' value={number} onChange={(e) => setNumber(e.target.value)}/>
            </div>
                <input type="submit" value='Enter' className="btn-contact"/>
        </form>
        
    )
}

export default Contact




