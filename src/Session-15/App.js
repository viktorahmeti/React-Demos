import React, { useRef, useState } from 'react'

function App() {
    const [formData, setFormData] = useState({
        emri: '',
        mbiemri: '',
        accept: false,
        gender: '',
        country: 'AL'
    });

    const [formErrors, setFormErrors] = useState(formData);

    function updateField(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function sumbitForm(e){
        e.preventDefault();

        //validation
        if (formData.emri === ''){
            setFormErrors(err => {
                return {...err, emri: 'Emri nuk mund të jetë i zbrazët'}
            });
        }
        else{
            setFormErrors(err => {
                return {...err, emri: ''}
            });
        }

        if (formData.mbiemri === ''){
            setFormErrors(err => {
                return {...err, mbiemri: 'Mbiemri nuk mund të jetë i zbrazët'}
            });
        }
        else{
            setFormErrors(err => {
                return {...err, mbiemri: ''}
            });
        }
    }

    return <form onSubmit={sumbitForm} style={{padding: '2rem'}}>
        <label htmlFor='emri'>Emri</label><br />
        <input value={formData.emri} onChange={updateField} id='emri' name='emri' />
        {formErrors.emri && <p style={{color: 'red'}}>{formErrors.emri}</p>}
        <br></br>
        <label htmlFor='mbiemri'>Mbiemri</label><br />
        <input value={formData.mbiemri} onChange={updateField} id='mbiemri' name='mbiemri' />
        {formErrors.mbiemri && <p style={{color: 'red'}}>{formErrors.mbiemri}</p>}
        <br></br>
        <input name='accept' checked={formData.accept} onChange={(e) => setFormData({...formData, [e.target.name]: e.target.checked})} type='checkbox'></input>
        <br></br>
        <label>Male</label>
        <input value='Male' onChange={updateField} name='gender' type='radio' checked={formData.gender === 'Male'}></input>
        <br></br>
        <label>Female</label>
        <input value='Female' onChange={updateField} name='gender' type='radio' checked={formData.gender === 'Female'}></input>

        <br></br><br></br>
        <select name='country' value={formData.country} onChange={updateField}>
            <option value='KS'>Kosova</option>
            <option value='AL'>Shqipëria</option>
            <option value='MK'>Maqedonia</option>
        </select>
        <br></br><br></br>
        <input type='submit' value='Submit'></input>
    </form>
}

export default App