import React, {useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebaseDb from '../firebase';

export default function ListOfContacts() {

    const initContact = {
        fullName: '',
        email: '',
        company: '',
        phone: ''
    }

    const [contact, setContact] = useState(initContact)
    const [contactObjects, setContactObjects] = useState({});
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState('');

    useEffect(()=>{
        firebaseDb.child('contacts').on('value', snapshot =>{
            const data = snapshot.val();
            if(data!=null){
                setContactObjects({
                    ...data
                })
            }else{
                setContactObjects({});
            }
        })

    },[]);

    const openContactForm = id =>{
        setShow(true);
        setCurrentId(id);
        setContact({
            ...contactObjects[id]
        });
    }

    const updateContact = contact =>{
        firebaseDb.child(`contacts/${currentId}`).set(contact, err =>{
            if(err){
                console.log(err);
            }
        })
    }

    const deleteContact = id =>{
        if(window.confirm('Are you sure to delete this contact?')){
            firebaseDb.child(`contacts/${id}`).remove(err=>{
                if(err){
                    console.log(err);
                }
            })
        }
    }

    const handleChange = e =>{
        const {name, value} = e.target;
        setContact({
            ...contact, [name]:value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        updateContact(contact);
        setShow(false);
        setCurrentId('');
        setContact(initContact);
    }

    return (
        <div className="mt-5 mx-5">
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(contactObjects).map(id=>{
                            return <tr key={id}>
                                <td>{contactObjects[id].fullName}</td>
                                <td>{contactObjects[id].email}</td>
                                <td>{contactObjects[id].company}</td>
                                <td>{contactObjects[id].phone}</td>
                                <td>
                                    <button className="btn text-danger" onClick={()=>openContactForm(id)}>
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                    <button className="btn text-danger" onClick={()=>deleteContact(id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <Link to="/">Home</Link>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
            >
                <Modal.Header closeButton>
                    <h3>Update information about the contact</h3>  
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="fullName" className="form-control" value={contact.fullName} onChange={handleChange} placeholder="Full Name"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="text" name="email" className="form-control" value={contact.email} onChange={handleChange} placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company</label>
                            <input type="text" name="company" className="form-control" value={contact.company} onChange={handleChange} placeholder="Company"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone</label>
                            <input type="text" name="phone" className="form-control" value={contact.phone} onChange={handleChange} placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary" value="Update"/>
                        </div>
                    </form>
                </Modal.Body>
                </Modal>
        </div>
    )
}
