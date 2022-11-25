export function getById(id) {
    const contato = fetch(`http://localhost:5000/v1/contact/:${id}`)
    return contato
}