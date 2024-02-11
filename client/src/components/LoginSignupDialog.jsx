import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { useContext, useState } from "react"
import { AuthContext } from "@/context/AuthContext"
import axios from "axios"

const apiUri = import.meta.env.VITE_REACT_API_URI

const LoginSignupDialog = () => {
  const { loading, error, dispatch } = useContext(AuthContext);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });

  const handleLogin = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try{
      const res = await axios.post(`${apiUri}/auth/login`, loginData, {withCredentials: true})
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      setLoginData({ email: "", password: "" })
    }catch(err){
      dispatch({type: "LOGIN_FAILED", payload: err.response.data})
    }
  };


  const handleSignup = async (event) => {
    event.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try{
      const res = await axios.post(`${apiUri}/auth/register`, signupData, {withCredentials: true})
      dispatch({type:"LOGIN_SUCCESS", payload: res.data})
      setSignupData({ name: "", email: "", password: "" })
    }catch(err){
      dispatch({type: "LOGIN_FAILED", payload: err.response.data})
    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
        <DialogContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-2 my-4">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">SignUp</TabsTrigger>
            </TabsList>
            {error && <span className="text-sm text-destructive">{error?.message}</span> }
            <TabsContent value="login">
              <form onSubmit={handleLogin}>
                <Card>
                  <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Welcome back</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" autoComplete="email" type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" autoComplete="current-password" type="password" required value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button disabled={loading} type="submit">Log in</Button>
                  </CardFooter>
                </Card>
              </form>
            </TabsContent>
            <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <Card>
                <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  <CardDescription>Create a new account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" autoComplete="name" value={signupData.name} required onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newemail">Email</Label>
                    <Input id="newemail" autoComplete="email" type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newpassword">Password</Label>
                    <Input id="newpassword" autoComplete="new-password" type="password" required value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled={loading} type="submit">Sign up</Button>
                </CardFooter>
              </Card>
            </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
    </Dialog>
  )
}

export default LoginSignupDialog