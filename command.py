import pyttsx3
import speech_recognition as sr
import eel
import time

def speak(text):
    text = str(text)
    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[1].id)
    engine.setProperty('rate', 174)
    eel.DisplayMessage(text)
    engine.say(text)
    # eel.reciverText(text)
    engine.runAndWait()


def takecommand():
    
    r = sr.Recognizer()

    with sr.Microphone() as source:
        print('listening.....')
        eel.DisplayMessage('listening.....')
        r.pause_threshold = 1
        r.adjust_for_ambient_noise(source)

        audio = r.listen(source, 10, 6)

    try:
        print('recognizing')
        eel.DisplayMessage('recognizing....')
        query = r.recognize_google(audio, language='en-in')
        print(f"user said: {query}")
        eel.DisplayMessage(query)
        time.sleep(2)
        return query.lower()
    except Exception as e:
        return ""

@eel.expose
def allCommands(message=1):

    if message == 1:
        query = takecommand()
        print(query)
        eel.senderText(query)
    else:
        query = message
        eel.senderText(query)

    try:
       
        if "youtube" in query:
            from engine.features import PlayYoutube
            PlayYoutube(query)

        elif "open" in query:
            from engine.features import openCommand
            openCommand(query)


        elif "send message" in query or "phone call" in query or "video call" in query:
            from engine.features import findContact, whatsApp
            flag = ""
            contact_no, name = findContact(query)
            if(contact_no != 0):
                 
                if "send message" in query:
                    flag = 'message'
                    speak("what message to send")
                    query = takecommand()
                                        
                elif "phone call" in query:
                    flag = 'call'
                else:
                    flag = 'video call'
                                        
                whatsApp(contact_no, query, flag, name)
        else:
            from engine.features import chatBot
            chatBot(query)
    except Exception as e:
        print("ERROR:", e)

    eel.ShowHood()  

    
 