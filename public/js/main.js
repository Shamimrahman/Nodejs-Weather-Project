const submitbtn = document.getElementById('submitbtn')

const getinfo = async (event) => {
    event.preventDefault()
    const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=6fa13157d6ac0e06b56a6309be4edba5`
    )

    const data=response.json()
    const arr=[data]

    console.log(arr)

}

submitbtn.addEventListener("click", getinfo)

