let user=0;
let comp=0;

function display(res,userChoice,compChoice)
{
    let output=document.getElementById('output');
    if(res=='draw')
    {
        output.innerText="Match Draw";
    }
    else if(res==true)
    {
       output.innerText=`you win ${userChoice} beats ${compChoice}`;
       output.style.backgroundColor ="green";
       let uscore=document.getElementById('uscore');
       uscore.innerText=++user;
    }
    else if(res==false)
    {
        output.innerText=`you lose ${compChoice} beats ${userChoice}`;
        output.style.backgroundColor ="red"
        let cscore=document.getElementById('cscore');
        cscore.innerText=++comp;
    }
    
    setTimeout(()=>{
        output.innerText='Play your move';
        output.style.backgroundColor='black';
    },800)
}
function compPlay()  //Generating computer results
{
    let arr=['rock','paper','scissor'];
    let rand=Math.floor(Math.random()*3);
    return arr[rand];
}

function playGame(userChoice)
{
    let compChoice= compPlay();
    //console.log(compChoice);
    let result=true;
    if(userChoice===compChoice)
    {
        display('draw',userChoice,compChoice);
        return;
    }
    else
    {
        if(userChoice==='rock')
        {
            result= compChoice==='paper'? false : true;
        }
        else if(userChoice==='paper')
        {
            result= compChoice==='scissor' ? false : true;
        }
        else{
            result= compChoice==='rock' ? false : true;
        }
    }
    display(result,userChoice,compChoice);
}

let item=document.querySelectorAll('.item');
item.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice=choice.getAttribute('id');
        console.log(userChoice);
        playGame(userChoice);
    })
})