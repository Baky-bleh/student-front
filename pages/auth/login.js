import { useEffect } from "react"

function login() {
    const [data, setData] = useState({
        email:"",
        password:""
    })
    const {email,password} = data;

    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]});
    }
    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
      }
    const [isLoading, setLoading] = useState(false)

    useEffect(() =>{
        setLoading(true)
        fetch('http://localhost:3300/auth/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: json.stringify({email: email, password: password})
        }).then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
          })
    }, [])

    return(
        <div>
            <div>
                <center>
                    <form onSubmit={submitHandler}>
                        <input type="text" name="email" value={username} onChange={changeHandler}/><br/>
                        <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
                        <input type="submit" name="submit"/>
                    </form>
                </center>
           </div>
        </div>
    )
}

export default login()