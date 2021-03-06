import React from 'react'
import avatar from '../assets/images/img-user-01.jpg'
import logo from '../assets/images/logo.svg'
import avatarBase from '../assets/images/img-user-default.png'

const Aside = () => {
  return (
    <aside className="sidebar sm-only">
      <header className="sidebar-header">
        <h1 className="logo">
          <a href="/">
            <img src={logo} alt="내일의 집" />
          </a>
        </h1>

        {/* NOTE: 로그인을 한 경우 */}
        <div className="sidebar-user">
          <a href="/">
            <div
              className="avatar-24"
              style={{ backgroundImage: `url(${avatarBase})` }}
            >
              <img src={avatar} alt="사딸라 아저씨" />
            </div>
            <strong className="username">
              사딸라사딸라사딸라사딸라사딸라사딸라사딸라
            </strong>
          </a>
        </div>

        {/* NOTE: 로그인을 하지 않은 경우 */}
        {/* <div className="sidebar-auth">
          <a className="btn-40 btn-outlined" href="/">
            로그인
          </a>
          <a className="btn-40 btn-primary" href="/">
            회원가입
          </a>
        </div> */}
      </header>

      <nav className="sidebar-nav">
        <h2 className="visually-hidden">메뉴</h2>

        <div className="drawer-menu is-community">
          <button type="button" className="drawer-menu-button">
            <i className="ic-community" aria-hidden></i>
            커뮤니티
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">사진</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">집들이</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">노하우</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">전문가집들이</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">셀프가이드</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">질문과답변</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">이벤트</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-menu is-store is-active is-open">
          <button type="button" className="drawer-menu-button">
            <i className="ic-store" aria-hidden></i>
            스토어
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">스토어</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">카테고리</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">신혼가구</a>
              </li>
              <li className="drawer-menu-item is-active">
                <a href="/">
                  기획전<i className="ic-new" lang="en" aria-label="New"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="drawer-menu is-expert">
          <button type="button" className="drawer-menu-button">
            <i className="ic-expert" aria-hidden></i>
            인테리어시공
            <i className="ic-chevron" aria-hidden></i>
          </button>

          <div className="drawer-menu-content">
            <ul className="drawer-menu-list">
              <li className="drawer-menu-item">
                <a href="/">시공홈</a>
              </li>
              <li className="drawer-menu-item">
                <a href="/">사진</a>
              </li>
            </ul>
          </div>
        </div>

        {/* NOTE: 로그인을 한 경우 */}
        <div className="sidebar-user-menu">
          <ul className="user-menu-list">
            <li className="user-menu-item">
              <a href="/">마이페이지</a>
            </li>
            <li className="user-menu-item">
              <a href="/">나의 쇼핑</a>
            </li>
            <li className="user-menu-item">
              <a href="/">스크랩북</a>
            </li>
            <li className="user-menu-item">
              <a href="/">알림</a>
            </li>
            <li className="user-menu-item">
              <a href="/">이벤트</a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Aside
