import React, { Component } from 'react'
import Head from 'next/head'
import { Form, Checkbox, Button, Card, Grid, Icon, Divider } from 'semantic-ui-react'
import '../styles/global.module.css'
import 'semantic-ui-css/semantic.min.css'
import LayoutNoMenu from './components/LayoutNomenu'
import Navbar from './components/Navbar'
import { withRouter } from 'next/router'
import GoogleLogin from 'react-google-login';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <Head>
          <title>KitaCerita - Login Pengguna</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <LayoutNoMenu>

              <Grid>
                <Grid.Column computer={4} only='computer'>
                </Grid.Column>
                <Grid.Column computer={8} mobile={16} tablet={16}>
                  
                  <Card centered fluid raised>
                    <Card.Content style={{textAlign:'center'}}>
                      <h2>Login</h2>
                      <Form style={{textAlign:'center', marginBottom:'32px', marginTop:'32px'}} size={'large'}>
                        <Form.Field>
                          <label>Email/No.HP/Username</label>
                          <input placeholder='Email/No.HP/Username...' />
                        </Form.Field>
                        <Form.Field>
                          <label>Password</label>
                          <input placeholder='Password...' type='password'/>
                        </Form.Field>
                        <br/>
                        <Button className="bawahCiri" size={'large'} fluid type='submit' color='violet' style={{display:'inline-flex', justifyContent:'center'}}>
                          <Icon name="sign in alternate" style={{fontSize:'18px'}} />
                          Login
                        </Button>
                        
                        <Divider style={{marginTop:'32px', marginBottom:'32px'}} horizontal>Atau</Divider>
                        <GoogleLogin
                            className="googleLogin"
                            clientId={'582957663393-kp55jbquet0m0rlkkkskrahm2ruq8dfc.apps.googleusercontent.com'}
                            buttonText="Masuk dengan Google"
                            // onSuccess={this.responseGoogle}
                            // onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            // style={{textAlign:'center', width:'100%', borderRadius:'20px'}}
                            style={{textAlign:'center', width:'100%', borderRadius:'20px'}}
                        />
                        <Divider style={{marginTop:'48px', marginBottom:'16px'}} />
                        <div>
                          Belum punya akun? <a href="/daftar"><b>Daftar di sini</b></a>
                        </div>
                      </Form>
                    </Card.Content>
                  </Card>

                </Grid.Column>
                <Grid.Column computer={4} only='computer'>
                </Grid.Column>
              </Grid>

        </LayoutNoMenu>
      </div>
    )
  }
}

export default withRouter(Login)

// export default function Beranda() {
//   return (
//     <Layout>
//       isinya beranda
//     </Layout>
//   )
// }