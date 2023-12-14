export function logout(){
    localStorage.removeItem("loged")
    window.location.reload()
}
