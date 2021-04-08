import React from 'react';
import Form from './Form'
import firebaseDb from '../firebase';
import './Main.css'
import { Link } from 'react-router-dom';

export default function Main(props) {

    const addOrEdit = doc =>{
        firebaseDb.child('contacts').push(doc, err=>{
            if(err){
                console.log(err);
            }
        });
    }
    
    return (
        <div className="main">
            <Form addOrEdit = {addOrEdit}/>
            <div className="context">
                <p>The App created by the React Community that uses <strong>Firebase Realtime Database</strong> for storing the data which you submitted through the form.
                    If you want to add a new contact, simply fill out the form you see on the main page. 
                    After adding a new contact, you have the option to check a contact list by pushing the button on the right side of the main page. 
                    You could also edit or delete contacts that you saved early.(omit/leave out-izostaviti)
                </p>
                <Link to="/contacts" ><button class="btn btn-success">List of Contacts</button></Link>
            </div>
        </div>
    )
}
