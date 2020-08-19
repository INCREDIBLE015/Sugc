import React from 'react'
import Card from '@material-ui/core/Card';
import {  Button } from "@material-ui/core";
import ShareIcon from '@material-ui/icons/Share';
import ReplyIcon from '@material-ui/icons/Reply';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import "./Main.css";

function Main() {
    return (
        <div className="main">
      <Card className="main__card">
            <div className="main__card__content">
                <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Colin Leach</h4>
                    <h5>winners & losers from Hanpshire</h5>
                    <div className="main__card__button">
                    <Button className="main__button1" variant="outlined" >
                        <h4>politics</h4>
                    </Button>
                    <Button className="main__button2" variant="outlined" >
                        <h4>news</h4>
                    </Button>
                    <Button className="main__button3" variant="outlined" >
                        <h4>funny</h4>
                    </Button> 
                    </div>
                </div>
            </div>

            <div className="main__card__content1">
                    <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Akuba Stephen</h4>

                    <div className="main__card__button">
                         <h6>Sen. Bernie Sanders got the first clear win of 2020, while joe Biden's singl</h6>
                         <h6>-digit finish could spell a trouble</h6>
                    </div>
                </div>
            </div>

            <div className="main__card__content2">
                <div className="main__img">
                <img className="main__card__img1" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                </div>
                <div className="main__card__right2">
                    <h4>Akuba Stephen</h4>

                    <div >
                         <h6>On Tuesday, he railed about decorated combat veteran Lt. Col.</h6>
                    </div>
                    <div>
                    <img className="main__card__img2" src="https://c8.alamy.com/comp/F5HY1D/buttons-multimedia-play-pause-stop-concept-F5HY1D.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="main__card__content3">
                <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Blake Scott</h4>

                    <div className="main__card__button">
                         <h6>Trump attacks prosecutors, judge in twitter tirade defending</h6>
                         <h6>Roger Stone</h6>
                    </div>
                </div>
            </div>
            <div className="main__card__icons">
                <div className="main__card__icon1">
                    <ShareIcon />
                    <h6 className="main__card__icon1__space"><span><ReplyIcon /></span>12</h6>
                    <h6><span><AutorenewIcon /></span>4</h6>
                </div>
                <div className="main__card__icon2">
                    <h6 className="main__card__icon1__space"><span><FavoriteIcon className="main__card__icon1__love"/></span>356</h6>
                    <h6><span><ThumbDownIcon /></span>3</h6>
                </div>
            </div>
          </Card>
          <Card className="main__card">
            <div className="main__card__content">
                   
                <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Colin Leach</h4>
                    <h5>winners & losers from Hanpshire</h5>
                    <div className="main__card__button">
                    <Button className="main__button1" variant="outlined" >
                        <h4>politics</h4>
                    </Button>
                    <Button className="main__button2" variant="outlined" >
                        <h4>news</h4>
                    </Button>
                    <Button className="main__button3" variant="outlined" >
                        <h4>funny</h4>
                    </Button> 
                    </div>
                </div>
            </div>

            <div className="main__card__content1">
                <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Akuba Stephen</h4>

                    <div className="main__card__button">
                         <h6>Sen. Bernie Sanders got the first clear win of 2020, while joe Biden's singl</h6>
                         <h6>-digit finish could spell a trouble</h6>
                    </div>
                </div>
            </div>

            <div className="main__card__content2">
                <div className="main__img">
                <img className="main__card__img1" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                </div>
                <div className="main__card__right2">
                    <h4>Akuba Stephen</h4>

                    <div >
                         <h6>On Tuesday, he railed about decorated combat veteran Lt. Col.</h6>
                    </div>
                    <div>
                    <img className="main__card__img2" src="https://c8.alamy.com/comp/F5HY1D/buttons-multimedia-play-pause-stop-concept-F5HY1D.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="main__card__content3">
                <img className="main__card__img" src="https://pbs.twimg.com/profile_images/1052233810375512065/mkVpI6Np_400x400.jpg" alt="" />
                <div className="main__card__right">
                    <h4>Blake Scott</h4>

                    <div className="main__card__button">
                         <h6>Trump attacks prosecutors, judge in twitter tirade defending</h6>
                         <h6>Roger Stone</h6>
                    </div>
                </div>
            </div>
            <div className="main__card__icons">
                <div className="main__card__icon1">
                    <ShareIcon />
                    <h6 className="main__card__icon1__space"><span><ReplyIcon /></span>12</h6>
                    <h6><span><AutorenewIcon /></span>4</h6>
                </div>
                <div className="main__card__icon2">
                    <h6 className="main__card__icon1__space"><span><FavoriteIcon className="main__card__icon1__love"/></span>356</h6>
                    <h6><span><ThumbDownIcon /></span>3</h6>
                </div>
            </div>
          </Card>
        </div>
    )
}

export default Main
