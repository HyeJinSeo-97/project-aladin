export const TOOLBAR_ACTIONS = [
  {
    key: 'login',
    text: '로그인'
  },
  {
    key: 'logout',
    text: '로그아웃'
  },
  {
    key: 'myPage',
    text: '마이페이지',
    subList: [
      { title: '나의 계정' },
      { title: '주문/배송 조희' },
      { title: '보관함' },
      { title: '구매함' },
      { title: '나의 서재' }
    ]
  },
  {
    key: 'cart',
    text: '장바구니'
  },
  {
    key: 'qa',
    text: '고객센터'
  }
]

export const MENUS = [
  {
    key: 'book',
    title: '국내 도서',
    path: '/',
    vertical: true,
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' },
      { title: '요리/살림' },
      { title: '유아' },
      { title: '인문학' },
      { title: '자기계발' },
      { title: '잡지' },
      { title: '장르소설' },
      { title: '전집/중고전집' },
      { title: '종교/역학' },
      { title: '청소년' },
      { title: '컴퓨터/모바일' },
      { title: '초등학교참고서' },
      { title: '중학교참고서' },
      { title: '고등학교참고서' }
    ]
  },
  {
    key: 'foreign',
    title: '외국 도서',
    path: '/',
    vertical: true,
    subMenus: [
      { title: '영미도서' },
      { title: 'ETL/어학/사전' },
      { title: '가정/원예/인테리어' },
      { title: '가족/관계' },
      { title: '건강/스포츠' },
      { title: '경제경영' },
      { title: '공예/취미/수집' },
      { title: '만화' },
      { title: '소설/시/희극' },
      { title: '여행' },
      { title: '역사' },
      { title: '요리' },
      { title: '인문/사회' },
      { title: '종교/명상/점술' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' },
      { title: '요리/살림' },
      { title: '유아' },
      { title: '인문학' },
      { title: '그림책' },
      { title: '동화책' },
      { title: '리더스' },
      { title: '영어학습' },
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '대학교재/전문서' },
      { title: '독일 도서' },
      { title: '스페인 도서' },
      { title: '중국 도서' },
      { title: '어린이' }
    ]
  },
  {
    key: 'ebook',
    title: 'eBook',
    path: '/',
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' }
    ]
  },
  {
    key: 'gift',
    title: '알라딘 굿즈',
    path: '/',
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' }
    ]
  },
  {
    key: 'used',
    title: '온라인 중고',
    path: '/',
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' }
    ]
  },
  { key: 'space', title: '우주점', path: '/' },
  {
    key: 'usedstore',
    title: '중고매장',
    path: '/',
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' }
    ]
  },
  {
    key: 'coffee',
    title: '커피',
    path: '/',
    subMenus: [
      { title: '원두' },
      { title: '드립백' },
      { title: '콜드브루' },
      { title: '커피 도구' },
      { title: '스탬프 이벤트' },
      { title: '일산 커피 팩토리' }
    ]
  },
  {
    key: 'music',
    title: '음반',
    path: '/',
    subMenus: [
      { title: '원두' },
      { title: '드립백' },
      { title: '콜드브루' },
      { title: '커피 도구' },
      { title: '스탬프 이벤트' },
      { title: '일산 커피 팩토리' }
    ]
  },
  {
    key: 'dvd',
    title: '블루레이',
    path: '/',
    subMenus: [
      { title: '건강/취미' },
      { title: '경제경영' },
      { title: '공무원 수험서' },
      { title: '과학' },
      { title: '달력/기타' },
      { title: '대학교재' },
      { title: '만화' },
      { title: '사회과학' },
      { title: '소설/시/희곡' },
      { title: '수험서/자격증' },
      { title: '어린이' },
      { title: '에세이' },
      { title: '여행' },
      { title: '역사' },
      { title: '예술/대중문화' },
      { title: '외국어' }
    ]
  },
  {
    key: 'bookstore',
    title: '북플 ·서재',
    path: '/',
    subMenus: [{ title: '북플' }, { title: '알라딘 서재' }, { title: '나의 서재' }]
  }
]

export const SUB_MENUS = [
  {
    key: 'jiny',
    title: '추천마법사',
    path: '/',
    first: [
      { title: '마법사의 선택' },
      { title: '신간 알리미' },
      { title: '서재 이웃의 선택' },
      { title: '오늘 본 상품' }
    ]
  },
  {
    key: 'bestseller',
    title: '베스트셀러',
    path: '/'
  },
  {
    key: 'newBook',
    title: '새로나온 책',
    path: '/',
    first: [{ title: '새로나온 책' }, { title: '새로나올 책' }]
  },
  {
    key: 'event',
    title: '이벤트',
    path: '/',
    first: [
      { title: '이벤트' },
      { title: '굿즈 총 집합' },
      { title: '정기 인하 도서' },
      { title: '작가와의 만남' }
    ]
  },
  {
    key: 'recommend',
    title: '추천도서',
    path: '/',
    first: [{ title: '추천 도서' }, { title: '출판사 랭킹' }]
  },
  {
    key: 'only',
    title: '단한권 인쇄소',
    path: '/'
  },
  {
    key: 'toBeContinue',
    title: '투비컨티뉴드',
    path: '/'
  }
]
