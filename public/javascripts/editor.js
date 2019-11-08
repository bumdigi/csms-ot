// editor부분에 필요한 javascript정의 codemirror open source library 사용
// 현재는 선언부만 적용
$(() => {
  var textarea = document.querySelector('#editor')
  var editor = CodeMirror.fromTextArea(textarea, {
      lineNumbers: true,
      lineWrapping: true,
      theme: 'eclipse',
      mode:  'javascript',
      val: textarea.value
  })
})
