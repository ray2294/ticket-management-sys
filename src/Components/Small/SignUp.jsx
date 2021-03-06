import React, { useState } from 'react'
import { TextField, Button, FormControl, Select, FormHelperText, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch , useSelector } from "react-redux"
import { signupUser } from '../../Redux/UserAuthReducer/action'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '30ch',
        margin : '10px'
      },
      display: 'flex',
      flexDirection : 'column',
      margin: '0 auto',
      justifyContent: 'space-evenly',
      alignItems:'center',
      
    },
  }));


export default function SignUp({changeSignUp}){

    const classes = useStyles()
    const [ phone , setPhone ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ name , setName ] = useState('')
    const [ role , setRole ] = useState('user')
    const dispatcher = useDispatch()

    return (
        <form className={classes.root} onSubmit={(e)=>{ e.preventDefault()
            dispatcher(signupUser({"name":name,"phone":phone,"password":password}))
            changeSignUp(false)
        }}>

            <TextField required label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
            
            <TextField required label="Mobile Number" helperText="You'll be signing in using this phone number." value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            
            <TextField required label="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <FormControl>

                <Select
                  labelId="role"
                  value={role}
                  onChange={(e)=>setRole(e.target.value)}>
                      <MenuItem value="user">User</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                </Select>
              <FormHelperText>Role</FormHelperText>
            </FormControl>

            <Button type="submit" color="primary" variant="outlined" className="mt-3">Sign Up</Button>

        </form>
    )
}