import './index.scss';

function Index() {
  return (
    <div className="content">
      <header class="header" style={{ background: `linear-gradient(to bottom,rgba(92,77,66,0.8) 420%, rgba(239,170,102) 470%), url('/assets/img/banner.png') fixed` }}>
        <div className="description">
          <h1 className="title">Games are always better with friends!</h1>
          <hr className="separator"></hr>
          <p className="description">Start now an incredible adventure with your friends in discord! Earn money, fight yourself, marry yourself and more!</p>
          <a href="/invite" target="_blank" class="invite" rel="noopener noreferrer">Add to Discord!</a>
        </div>
      </header>
      <section className="get-started">

      </section>
    </div>
  )
}

export default Index;