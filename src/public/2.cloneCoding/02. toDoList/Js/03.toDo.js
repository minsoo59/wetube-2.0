// to do list function
const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];
// let num = 1;

// *Delete function
function deleteToDo(event){
    // target을 쓰면 어떤 버튼을 클릭한지 알수있음.
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    // 화면상에서만 삭제e됨. 
    // **filter : foreach처럼 각각의 item과 같이 실행 그리고 배열 재생성
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

// *Save function
function saveToDos(){
    // loaclstorage에는 js데이터를 저장할수없음. 오직 striing타입만 저장가능
    // JSON.stringify는 js object를 string으로 바꿔줌
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// Total do function
function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    delBtn.style.border = "none";
    // 투명
    delBtn.style.backgroundColor = "transparent";
    const span = document.createElement("span");
    const newid = toDos.length + 1;
    span.innerText = (newid < 10 ? 0+`${newid}` : newid) + `. ` + text;
    // num++;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newid;
    toDoList.appendChild(li);
    li.style.listStyle = "none";
    li.style.textAlign = "center";
    li.style.margin = "8px";
    li.style.padding = "1px";
        // toDos 배열에 넣음.
        const toDoObj = {
            text: text,
            id: newid
        };
        toDos.push(toDoObj);
    saveToDos();    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    // 입력하고 엔터를 눌렀을때 생성후 리스트에 쓰여진 문자가 남아있지 않게
    toDoInput.value = "";
}

// data load
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        // string타입저장이기에 불러올려면 타입을 바꿔야함 json쓰기
        // console.log(loadedToDos);
        // JSON(Javescript Object Notation) 데이터를 전달할때 js가 그걸 다룰수 있도록, obj로 바꿔주는 기능이다.
        const parsedTodos = JSON.parse(loadedToDos);
        // console.log(parsedTodos);
        // **forEach : array가 가진 함수, array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜주는것.
        parsedTodos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();