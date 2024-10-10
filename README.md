# 채팅 프로그램 (프론트엔드 React.js 활용)<br/>


## 로그인 기능 구현 <br/>

 -> prompt를 통해 이름을 입력받는다.(useEffect)<br/>
 -> socket(emit)을 통해 userName 전송 후 콜백함수를 통해 응답확인<br/>
 -> 백엔드 io.js에서 userName과 콜백함수의 정보 받음 <br/>
 -> askUserName 함수를 통한 prompt 실행 emit을 통해 login 정보 전달<br/>

 ## 백엔드와 서버 연결 <br/>
 -> socket을 이용해 server.js에서 백엔드 주소입력후 연결<br/>

 ## 로그인 정보 저장 <br/>
 
  -> if문에서 res가 true이면 setUser에 useState를 통해 저장한다. <br/>

## 대화창 + 메세지 보내기 <br/>
 -> inputField-> 사용자 메세지 입력창 <br/>
 -> message, setmessage, sendMessage를 받아 메세지를 송수신한다.(InputField.jsx)<br/>
 -> app.js에서 sendMessage 함수 활용 <br/>

## 메세지 받기 <br/>
 -> 백엔드에서 보낸 메세지를 App.js에서 `useEffect`를 통해 받는다 (socket.on) <br/>

## 메세지 저장 <br/>
 -> 메세지 전체 저장 `messageList` -> `useState`를 사용(배열식)<br/>

## 메세지 보여주기 분류 <br/>
 -> MessageContainer ▶ 사용자에게 메세지 보여주는 컴포넌트<br/>
 -> 시스템과 나와 상대방의 메세지를 3가지 형태로 분리하여 보여주는 형태를 각기 다르게 해준다.<br/>
 -> 나의 메세지(오른쪽) 상대방(왼쪽) 시스템은 (상황메세지)<br/>




