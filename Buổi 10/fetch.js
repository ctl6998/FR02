// Fetch only available in browsers

// function getData(){
// fetch('https://63778f6e81a568fc2519343a.mockapi.io/Storemock')
// .then((res)=>{
//     console.log(res)
//     if(res.status !== 200){
//         throw Error('Error')
//     }
//     return res.json() //method của js
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch()
// }

async function getData(){
    let response = await fetch('https://63778f6e81a568fc2519343a.mockapi.io/Storemock')
    let data = await response.json()
    //console.log(data)

    return data
}
getData().then((data)=>{
    console.log(data)
})

///////////////////////
arr = []
async function getData(){
    try{
    let response = await fetch('https://63778f6e81a568fc2519343a.mockapi.io/Storemock')
    arr = await response.json()
    }
    //console.log(data)
    catch(res){
        console.log(res)
    }

}

// Asynce taọ promiss, await bên trong thay then

function postData(){
fetch('https://63778f6e81a568fc2519343a.mockapi.io/Storemock', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            "nameProduct": "Product No Fetch ",
            "img": "img/image.webp",
            "price": "100000",
            "link": "#link 1",
            "id": "1"
          },
    )
})
// .then((res)=>{
//     console.log(res.json())
// })
}

