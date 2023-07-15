const quotes = [
    "Be the change you wish to see in the world. <br> - Mahatma Gandhi",
    "I have not failed. I've just found 10,000 ways that won't work.<br> - Thomas Edison",
    "The only way to do great work is to love what you do.<br> - Steve Jobs",
    "In three words I can sum up everything I've learned about life: it goes on.<br> - Robert Frost",
    "Believe you can and you're halfway there. <br>- Theodore Roosevelt",
    "All our dreams can come true, if we have the courage to pursue them. <br>- Walt Disney",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.<br> - Winston Churchill",
    "The best way to predict your future is to create it. <br>- Abraham Lincoln",
    "If you want to live a happy life, tie it to a goal, not to people or things. <br>- Albert Einstein",
    "Happiness is not something ready made. It comes from your own actions. <br>- Dalai Lama"
];
let usedIndexs=[]
 let btn=document.getElementById("btn");
 btn.addEventListener("click", function(){
    let output=document.getElementById("output-qoute");
    let randomIndex= Math.floor(Math.random() * quotes.length);
    if(usedIndexs.length === quotes.length){
        usedIndexs=[]
    }
    while(usedIndexs.includes(randomIndex)){
        randomIndex= Math.floor(Math.random() * quotes.length);
    }
    
    usedIndexs.push(randomIndex)
    output.innerHTML=quotes[randomIndex]
    console.log(randomIndex);
    
    

 })



