// 실시간 채팅 또는 에디터 부분 client-socket 통신을 위한 client측 소스
$(() => {
    const socket = io()
    $('form').submit(() => {
      socket.emit('chat message', $('#msg').val())
      $('#msg').val('')
      return false
    })
    socket.on('chat message', (msg) => {
      console.log(msg)
      $('#msgs').append($('<li>').text(msg))
    })
})
