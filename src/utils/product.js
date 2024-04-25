const LIKE_KEY = 'like'

export const setLike = bookIsbn => {
  const likes = getLike()
  likes.push(bookIsbn)
  sessionStorage.setItem(LIKE_KEY, JSON.stringify(likes))
}

export const getLike = () => {
  const likes = sessionStorage.getItem(LIKE_KEY)
  return likes ? JSON.parse(sessionStorage.getItem(LIKE_KEY)) : []
}

export const removeLike = bookIsbn => {
  const likes = getLike()
  if (likes.length < 1) return

  const targetBookIndex = likes.findIndex(el => el === bookIsbn)
  if (targetBookIndex < 0) return

  likes.splice(targetBookIndex, 1)
  sessionStorage.setItem(LIKE_KEY, JSON.stringify(likes))
}
