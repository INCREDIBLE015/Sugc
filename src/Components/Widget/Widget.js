import React from 'react';
import Card from '@material-ui/core/Card';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import "./Widget.css";

function Widget() {
    return (
        <div className="widget">
             <Card className="widget__card">
              <div className="widget__header">
                  <h6>POPULAR POSTS</h6>
                  <h6 className="widget__header__all">MORE</h6>
              </div>

              <Card className="widget__content__card" >
                <div className="widget__content">
                  <img className="widget__content__img" src="https://www.snopes.com/tachyon/2018/09/10441385_10155220197675725_8756984795508609976_n.jpg" alt="" />
                  <div className="widget__content__message">
                      <h5>Unexpected views of New York City</h5>
                  </div>
                  </div>
                  <div className="widget__content__message1">
                      <h8>Using a tablecloth makes food taste better, study finds..</h8>
                  </div>
                  <div className="widget__content__read">
                      <h4 className="widget__content__read__read">READ</h4>
                  </div>
              </Card>
              <Card className="widget__content__card" >
                <div className="widget__content">
                  <img className="widget__content__img" src="https://www.snopes.com/tachyon/2018/09/10441385_10155220197675725_8756984795508609976_n.jpg" alt="" />
                  <div className="widget__content__message">
                      <h5>Unexpected views of New York City</h5>
                  </div>
                  </div>
                  <div className="widget__content__message1">
                      <h8>Using a tablecloth makes food taste better, study finds..</h8>
                  </div>
                  <div className="widget__content__read">
                      <h4 className="widget__content__read__read">READ</h4>
                  </div>
              </Card>
              <Card className="widget__content__card" >
                <div className="widget__content">
                  <img className="widget__content__img" src="https://www.snopes.com/tachyon/2018/09/10441385_10155220197675725_8756984795508609976_n.jpg" alt="" />
                  <div className="widget__content__message">
                      <h5>Unexpected views of New York City</h5>
                  </div>
                  </div>
                  <div className="widget__content__message1">
                      <h8>Using a tablecloth makes food taste better, study finds..</h8>
                  </div>
                  <div className="widget__content__read">
                      <h4 className="widget__content__read__read">READ</h4>
                  </div>
              </Card>

              <div className="widget__header">
                  <h6>FRIEND SUGGESTIONS</h6>
                  <h6 className="widget__header__all">ALL</h6>
              </div>

              <div className="widget__card__content3">
                    <img className="widget__card__img" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" />
                <div className="widget__card__right">
                    <h5>Blake Scott</h5>

                    <div className="widget__card__button">
                         <h6>@blake</h6>
                    </div>
                </div>
                <div className="widget__card__left">
                    <AddCircleIcon  className="widget__card__left__icon"/>
                </div>
            </div>

            <div className="widget__card__content3">
                    <img className="widget__card__img" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" />
                <div className="widget__card__right">
                    <h5>Blake Scott</h5>

                    <div className="widget__card__button">
                         <h6>@blake</h6>
                    </div>
                </div>
                <div className="widget__card__left">
                    <AddCircleIcon  className="widget__card__left__icon"/>
                </div>
            </div>
            <div className="widget__card__content3">
                    <img className="widget__card__img" src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg" alt="" />
                <div className="widget__card__right">
                    <h5>Blake Scott</h5>

                    <div className="widget__card__button">
                         <h6>@blake</h6>
                    </div>
                </div>
                <div className="widget__card__left">
                    <AddCircleIcon  className="widget__card__left__icon"/>
                </div>
            </div>
             
          </Card>
        </div>
    )
}

export default Widget
