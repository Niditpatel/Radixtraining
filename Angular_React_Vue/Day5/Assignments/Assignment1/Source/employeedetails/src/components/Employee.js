import { useState } from "react";
import './Employee.css'
import 'tw-elements';
export function Display(props) {
    if (props.emps.length === 0) {
        return (
            <tr className="text-4xl">
                <td className="p-2" colSpan={6}>There is no data to show</td>
            </tr>
        )
    }
    else if (props.Name) {
        return (
            <>
                {props.emps.filter(item => item.Name.match(props.Name)).map(item =>
                    <tr className="even:bg-neutral-400" key={item.Id}>
                        <td className="border border-zinc-900 p-1">{item.Id}</td>
                        <td className="border border-zinc-900 p-1">{item.Name}</td>
                        <td className="border border-zinc-900 p-1">{item.Address}</td>
                        <td className="border border-zinc-900 p-1">{item.Gender}</td>
                        <td className="border border-zinc-900 p-1">{item.DOJ}</td>
                        <td className="border border-zinc-900 p-1">{item.hobbies.toString()}</td>
                    </tr>
                )}
            </>
        )
    }
    else if (props.month) {
        return (
            <>
                {props.emps.filter(item => parseInt(item.DOJ.split('-')[1]) === parseInt(props.month)).map(item =>
                    <tr className="even:bg-neutral-400" key={item.Id}>
                        <td className="border border-zinc-900 p-1">{item.Id}</td>
                        <td className="border border-zinc-900 p-1">{item.Name}</td>
                        <td className="border border-zinc-900 p-1">{item.Address}</td>
                        <td className="border border-zinc-900 p-1">{item.Gender}</td>
                        <td className="border border-zinc-900 p-1">{item.DOJ}</td>
                        <td className="border border-zinc-900 p-1">{item.hobbies.toString()}</td>
                    </tr>
                )}
            </>
        )
    }
    else {
        return (
            <>
                {props.emps.map(item =>
                    <tr className="even:bg-neutral-400" key={item.Id}>
                        <td className="border border-zinc-900 p-1">{item.Id}</td>
                        <td className="border border-zinc-900 p-1">{item.Name}</td>
                        <td className="border border-zinc-900 p-1">{item.Address}</td>
                        <td className="border border-zinc-900 p-1">{item.Gender}</td>
                        <td className="border border-zinc-900 p-1">{item.DOJ}</td>
                        <td className="border border-zinc-900 p-1">{item.hobbies.toString()}</td>
                    </tr>
                )
                }
            </>
        )
    }


}
export function Employee() {
    const [employee, setEmployee] = useState({})
    const [emps, setEmps] = useState([])
    const [hobbies, sethobbies] = useState({ hobby: [] });
    const [Fmonth, setFmonth] = useState('');
    const [FName, setFName] = useState('')

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const { hobby } = hobbies;

        if (checked) {
            sethobbies({ hobby: [...hobby, value] });
        }
        else {
            sethobbies({ hobby: hobby.filter((e) => e !== value) })
        }
    };


    return (
        <div className='ml-5 mr-5'>
            <fieldset action="" className="border p-5">
                <legend>Employee</legend>
                <label >Employee ID : </label>
                <input className="form-control border" type="number" name="EmpID" id="eid" onChange={e => setEmployee(f => ({ ...f, Id: e.target.value }))} /><br></br><br></br>
                <label >Eployee's Name : </label>
                <input className="form-control border" type="text" name="EName" id="name" onChange={e => setEmployee(f => ({ ...f, Name: e.target.value }))} /><br></br><br></br>
                <label >Address : </label>
                <input className="form-control border" type="text" name="Address" id="Address" onChange={e => setEmployee(f => ({ ...f, Address: e.target.value }))} /><br></br><br></br>
                <label >Select Gender : </label>
                <span className='space-x-4'>
                    <span  className='space-x-1'>

                        <input className="form-control border" type="radio" name="gender" id="male" onClick={e => setEmployee(f => ({ ...f, Gender: e.target.value }))} value="Male" />
                        <label >Male</label>
                    </span>
                    <span className='space-x-1'>

                        <input className="form-control border" type="radio" name="gender" id="female" onClick={e => setEmployee(f => ({ ...f, Gender: e.target.value }))} value="Female" />
                        <label  >Female</label>
                    </span>

                </span>

                <br></br><br></br>
                <label >DOJ : </label>
                <input className="form-control border" type="date" name="DOJ" id="DOJ" onChange={e => setEmployee(f => ({ ...f, DOJ: e.target.value }))} /><br></br><br></br>
                <label >Hobbies : </label>
                <span className='space-x-4'>
                    <span className='space-x-1'>
                        <input className="form-check-input border" type="checkbox" name="hobbies" onChange={handleChange} value="Swimming" />
                        <label>Swimming</label>
                    </span>
                    <span className='space-x-1'>
                        <input className="form-check-input border" type="checkbox" name="hobbies" onChange={handleChange} value="Reading" />
                        <label>Reading</label>
                    </span>
                    <span className='space-x-1'>
                        <input className="form-check-input border" type="checkbox" name="hobbies" onChange={handleChange} value="Playing" />
                        <label>Playing</label>
                    </span>
                    <span className='space-x-1'>
                        <input className="form-check-input border" type="checkbox" name="hobbies" onChange={handleChange} value="Others" />
                        <label>Others</label>
                    </span>
                </span>

                <br></br><br></br>

                <button  className='rounded-xl border px-5 py-1 bg-transparent hover:bg-sky-400  hover:text-white' onClick={e => {
                    e.preventDefault();
                    setEmps([
                        ...emps,
                        { Id: employee.Id, Name: employee.Name, Address: employee.Address, Gender: employee.Gender, DOJ: employee.DOJ, hobbies: hobbies.hobby }
                    ])
                }}>save</button>
            </fieldset><br></br><br></br>
            <div className='mb-3 flex justify-between'>
                <span className='space-x-2'>
                    <label>By Month :  </label>
                    <input className="form-control border " type="number" onChange={e => setFmonth(e.target.value)} />
                </span>
                <span className='space-x-2 '>
                    <label>By Name :  </label>
                    <input className="form-control border " type="text" onChange={e => setFName(e.target.value)} />
                </span>
            </div>

            <table className="border-collapse border text-center  table-auto border-zinc-900 w-full ">
                <tr className="bg-neutral-400">
                    <th className="border border-zinc-900 p-2">ID</th>
                    <th className="border border-zinc-900 p-2">Name</th>
                    <th className="border border-zinc-900 p-2">Address</th>
                    <th className="border border-zinc-900 p-2">Gender</th>
                    <th className="border border-zinc-900 p-2">DOJ</th>
                    <th className="border border-zinc-900 p-2">Hobbies</th>
                </tr>
                <tbody>
                    <Display emps={emps} month={Fmonth} Name={FName}></Display>
                </tbody>
            </table>

        </div>
    )
}
