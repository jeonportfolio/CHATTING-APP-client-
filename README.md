## 로그인 기능 구현 

 -> prompt를 통해 이름을 입력받는다.(useEffect)
 -> socket(emit)을 통해 userName 전송 후 콜백함수를 통해 응답확인
 -> 백엔드 io.js에서 userName과 콜백함수의 정보 받음 

 ## 로그인 정보 저장 
 
  -> if문에서 res가 true이면 setUser에 useState를 통해 저장한다. 

## 대화창 만들기 
-> message, setmessage, sendMessage를 받아 메세지를 송수신한다.