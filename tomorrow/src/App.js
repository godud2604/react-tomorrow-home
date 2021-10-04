import './App.css'
// images
import logo from './assets/images/logo.svg'
import avatar from './assets/images/img-user-01.jpg'

function App() {
  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb-left">
              <h1 className="logo">
                <a href="/">
                  <img src={logo} alt="내일의 집" />
                </a>
              </h1>

              <nav className="sm-hidden">
                {/* nav 태그 > heading 태그 필수 ! title의 내용을 적어준다. */}
                <h2 className="visually-hidden">메뉴</h2>
                <ul className="gnb-nav-list">
                  <li className="gnb-nav-item">
                    <a href="/">커뮤니티</a>
                  </li>
                  <li className="gnb-nav-item">
                    <a href="/">스토어</a>
                  </li>
                  <li className="gnb-nav-item">
                    <a href="/">인테리어시공</a>
                  </li>
                </ul>
              </nav>

              <button
                className="gnb-icon-button sm-only"
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

              <div className="button-group">
                <button
                  className="gnb-icon-button lg-hidden"
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
                  className="gnb-icon-button"
                  href="/"
                  aria-label="장바구니 페이지로 이동"
                >
                  <i className="ic-cart"></i>
                </a>

                <button
                  className="gnb-avatar-button sm-hidden"
                  type="button"
                  aria-label="마이메뉴 버튼"
                >
                  <div className="avatar-32">
                    <img src={avatar} alt="사딸라 아저씨" />
                  </div>
                </button>
              </div>

              <button className="btn-primary btn-40 sm-hidden" type="button">
                글쓰기
                {/* 중요하지 않은 것 : aria-hidden */}
                <i className="ic-chevron" aria-hidden></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default App
