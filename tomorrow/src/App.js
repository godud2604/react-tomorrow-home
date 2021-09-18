import './App.css'
import avatar from './assets/images/img-user-01.jpg'

function App() {
  return (
    <div className="container">
      <div className="row">
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
      </div>
    </div>
  )
}

export default App
