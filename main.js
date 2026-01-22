$(document).ready(function () {

    eel.init()()

    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn",
        },
        out: {
            effect: "bounceout",
        },
    });

    // siri configuration 
    var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true
    });
    
    // siri message animation 
     $('.siri-message').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "fadeInUp",
            sync: true,
        },
        out: {
            effect: "fadeOutUp",
            sync: true
        },
    });

    // Mic button click event 
    
    $("#MicBtn").click(function () { 
        eel.playAssistantSound()
        $("#Oval").attr("hidden", true);
        $("#SiriWave").attr("hidden", false)
        eel.allCommands()
    
    });
    
    function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time

        if (e.key === 'j' && e.metaKey) {
            eel.playAssistantSound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);

    // to play assisatnt 
    function PlayAssistant(message) {

        if (message != "") {

            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allCommands(message);
            $("#chatbox").val("")
            $("#MicBtn").attr('hidden', false);
            $("#SendBtn").attr('hidden', true);

        }

    }

     // toogle fucntion to hide and display mic and send button 
     $(document).ready(function () {

    // ==============================
    // Show / Hide Mic & Send Button
    // ==============================
    function ShowHideButton(message) {
        if (message.trim().length === 0) {
            $("#MicBtn").removeAttr("hidden");
            $("#SendBtn").attr("hidden", true);
        } else {
            $("#MicBtn").attr("hidden", true);
            $("#SendBtn").removeAttr("hidden");
        }
    }

    // ==============================
    // Add message to chat history
    // ==============================
    function addMessage(sender, message) {
        let className = sender === "user" ? "user-msg" : "bot-msg";

        $("#chat-body").append(`
            <div class="${className}">
                ${message}
            </div>
        `);

        $("#chat-body").scrollTop($("#chat-body")[0].scrollHeight);
    }

    // ==============================
    // Send message logic
    // ==============================
    function sendMessage() {
        let message = $("#chatbox").val().trim();
        if (message === "") return;

        // show user message
        addMessage("user", message);

        // clear input
        $("#chatbox").val("");
        ShowHideButton("");

        // call assistant
        PlayAssistant(message);
    }

    // ==============================
    // Input keyup (toggle buttons)
    // ==============================
    $("#chatbox").on("keyup", function () {
        ShowHideButton($(this).val());
    });

    // ==============================
    // Send button click
    // ==============================
    $("#SendBtn").on("click", function () {
        sendMessage();
    });

    // ==============================
    // Enter key press
    // ==============================
    $("#chatbox").on("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    });

    // ==============================
    // Example Assistant Response
    // (replace with backend/API)
    // ==============================
    window.PlayAssistant = function (message) {
        let response = "You said: " + message;
        addMessage("bot", response);
    };

});


});