import Swal from 'sweetalert2/dist/sweetalert2.js'
import '@/assets/swal.scss'

const TYPE = {
  error: '오류',
  notice: '알림'
}
const self = ({ title, text, confirm, deny }) =>
  Swal.fire({
    title,
    text,
    showConfirmButton: confirm?.show,
    showDenyButton: deny?.show,
    confirmButtonText: confirm?.text || '확인',
    denyButtonText: deny?.text || '닫기'
  }).then(result => {
    if (result.isConfirmed) {
      confirm?.cb && confirm.cb()
    } else {
      deny?.cb && deny.cb()
    }
  })

export default {
  confirm: ({ text, confirm, deny }) => {
    const options = {
      title: '알림',
      text,
      confirm: { show: true, ...confirm },
      deny: { show: true, ...deny }
    }
    self(options)
  },
  notice: ({ type, text, deny }) => {
    const options = {
      text,
      title: TYPE[type] || '알림',
      confirm: { show: false },
      deny: { show: true, text: '확인', ...deny }
    }
    self(options)
  }
}
