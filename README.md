## 로그인 기능 구현 

 -> prompt를 통해 이름을 입력받는다.(useEffect)
 -> socket(emit)을 통해 userName 전송 후 콜백함수를 통해 응답확인
 -> 백엔드 io.js에서 userName과 콜백함수의 정보 받음 
 -> askUserName 함수를 통한 prompt 실행

 ## 백엔드와 서버 연결 
 -> socket을 이용해 server.js에서 백엔드 주소입력후 연결

 ## 로그인 정보 저장 
 
  -> if문에서 res가 true이면 setUser에 useState를 통해 저장한다. 

## 대화창 + 메세지 보내기 
 -> message, setmessage, sendMessage를 받아 메세지를 송수신한다.(InputField.jsx)
 -> app.js에서 sendMessage 함수 활용 

## 메세지 받기 
 -> 백엔드에서 보낸 메세지를 `useEffect`를 통해 받는다 (socket.on) 

## 메세지 저장 
 -> 메세지 전체 저장 `messageList` -> `useState`를 사용(배열식)

## 메세지 보여주기 분류 
 -> 시스템과 나와 상대방의 메세지를 분리하여 보여주는 형태를 각기 다르게 해준다.
 -> 나의 메세지(오른쪽) 상대방(왼쪽) 시스템은 (상황메세지)


 ## 2개의 페이지 생성 
 -> `npm install react-router-dom ` 설치 
 -> 

