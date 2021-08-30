export async function doLogin(email, password) {
    let user = await fetch('http://localhost:5000/login', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify({email,password})
    })
    user =await user.json()
    return user;
}