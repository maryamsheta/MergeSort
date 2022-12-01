const root    = document.querySelector(":root")
const infoBtn = document.querySelector(".info")
const quitbtn = document.querySelector(".quit")
const popup   = document.querySelector(".popup")
const sortBtn = document.querySelector(".sort")
const unsorted= document.querySelectorAll(".unsorted input")
const sorted  = document.querySelectorAll(".sorted div")
const after   = document.querySelector(".after")

infoBtn.addEventListener("click", ()=> popup.style.display = "flex")
quitbtn.addEventListener("click", ()=> popup.style.display = "none")

function generateRandomTheme() {
    return `hsl(${Math.floor(Math.random()*360)},50%,50%)`
} 

window.addEventListener("DOMContentLoaded",()=> root.style.setProperty("--main-theme",generateRandomTheme()))

let arr = []

function merge(arr, p, q, r)
{
    const n1 = q - p + 1
    const n2 = r - q
 
    let left = new Array(n1)
    let right = new Array(n2)
 
    for (let i = 0; i < n1; i++)
        left[i] = arr[p + i]
    for (let j = 0; j < n2; j++)
        right[j] = arr[q + 1 + j]
 
    let i = 0
    let j = 0
    let k = p
 
    while (i < n1 && j < n2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i]
            i+=1
        }
        else {
            arr[k] = right[j]
            j+=1
        }
        k+=1
    }
 
    while (i < n1) {
        arr[k] = left[i]
        i+=1
        k+=1
    }
 
    while (j < n2) {
        arr[k] = right[j]
        j+=1
        k+=1
    }
}
 
function mergeSort(arr,p,r){
    if(p>=r){
        return
    }
    let q = p+ parseInt((r-p)/2)
    mergeSort(arr,p,q)
    mergeSort(arr,q+1,r)
    merge(arr,p,q,r)
}


start = true

sortBtn.addEventListener("click", ()=> {

    arr= []
    start=true

    unsorted.forEach(element => {
        if(parseInt(element.value) >= 0 && parseInt(element.value) <= 999) {
            arr.push(parseInt(element.value))  
        } else {
            start = false
        }
    })

    if(start) {
        mergeSort(arr,0,arr.length-1)

        for(i=0; i<5; i++){
            sorted[i].innerText = arr[i]
        }  
    
        after.style.display = "block"
    }
})
