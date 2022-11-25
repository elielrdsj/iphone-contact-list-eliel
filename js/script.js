import {Allcontacts as Contacts} from './allcontacts.js'
import {NewContact} from "./newContacts.js"
import {entrar as Login} from "./login.js"

function redirectPages() {
    const root = document.getElementById("root");

    const Router = {
        "#login": { component: Login, path: "#login" },
        "#404": { component: Login, path: "#404" },
        "#Contacts": { component: Contacts, path: "#contacts"},
        "#NewContact": { component: NewContact, path: "#newcontact"}
    }
    let route;

    if (window.location.hash === "") {
        route = Router["#login"];
        console.log(Router["#login"])
    }
    else {
        route = Router[window.location.hash] || Router["#404"];
    }

    root.innerHTML = null;
    root.append(route.component());
    window.history.pushState(null, null, route.path);
}

window.addEventListener("load", () => {
    redirectPages();
    window.addEventListener("hashchange", redirectPages);
});
