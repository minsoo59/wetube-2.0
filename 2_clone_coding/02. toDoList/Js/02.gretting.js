// gretting part
const form = document.querySelector(".js-form"), input = form.querySelector("input"), greetings = document.querySelector(".js-greetings");
const USER_LS = "currentUser", SHOWING_CN = "showing";

        // *Save function to localstorage
        function saveName(text){
            localStorage.setItem(USER_LS, text);
        }
        
        // when it's written value at input, to show up and save to localstorage function   
        function handleSubmit(event){
            // 이벤트기능이 document까지 가서 새로고침이 일어나지 않게함
            // The Prevent function that basic to do of event 
            event.preventDefault();
            const currentValue = input.value;
            // show up 
            paintGreeting(currentValue);
            // save
            saveName(currentValue);
        }
        
        // when she is not, to submit handleSubmit
        function askForName(){
            form.classList.add(SHOWING_CN);
            form.addEventListener("submit", handleSubmit);
        }
        // when she is, to show up user name function
        function paintGreeting(text){
            form.classList.remove(SHOWING_CN);
            greetings.classList.add(SHOWING_CN);
            greetings.innerText = `Hello ${text}`;
        }

    // *load function
    function loadname(){
        const currentUser = localStorage.getItem(USER_LS);
        if(currentUser === null) {
                // she is not
            askForName();
        } else {
                // she is
            paintGreeting(currentUser);
        }
    }

    // do function 
    function init(){
        loadname()
    }

init();
