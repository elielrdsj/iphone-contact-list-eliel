import { GetAllContacts } from "./getAllContacts"


const searchContacts = document.createElement('form')
const displayContacts = document.createElement('ul')
//contact.setAttribute('')
const header = new Headers()


export const Allcontacts = async () => {
    const contatos = await GetAllContacts
    const form = document.getElementById(search)
    form.addEventListener('input', searchByName)
    for (contato of contatos){
    displayContacts.innerHTML = (`
    <form>
        <input id="search" type="text" name="contact" placeholder="Busque um contato">
    </form>
    <li>
        <div class="contatos">
            <img src="${contato.imagem}/>
            <h1>${contato.nome}</h1>
            <p class=id">${contato.id}<p>
        </div>
    </li>
    `)
    }
    const selector = document.querySelectorAll('#contatos')
    selector.forEach(element => {
        element.addEventListener('click', sendContactDetails)
    })
    const id = document.querySelectorAll('#id')
    id.display='none';
    return displayContacts
}


function searchByName() {
    const searchInput = document.getElementById(search)
    const filter = searchInput.value.toLowerCase()
    
    contatos.array.forEach(element => {
        let text = element.textContent
        if (text.toLowerCase().includes(filter)){
            element.display = '';
        }
        else{
            element.display = 'none';
        }
    });
}

function sendContactDetails() {
    header.append('id', this.id)
    window.open(`#contactId`, '_self')
}