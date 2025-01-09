const form = document.querySelector('form')
const  input = document.querySelector('input')
const  local = document.querySelector('.local span')
const  Utc = document.querySelector('.utc span')
const  ios = document.querySelector(' .iso span')

form.addEventListener('submit' , (e) => {
    e.preventDefault()
    const timestamp = Number(input.value)
    const date = new Date(timestamp)
    local.innerHTML = date.toLocaleString('en-GB' ,
         { dateStyle: 'full' ,
         timeStyle: 'full'
        })
    Utc.innerHTML = date.toUTCString()
    ios.innerHTML = date.toISOString()

})