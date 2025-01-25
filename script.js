
        const text = "xx";
        const typingSpeed = 140;
        const pauseAfterTyping = 4000;

        const myName = document.querySelector(".my-name");
        const cursor = document.querySelector(".cursor");

        function typeText() {
            let i = 0;
            const interval = setInterval(() => {
                if (i < text.length) {
                    myName.textContent += text[i];
                    i++;
                    updateCursorPosition();
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        clearText();
                    }, pauseAfterTyping);
                }
            }, typingSpeed);
        }

        function clearText() {
            let i = text.length;
            const interval = setInterval(() => {
                if (i > 0) {
                    myName.textContent = myName.textContent.slice(0, -1);
                    i--;
                    updateCursorPosition();
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        typeText();
                    }, typingSpeed);
                }
            }, typingSpeed);
        }

        function updateCursorPosition() {
            const textWidth = myName.offsetWidth;
            cursor.style.left = `${textWidth}px`;
        }

        typeText();
         
        document.addEventListener('mousemove', (event) => { 
            const circle = document.getElementById('circle'); 
            circle.style.left = `${event.clientX}px`; 
            circle.style.top = `${event.clientY}px`; 
        });




        



        
        
        