import './App.css'
import avatar from './assets/images/img-user-01.jpg'
// TEST
function App() {
  return (
    <div className="container">
      <div>
        <strong className="tag-red">특가</strong>
        <strong className="tag-gray">무료배송</strong>
        <strong className="tag-green">첫 리뷰 두 배 적립</strong>
      </div>

      <div>
        <div className="avatar-32">
          <img src={avatar} alt="사딸라 아저씨" />
        </div>
        <div className="avatar-24">
          <img src={avatar} alt="사딸라 아저씨" />
        </div>
      </div>

      <div>
        <div className="star-rating-13">
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
        </div>
        <div className="star-rating-16">
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
        </div>
        <div className="star-rating-20">
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
        </div>
        <div className="star-rating-24">
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
          <i className="ic-star is-active"></i>
        </div>
      </div>

      <div>
        <div class="price-off">
          <strong className="amount">40,000</strong>
          <span className="currency">원</span>
        </div>
        <div class="price-16">
          <strong className="amount">40,000</strong>
          <span className="currency">원</span>
        </div>
        <div class="price-20">
          <strong className="amount">40,000</strong>
          <span className="currency">원</span>
        </div>
        <div class="price-32">
          <strong className="amount">40,000</strong>
          <span className="currency">원</span>
        </div>
      </div>

      <div>
        <button type="button" className="btn-primary btn-32">
          버튼입니다
        </button>
        <button type="button" className="btn-secondary btn-32">
          버튼입니다
        </button>
        <button type="button" className="btn-outlined btn-32">
          버튼입니다
        </button>
        <button type="button" className="btn-ghost btn-32">
          버튼입니다
        </button>
      </div>

      <div>
        <button type="button" className="btn-primary btn-40">
          버튼입니다
        </button>
        <button type="button" className="btn-secondary btn-40">
          버튼입니다
        </button>
        <button type="button" className="btn-outlined btn-40">
          버튼입니다
        </button>
        <button type="button" className="btn-ghost btn-40">
          버튼입니다
        </button>
      </div>

      <div>
        <button type="button" className="btn-primary btn-48">
          버튼입니다
        </button>
        <button type="button" className="btn-secondary btn-48">
          버튼입니다
        </button>
        <button type="button" className="btn-outlined btn-48">
          버튼입니다
        </button>
        <button type="button" className="btn-ghost btn-48">
          버튼입니다
        </button>
      </div>

      <div>
        <button type="button" className="btn-primary btn-55" disabled>
          버튼입니다
        </button>
        <button type="button" className="btn-secondary btn-55" disabled>
          버튼입니다
        </button>
        <button type="button" className="btn-outlined btn-55" disabled>
          버튼입니다
        </button>
        <button type="button" className="btn-ghost btn-55" disabled>
          버튼입니다
        </button>
      </div>

      <div>
        <div className="select-group is-active">
          <select className="form-select">
            <option value="1">선택 사항 1</option>
            <option value="2">선택 사항 2</option>
            <option value="3">선택 사항 3</option>
            <option value="4">선택 사항 4</option>
            <option value="5">선택 사항 5</option>
          </select>
          <i className="ic-caret" aria-hidden></i>
        </div>

        <div className="input-group">
          <i className="ic-search" aria-hidden></i>
          <input className="form-input" type="text" placeholder="스토어 검색" />
        </div>
      </div>
    </div>
  )
}

export default App
