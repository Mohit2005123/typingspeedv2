const wordsArray = [
    "a",
    "about",
    "act",
    "actually",
    "add",
    "after",
    "again",
    "against",
    "age",
    "ago",
    "air",
    "all",
    "also",
    "always",
    "am",
    "among",
    "an",
    "and",
    "animal",
    "another",
    "answer",
    "appear",
    "are",
    "area",
    "as",
    "ask",
    "back",
    "ball",
    "base",
    "be",
    "beauty",
    "because",
    "become",
    "bed",
    "been",
    "before",
    "began",
    "begin",
    "behind",
    "best",
    "better",
    "better",
    "between",
    "big",
    "bird",
    "black",
    "blue",
    "boat",
    "body",
    "book",
    "both",
    "bottom",
    "box",
    "boy",
    "bring",
    "brought",
    "build",
    "built",
    "busy",
    "but",
    "by",
    "call",
    "came",
    "can",
    "car",
    "care",
    "carefully",
    "carry",
    "centre",
    "certain",
    "change",
    "check",
    "child",
    "children",
    "city",
    "class",
    "clear",
    "close",
    "cold",
    "colour",
    "come",
    "common",
    "community",
    "complete",
    "contain",
    "could",
    "country",
    "course",
    "create",
    "cried",
    "cross",
    "cry",
    "cut",
    "dark",
    "day",
    "decide",
    "decided",
    "deep",
    "develop",
    "did",
    "different",
    "do",
    "does",
    "dog",
    "door",
    "down",
    "draw",
    "dream",
    "drive",
    "dry",
    "during",
    "each",
    "early",
    "earth",
    "east",
    "easy",
    "eat",
    "effort",
    "enough",
    "every",
    "example",
    "experience",
    "explain",
    "eye"
  ];

  const input= document.querySelector('input');
  const textbox= document.querySelector('.textbox');
  const card= document.querySelector('.card');
  const Keystrokes= document.querySelector('.KeyStrokes');
  const Result= document.querySelector('.Result');
  const timecount= document.querySelector('.time');
  const resetButton= document.querySelector('button');
  const Accuracy= document.querySelector('.Accuracy');
  const CorrectWords= document.querySelector('.Correct-Words');
  let timedup= false;
//   const Accuracy= document.querySelector()
  let correctwords=0;
  let keystrokes=0;
  let totalwords=0;
  for(let i=0; i<350; i++){
    let index= Math.floor(Math.random()*(wordsArray.length));
    let span= document.createElement('span');
    span.classList.add(i);
    span.innerText= wordsArray[index] + " ";
    textbox.appendChild(span);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    input.focus();
  });
  let isstarted= false;
  let index=0;
  let time=0;
  function starttimer(){
    let interval= setInterval(()=>{
        // console.log(time);
        time++;
        if(time<10){
            timecount.innerText=`00:0${time}`;
        }
        else{
            timecount.innerText=`00:${time}`;
        }
        if(time==60){
            clearInterval(interval);
            timedup= true;
            // input.remove();
            // console.log(card.style.display);
            card.style.setProperty('display', 'inline', 'important');
            //Resut
            //Keystrokes
            //Accuracy
            //Correct words
            console.log(`Number of correct words ${correctwords}`);
            Result.innerText=`Result - ${totalwords} WPM`
            Keystrokes.innerText= `KeyStrokes - ${keystrokes}`;
            let accuracy= ((correctwords/totalwords)*100).toFixed(2);
            Accuracy.innerText=`Accuray - ${accuracy}%`;
            CorrectWords.innerText=`Correct Words - ${correctwords}`;
           
        }
    }, 1000);

  }

  input.addEventListener('input', (event)=>{
    if(isstarted== false){
        isstarted= true;
        starttimer();
    }
    if(timedup== false){
        textbox.childNodes[1].classList.add('highlight');
    if(event.data>='a' && event.data<='z'){
        let str= textbox.childNodes[1].innerText;
        // console.log(str[index]);
        if(event.data!=str[index]){
            textbox.childNodes[1].classList.add('incorrect');
        }
        index++;
        keystrokes++;
    }
    if(event.data==' '){
        // console.log(input.value);
        // console.log(textbox.childNodes[1].innerText);
        if(isuseless(input.value)== false){
            totalwords++;
        }
        if(input.value=== textbox.childNodes[1].innerText){
            correctwords++;
        }
        // console.log('Spacebar was pressed');
        textbox.childNodes[1].remove();
        textbox.childNodes[1].classList.add('highlight');
        index=0;
        input.value='';
    }
    if(event.data==null){
        index--;
        let str= textbox.childNodes[1].innerText;
        let str2= input.value;
        console.log(str[index-1]);
        console.log(str2[str2.length-1]);
        if(str[index-1]==str2[str2.length-1]){
            textbox.childNodes[1].classList.remove('incorrect');
        }
    }
    }
    
    
    
  });
  resetButton.addEventListener('click', ()=>{
    location.reload();
  });
  function isuseless(str){
    for(let i=0; i<str.length; i++){
        if(str[i]!='' && str[i]!=' '){
            return false;
        }
    }
    return true;
  }