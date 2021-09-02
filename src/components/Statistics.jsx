import React, { useContext } from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AddCommentOutlinedIcon from '@material-ui/icons/AddCommentOutlined';
import ShowChartOutlinedIcon from '@material-ui/icons/ShowChartOutlined';
import './statistics.scss'
import { AppDetailsContext } from '../contexts/AppDetailsContext';

const Statistics = () => {
    const {appDetails} = useContext(AppDetailsContext)
    const {
            totalViews,
            totalLikes,
            totalComments,
            totalEngagement,
            engagementRate} = appDetails;
    return (
        <>
            <div className="statistics__header">
                <span className="statistics__header__first">Statistics</span>
                <span>Overall Data</span>
            </div>
            <div className="statistics__body">
                <div className="statistics__body__item">
                    <div className="statistics__body__item__icon">
                        <VisibilityOutlinedIcon  style={{fontSize: '25px',color:'rgb(109, 127, 208)'}}/>
                    </div>
                    <div className="statistics__body__item__count">
                        <div className="title">Total Views</div>
                        <div className="count">
                           {totalViews}
                        </div>

                    </div>


                </div>
                <div className="statistics__body__item">
                    <div className="statistics__body__item__icon">
                       <ThumbUpAltOutlinedIcon  style={{fontSize: '25px',color:'rgb(188, 104, 197)'}}/>
                    </div>
                    <div className="statistics__body__item__count">
                        <div className="title">Total Likes</div>
                        <div className="count">
                            {totalLikes}
                        </div>

                    </div>


                </div>
                <div className="statistics__body__item">
                    <div className="statistics__body__item__icon">
                        <AddCommentOutlinedIcon  
                            style={{fontSize: '25px',color:'rgb(245, 124, 73)'}}
                        />
                    </div>
                    <div className="statistics__body__item__count">
                        <div className="title">Total Comments</div>
                        <div className="count">
                             {totalComments}
                        </div>

                    </div>


                </div>
                <div className="statistics__body__item">
                    <div className="statistics__body__item__icon">
                        <ChatBubbleOutlineOutlinedIcon 
                            style={{fontSize: '25px',color:'rgb(90, 100, 210)'}}
                        />
                    </div>
                    <div className="statistics__body__item__count">
                        <div className="title">Total Engagement</div>
                        <div className="count">
                             {totalEngagement}
                        </div>

                    </div>


                </div>
                <div className="statistics__body__item">
                    <div className="statistics__body__item__icon">
                        <ShowChartOutlinedIcon     
                            style={{fontSize: '25px',color:'rgb(138, 210, 134)'}}
                        />
                    </div>
                    <div className="statistics__body__item__count">
                        <div className="title">Engagement Rate</div>
                        <div className="count">
                             {engagementRate}
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Statistics
