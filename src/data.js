import moment from "moment";

 const data = {
    posts:[
        {
            id:1,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio consequuntur possimus, reprehenderit",
            image:'',
            date:moment(new Date(2021, 9, 20)).format('DD-MMM-YYYY'), //year,month,data
            type:"Story",
            costPerView:34,
            costPerEngagement:34,
            views:34,
            likes:34,
            comments:34,
            linkClicks:34
        },
        {
            id:2,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio consequuntur possimus, reprehenderit",
            image:'',
            date:moment(new Date(2021, 9, 20)).format('DD-MMM-YYYY'),
            type:"Static",
            costPerView:34,
            costPerEngagement:34,
            views:34,
            likes:34,
            comments:34,
            linkClicks:34
        },
        {
            id:3,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio consequuntur possimus, reprehenderit",
            image:'',
            date:moment(new Date(2021, 9, 20)).format('DD-MMM-YYYY'),
            type:"IGTV",
            costPerView:34,
            costPerEngagement:34,
            views:34,
            likes:34,
            comments:34,
            linkClicks:34
        },
        {
            id:4,
            title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio consequuntur possimus, reprehenderit",
            image:'',
            date:moment(new Date(2021, 9, 20)).format('DD-MMM-YYYY'),
            type:"Reels",
            costPerView:34,
            costPerEngagement:34,
            views:34,
            likes:34,
            comments:34,
            linkClicks:34
        }

    ],
    socialmedia:{
        instagram:{
            name:"instagram",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",
            mesageCount:150,
            totalEngagementScore:6.04,
            rating:'Excellent',
            totalViews:79,
            totalLikes:67,
            totalComments:45,
            totalEngagement:56,
            engagementRate:55
        },
        youtube:{
            name:"youtube",
            img:"http://pngimg.com/uploads/youtube/youtube_PNG2.png",
            mesageCount:128,
            totalEngagementScore:7.05,
            rating:'Excellent',
            totalViews:56,
            totalLikes:56,
            totalComments:24,
            totalEngagement:50,
            engagementRate:48
        },
        facebook:{
            name:"facebook",
            img:"https://png.pngtree.com/png-clipart/20190613/original/pngtree-facebook--icon-png-round-corner-png-image_3562016.jpg",
            mesageCount:310,
            totalEngagementScore:8.06,
            rating:'Excellent',
            totalViews:157,
            totalLikes:131,
            totalComments:34,
            totalEngagement:89,
            engagementRate:78
        }
    }

}
export default data;