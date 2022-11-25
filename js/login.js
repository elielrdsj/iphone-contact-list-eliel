
const login = document.getElementById("login");

const entrar = async (event) => {
    event.preventDefault();

    const fd = new FormData(login);
    const response = await AuthPost(fd);

    if (response.status === 200) {
        const {token, ...user} = response.data;
        sessionStorage.setItem("@user", JSON.stringify(user));
        sessionStorage.setItem("@token", token);

        window.alert("Abriu!");
        //window.open("#contatos", "_self");
    } else {
        window.alert("Não abriu!");
        //window.open("#404", "_self");
    }
}

const events = () => {
    login.addEventListener("submit", entrar);
}

const Login = () => {
    events();
    return login;
}

//---

const baseUrl = "http://localhost:5000/v1/";

const headers = new Headers();
headers.append("Content-Type", "application/json");

const AuthPost = async (formData) => {
    const obj = Object.fromEntries(formData);
    const body = JSON.stringify(obj);
    const response = await fetch(baseUrl + "auth", { body, headers, method: "POST" });
    return await response.json();
}