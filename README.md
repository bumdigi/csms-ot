# todo-today server 단

* 설치
  1) git clone https://github.com/bumdigi/csms-ot.git
  2) csms-ot 폴더 까지 콘솔창 접근 후 npm install

* 실행
  1) nodemon 다운로드 - nodemon은 소스가 수정되면 자동으로 재기동을 해주어 소스 수정 후 재기동이 필요없음.
  2) 설치
  프로젝트 내에서 dev옵션으로 설치
  npm install nodemon --save-dev
  또는 전역설치
  npm install nodemon -g  
  3) 실행
  프로젝트 app.js 있는 위치까지 콘솔창으로 접근 후
  nodemon app.js
  
* 소스 설명
  1) node.js의 웹 프레임워크인 express를 사용 함
  2) express의 template engine인 pug사용 (spring과 jsp의 관계)
  3) editor부분은 codemirror라는 에디터 오픈소스를 적용함. codemirror검색해서 다양한 기능 넣을 수 있음
  4) 현재 혹시나 socket실시간 통신이 필요할 수도 있을거 같아서 간단하게 input창으로 채팅기능 개발한 상태임

* 해야할 것
  1) DB 선정 및 연동 - 필요할 경우
  2) 화면 UI 개선 - bootstrap을 생각중인데 더 좋은게 있으면 그걸로 해도 될듯
  3) codemirror라이브러리 사용하거나 직접 개발하여 editor기능 동작하도록 수정(마크업 강조, 변수나 함수에 글자색, 언어 모드 전환 등등)

