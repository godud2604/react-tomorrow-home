# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div className="button-group">
  <button
    className="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i className="ic-search"></i>
  </button>
  <a
    className="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동, 5개의 상품이 장바구니에 담겨있습니다."
  >
    <i className="ic-cart"></i>
    <strong className="badge">5</strong>
  </a>

  <div className="gnb-auth sm-hidden">
    <a href="">로그인</a>
    <a href="">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div className="button-group">
  <button
    className="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i className="ic-search"></i>
  </button>
  <a
    className="gnb-icon-button sm-hidden"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i className="ic-bookmark"></i>
  </a>
  <a
    className="gnb-icon-button sm-hidden"
    href="/"
    aria-label="내 소식 페이지로 이동"
  >
    <i className="ic-bell"></i>
  </a>
  <a
    className="gnb-icon-button is-cart"
    href="/"
    aria-label="장바구니 페이지로 이동, 5개의 상품이 장바구니에 담겨있습니다."
  >
    <i className="ic-cart"></i>
    <strong className="badge">5</strong>
  </a>
  <button
    className="gnb-avatar-button sm-hidden"
    type="button"
    aria-label="마이메뉴 버튼"
  >
    <div className="avatar-32">
      <img src="{avatar}" alt="사딸라 아저씨" />
    </div>
  </button>
</div>
```
