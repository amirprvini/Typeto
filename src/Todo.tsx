import { useState } from "react"

export default function Todo(){

    type formType = {
        fname ?: string 
        lname ?: string
    }
    
    const [state,setState] = useState<formType[]>([]) ;

    const [form,setForm] = useState<formType>({});

    const handleClick = ()=>{
        console.log(form)

        setState([...state,form]);
        setForm({});

        console.log(form)

        console.log(state);
        
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name] : e.target.value}); 
    }

    return (
         <>
                <div>
            <input name="fName" type="text" onChange={handleChange} value={form.fname} placeholder="FName"></input>
            <input name="lName" type="text" onChange={handleChange} value={form.lname} placeholder="LName"></input>
            <button onClick={handleClick}>Add Todo</button>
        </div>
        <h3>Todo:</h3>
        <ul>
            {state.map((item)=>{
               return <li>{item.fname}</li>
            })}
        </ul>

         </>
    )
}