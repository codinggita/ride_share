import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

const LoginSignupDialog = () => {
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
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Welcome back
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password"/>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Log in</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Signup</CardTitle>
                  <CardDescription>
                    Create a new account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Name</Label>
                    <Input id="username" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newemail">Email</Label>
                    <Input id="newemail"/>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newpassword">Password</Label>
                    <Input id="newpassword" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Sign up</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </DialogContent>
    </Dialog>
  )
}

export default LoginSignupDialog