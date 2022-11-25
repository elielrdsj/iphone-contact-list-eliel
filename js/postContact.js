const baseUrl = "http://localhost:5000/v1"
const header = new Headers()

export async function ContactPost (formData) {
    const token = sessionStorage.getItem("@token")
    const obj = Object.fromEntries(formData)
    const body = JSON.stringify(obj)
    header.append('Authorization', token)
    const response = await fetch(baseUrl + 'contact', {body, header, method: "POST"})
    return await response.json()
}