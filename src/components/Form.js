import React, {useState} from 'react'

export default function Form(props) {

    const initialState = {
        fullName: '',
        email: '',
        company: '',
        phone: ''
    }

    const [state, setState] = useState(initialState);

    const handleChange = e =>{
        var {name, value} = e.target;
        setState({
            ...state, [name]: value
        });
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(state);
        setState(initialState);
    }

    return (
        <div className="mx-5" style={{marginTop: "100px"}}>
        <form autoComplete="off" onSubmit={handleSubmit}>
            {props.currentId}
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fa fa-user"/>
                    </div>
                </div>
                <input type="text" className="form-control" name="fullName" value={state.fullName} onChange={handleChange} placeholder="Full Name"/>
            </div>
            <div className="form-group input-group">
                <div className="input-group-pretend">
                    <div className="input-group-text">
                        <i className="fa fa-envelope"/>
                    </div>
                </div>
                <input type="email" className="form-control" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
            </div>
            <div className="form-row">
                <div className="input-group col-md-6">
                    <div className="input-group-pretend">
                        <div className="input-group-text">
                            <i className="fa fa-building"/>
                        </div>
                    </div>
                    <input type="text" className="form-control" name="company" value={state.company} onChange={handleChange} placeholder="Company"/>
                </div>
                <div className="input-group col-md-6">
                    <div className="input-group-pretend">
                        <div className="input-group-text">
                            <i className="fa fa-phone"/>
                        </div>
                    </div>
                    <input type="text" className="form-control" name="phone" value={state.phone} onChange={handleChange} placeholder="Phone"/>
                </div>
            </div>
            <div className="form-group my-3">
                <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
            </div>
        </form>
        </div>
    )
}
