import React from 'react';

const Login = () => {
    return (
        <>
        <section>
            <h2>Login screen</h2>
        </section>
        <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Submit</button>
        </form>
        </>
    );
}

export default Login;