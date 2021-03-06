import React from 'react'
// images
import logo from '../assets/images/logo.svg'
import avatar from '../assets/images/img-user-01.jpg'

const Gnb = () => {
  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-wrapper">
              <div className="gnb-left">
                <h1 className="logo">
                  <a href="/">
                    <img src={logo} alt="내일의 집" />
                  </a>
                </h1>
                <nav className="gnb-nav sm-hidden">
                  {/* nav 태그 > heading 태그 필수 ! title의 내용을 적어준다. */}
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul className="gnb-nav-list">
                    <li className="gnb-nav-item">
                      <a href="/">커뮤니티</a>
                    </li>
                    <li className="gnb-nav-item is-active">
                      <a href="/">스토어</a>
                    </li>
                    <li className="gnb-nav-item">
                      <a href="/">인테리어시공</a>
                    </li>
                  </ul>
                </nav>
                <button
                  className="gnb-icon-button is-menu sm-only"
                  type="button"
                  aria-label="메뉴 열기 버튼"
                >
                  <i className="ic-menu"></i>
                </button>
              </div>
              <div className="gnb-right">
                <div className="input-group lg-only">
                  <i className="ic-search" aria-hidden></i>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="스토어 검색"
                  />
                </div>

                {/* NOTE: 로그인을 한 경우 */}
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

                  <div className="my-menu sm-hidden">
                    <button
                      className="my-menu-button is-active"
                      type="button"
                      aria-label="마이메뉴 버튼"
                    >
                      <img src={avatar} alt="사딸라 아저씨" />
                    </button>

                    <div className="my-menu-content">
                      <ul className="my-menu-list">
                        <li className="my-menu-item">
                          <a href="/">마이페이지</a>
                        </li>
                        <li className="my-menu-item">
                          <a href="/">나의쇼핑</a>
                        </li>
                        <li className="my-menu-item">
                          <a href="/">이벤트</a>
                        </li>
                        <li className="my-menu-item">
                          <button type="button">로그아웃</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* NOTE: 로그인을 하지 않은 경우 */}
                {/* <div className="button-group">
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
                </div> */}

                <button className="btn-primary btn-40 sm-hidden" type="button">
                  글쓰기
                  {/* 중요하지 않은 것 : aria-hidden */}
                  <i className="ic-chevron" aria-hidden></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Gnb
