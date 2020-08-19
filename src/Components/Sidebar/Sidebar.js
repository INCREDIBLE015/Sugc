import React from 'react'
import Card from '@material-ui/core/Card';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
          <Card className="sidebar__card">
              <div className="sidebar__header">
                  <h6>TOP CATEGORIES</h6>
                  <h6 className="sidebar__header__all">ALL</h6>
              </div>

              <Card className="sidebar__content__card" >
                <div className="sidebar__content">
                  <img className="sidebar__content__img" src="https://www.snopes.com/tachyon/2018/09/10441385_10155220197675725_8756984795508609976_n.jpg" alt="" />
                  <div className="sidebar__content__message">
                      <h4>Politics</h4>
                      <h7>59 posts</h7>
                  </div>
                  </div>
              </Card>
              <Card className="sidebar__content__card" >
                <div className="sidebar__content">
                  <img className="sidebar__content__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/New_Zealand-Portugal_%2820%29.jpg/220px-New_Zealand-Portugal_%2820%29.jpg" alt="" />
                  <div className="sidebar__content__message">
                      <h4>Sports</h4>
                      <h7>128 posts</h7>
                  </div>
                  </div>
              </Card>
              <Card className="sidebar__content__card" >
                <div className="sidebar__content">
                  <img className="sidebar__content__img" src="https://static.bhphoto.com/images/images1000x1000/1575481001_1521741.jpg" alt="" />
                  <div className="sidebar__content__message">
                      <h4>Games</h4>
                      <h7>31 posts</h7>
                  </div>
                  </div>
              </Card>
              <Card className="sidebar__content__card" >
                <div className="sidebar__content">
                  <img className="sidebar__content__img" src="https://qph.fs.quoracdn.net/main-qimg-72edfc6806c328d5392a6d348e7eff6d" alt="" />
                  <div className="sidebar__content__message">
                      <h4>TV Shows</h4>
                      <h7>237 posts</h7>
                  </div>
                  </div>
              </Card>
              <Card className="sidebar__footer__card">
              <div className="sidebar__footer">
                  <img className="sidebar__footer__img" src="https://images.all-free-download.com/images/graphiclarge/back_to_school_banner_educational_icons_on_yellow_background_6826373.jpg" alt="" />
                  </div>
              </Card>
          </Card>
        </div>
    )
}

export default Sidebar
