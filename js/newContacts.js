import { ContactPost } from "./postContact"

const header = Headers()
const createContact = document.createElement('form')
const sendForm = async(event) => {
    event.preventDefault()
    const fd = new FormData(createContact)
    const response = await ContactPost(fd)

    if(response === 200) {
        window.open('#contacts', '_self')
    }
}
button.addEventListener

export const NewContact = async () => {
    createContact.innerHTML = (`<input type="text" name="nome" placeholder="Nome do Contato"/>
    <input type="text" name="apelido" placeholder="Apelido" required=/>
    <input type="text" name="email" placeholder="e-Mail"/>
    <input type="text" name="notas" palceholder="Notas sobre este contato"/>
    <input type="file" accept="image" name="foto" placeholder="Insira uma imagem"/>
    <input type="number" name="telefones.numero" placeholder="Telefone"/>
    <input type="text" name="telefones.tipo" placeholder="Residencial, celular, etc.../>
    <input type="submit" value="Criar novo contato"/>`)
    return createContact
}