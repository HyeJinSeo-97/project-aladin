const TOP_ITEMS = [
  {
    key: 'notice',
    title: '공지사항',
    prevIcon: 'mdi-bell',
    order: true
  },
  {
    key: 'quick_service',
    title: '빠른 서비스',
    prevIcon: 'mdi-account-wrench',
    order: false
  },
  {
    key: 'publisher',
    title: '출판사, 판매자 안내',
    prevIcon: 'mdi-send',
    order: false
  }
]

const LISTS = {
  notice: [
    {
      key: 0,
      text: '4월 신용카드 무이자 안내',
      active: false
    },
    {
      key: 0,
      text: '[채용공고] 알라딘 신규 서비스 계약직 QA',
      active: true
    },
    {
      key: 0,
      text: '[채용공고] 도서사업본부 마케터(휴직자 대체)',
      active: true
    },
    {
      key: 0,
      text: '[채용공고] DBA',
      active: true
    }
  ],
  quick_service: [
    {
      key: 0,
      text: '반품/교환'
    },
    {
      key: 1,
      text: '신청 증빙서류 신청'
    },
    {
      key: 2,
      text: '미배송 신고'
    },
    {
      key: 3,
      text: '입금신고'
    }
  ],
  publisher: [
    {
      key: 0,
      text: '제휴&마케팅 안내'
    },
    {
      key: 1,
      text: '출판사/공급사 안내'
    },
    {
      key: 2,
      text: '광고 안내'
    },
    {
      key: 3,
      text: '판매자 매니저'
    },
    {
      key: 4,
      text: '학교/기업/기관 대량구매'
    }
  ]
}

const BOTTOM_ITEMS = [
  {
    key: 'special_service',
    title: '스페셜 서비스',
    lists: [
      { key: 0, text: '독자북펀드' },
      { key: 1, text: '알라딘 멤버십' },
      { key: 2, text: '선물하기/선물상품권' },
      { key: 3, text: '알라딘 US' },
      { key: 4, text: '알림센터' },
      { key: 5, text: '품절도서센터' },
      { key: 6, text: '알라딘 캐시' },
      { key: 7, text: '전자책 캐시' }
    ]
  },
  {
    key: 'satisfy_price',
    title: '가격 만족',
    lists: [
      { key: 0, text: '2천원 추가 마일리지' },
      { key: 1, text: 'Thanks to 적립금' },
      { key: 2, text: '최저가격 계산기' },
      { key: 3, text: '최저가 보상제도' }
    ]
  },
  {
    key: 'satisfy_delivery',
    title: '배송 만족',
    lists: [
      { key: 0, text: '양탄자배송/당일배송' },
      { key: 1, text: '편의점 배송' },
      { key: 2, text: '수령일 예고제' }
    ]
  },
  {
    key: 'blog_sns',
    title: '블로그 & SNS',
    lists: [
      { key: 0, text: '알라딘 북플' },
      { key: 1, text: '알라딘 서재' },
      { key: 2, text: '알라딘 트위터' },
      { key: 3, text: '알라딘 페이스북' },
      { key: 4, text: '알라딘 인스타그램' }
    ]
  },
  {
    key: 'web_mobile',
    title: '웹 & 모바일',
    lists: [
      { key: 0, text: 'Open API' },
      { key: 1, text: '모바일/앱' }
    ]
  },
  {
    key: 'alliance_service',
    title: '제휴 서비스',
    lists: [
      { key: 0, text: '제휴 할인카드' },
      { key: 1, text: '문화상품권<Br />(지류/온라인)' },
      { key: 2, text: '컬쳐랜드상품권' },
      { key: 3, text: '아시아나항공 마일리지' },
      { key: 4, text: '에쓰오일 S포인트' },
      { key: 5, text: '문화누리카드' },
      { key: 6, text: '알라딘 전자도서관' },
      { key: 7, text: '도서판매사업자 서비스' }
    ]
  }
]

const FOOTER_MENUS = [
  {
    key: 0,
    text: '회사소개',
    active: false
  },
  {
    key: 1,
    text: '채용안내',
    active: false
  },
  {
    key: 2,
    text: '이용약관',
    active: false
  },
  {
    key: 3,
    text: '개인정보처리방침',
    active: true
  },
  {
    key: 4,
    text: '청소년 보호정책',
    active: false
  },
  {
    key: 5,
    text: '중고매장',
    active: false
  },
  {
    key: 6,
    text: '제휴·마케팅 안내',
    active: false
  },
  {
    key: 7,
    text: '판매자 매니저',
    active: false
  },
  {
    key: 8,
    text: '출판사·공급사 안내',
    active: false
  },
  {
    key: 9,
    text: '광고 안내',
    active: false
  },
  {
    key: 10,
    text: '학교·기업·기관 대량구매',
    active: false
  }
]

export { TOP_ITEMS, LISTS, BOTTOM_ITEMS, FOOTER_MENUS }
