/*
*Let's begin to code
*
*/


let screen=document.getElementById('screen');
let button=document.querySelectorAll('button');

let screenValue='';

screen.value='0';

for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is',buttonText);


        //clear screen
        if(screen.value=='Infinity' || screen.value=="Can't divide by 0"){
            screen.value='0';
        }



        if(buttonText=='X'){

         

            let last=screen.value[screen.value.length-1];
            if(last=='-' || last=='/'||last=='+')
            {
                 screen.value=screen.value.slice(0,screen.value.length-1);
                 screenValue=screenValue.slice(0,screenValue.length-1);
                 
                 screen.value+=buttonText;
                 buttonText='*';
                 screenValue+=buttonText;
                
             
            }

            else if(screen.value[screen.value.length-1]!='X')
            {
             screen.value+=buttonText;
             buttonText='*';
             screenValue+=buttonText;
            }
            
            
        }
        else if(buttonText=='%'){

            let last=screen.value[screen.value.length-1];
            if(last=='-' || last=='/'||last=='+'||last=='X')
            {
                 screen.value=screen.value.slice(0,screen.value.length-1);
                 screenValue=screenValue.slice(0,screenValue.length-1);

                 screenValue=eval(screenValue)/100;
                 screen.value=""+screenValue;
            }

        
            else 
            {
            screenValue=eval(screenValue)/100;
            screen.value=""+screenValue;
            }

        }

        else if(buttonText=='+'){
    
            let last=screen.value[screen.value.length-1];
    
                if(last=='-' || last=='/'||last=='X')
               {
                    screen.value=screen.value.slice(0,screen.value.length-1);
                    screenValue=screenValue.slice(0,screenValue.length-1);
                    screenValue+=buttonText;
                    screen.value+=buttonText;
                
               }
               else if(screen.value[screen.value.length-1]!='+')
               {
                screenValue+=buttonText;
                screen.value+=buttonText;
               }
    
           }
           else if(buttonText=='-'){
    
            let last=screen.value[screen.value.length-1];
    
                 if(last=='+' || last=='/'||last=='X')
                {
                     screen.value=screen.value.slice(0,screen.value.length-1);
                     screenValue=screenValue.slice(0,screenValue.length-1);
                     screenValue+=buttonText;
                     screen.value+=buttonText;
                
                }
                else if(screen.value[screen.value.length-1]!='-')
                {
                 screenValue+=buttonText;
                 screen.value+=buttonText;
                }
    
           }
           else if(buttonText=='/')
           {
            let last=screen.value[screen.value.length-1];
            if(last=='+' || last=='-'||last=='X')
            {
                 screen.value=screen.value.slice(0,screen.value.length-1);
                 screenValue=screenValue.slice(0,screenValue.length-1);
                 screenValue+=buttonText;
                 screen.value+=buttonText;
            
            }
            else if(screen.value[screen.value.length-1]!='/')
            {
             screenValue+=buttonText;
             screen.value+=buttonText;
            }
    
           }
           
        //evaluate
        else if(buttonText=='='){

            screenValue=eval(screenValue);

            if(screenValue==NaN || screenValue=="Infinity")
            {
                screen.value="Can't divide by 0";
                screenValue='';
            }
            else{

                screen.value=screenValue;
            }
        }   


        //backspace

       else if(buttonText=='back'){
           

           if(typeof(screenValue)==="number")
           {
               screenValue="";
               screen.value="0";
           }
           else if(screen.value.length==1){
               screen.value=0;
               screenValue=screenValue.slice(0,screenValue.length-1);
           }
           else
           {
            screen.value=screen.value.slice(0,screen.value.length-1);
            screenValue=screenValue.slice(0,screenValue.length-1);
           } 

       }
       //clear
       else if(buttonText=='C'){
        screen.value='0';
        screenValue='';
       }

       
        else{
            //normal number input

            if(screen.value=='0' && screen.value.length==1)
            {
                screen.value='';
            }

            screenValue+=buttonText;
            screen.value+=buttonText;

        }
        
    })
}
