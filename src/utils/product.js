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

const SEARCH_KEY = 'search'

export const setSearchBook = title => {
  const books = getSearchBooks()
  books.push(title)
  sessionStorage.setItem(SEARCH_KEY, JSON.stringify(books))
}

export const getSearchBooks = () => {
  const books = sessionStorage.getItem(SEARCH_KEY)
  return books ? JSON.parse(sessionStorage.getItem(SEARCH_KEY)) : []
}

export const allRemoveBook = () => {
  sessionStorage.setItem(SEARCH_KEY, JSON.stringify([]))
}
