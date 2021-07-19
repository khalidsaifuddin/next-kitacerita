import localforage from 'localforage'

const cekLogin = async () => {
  let sudah_login = 0
  let pengguna = {}

  sudah_login = await localforage.getItem('sudah_login')
  pengguna = await localforage.getItem('pengguna')

  let outputs = {
    sudah_login: sudah_login,
    pengguna: pengguna
  }

  return outputs
}

export default cekLogin

// localforage.getItem('sudah_login', (err, value)=>{
  //   if(value === 1){
  //     //sudah login
  //     // this.setState({
  //     //   sudah_login: 1
  //     // },()=>{
  //       sudah_login = 1

  //       localforage.getItem('pengguna', (err, value)=>{

  //         pengguna = value

  //         let outputs = {
  //           sudah_login: sudah_login,
  //           pengguna: pengguna
  //         }

  //         return outputs

  //         // console.log(value)
  //         // this.setState({
  //         //   pengguna: value
  //         // },()=>{
  //         //   // console.log(this.state.sudah_login)
  //         //   // console.log(this.state.pengguna)
  //         // })
  //       })
  //     // })
  //   }else{
  //     //belum login
  //   }
  // })
// }  
