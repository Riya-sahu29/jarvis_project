import cv2
import os

cam = cv2.VideoCapture(0, cv2.CAP_DSHOW)
cam.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cam.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

detector = cv2.CascadeClassifier(
    "engine\\auth\\haarcascade_frontalface_default.xml"
)

face_id = input("Enter a Numeric user ID here: ")
print("Taking samples, look at camera .......")

count = 0
MAX_SAMPLES = 100

while True:
    ret, img = cam.read()
    if not ret:
        print("Failed to read frame")
        break

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = detector.detectMultiScale(gray, 1.3, 5)

    for (x, y, w, h) in faces:
        cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)
        count += 1

        cv2.imwrite(
            f"engine\\auth\\samples\\face.{face_id}.{count}.jpg",
            gray[y:y+h, x:x+w]
        )

    cv2.imshow('image', img)

    k = cv2.waitKey(1) & 0xff

    if k == 27:  # ESC key
        print("Exit by user")
        break

    if count >= MAX_SAMPLES:
        print("Samples collected")
        break

print("Samples taken now closing the program....")
cam.release()
cv2.destroyAllWindows()


