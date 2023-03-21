export const Login = () => {
    let nombre = 'Gabo';
    
    const saludar = () =>{
        alert('Hola como estan?')
    }
    return (
         <div style={{backgroundColor: 'greenyellow'}}>
         <h1>Hola desde el componente Login</h1>
         <h3>mi nombre es {nombre}</h3>
         <button onClick={saludar}>Saludar</button>
         </div>
    );
};