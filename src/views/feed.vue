<template>
    <div class="newsFeed">
        <div class="news">
            <div class="newsHeader">
                <div class="groupIcon"></div>
                <div class="groupInfo">
                    <div class="groupName"></div>
                    <div class="postDate"></div>
                </div>
                <div class="more">
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                </div>
            </div>
            <div class="newsContent">
                <div class="content"></div>
            </div>
            <div class="newsFeedback">
                <div class="likes"><a href=""><i class="icon icon-heart"/>123</a></div>
                <div class="dislikes"><a href=""><i class="icon icon-heart-broken"/>321</a></div>
                <div class="comments"><a href=""><i class="icon icon-comment-alt"/>53</a></div>
                <div class="shared"><a href=""><i class="icon icon-export"/>44</a></div>
            </div>
        </div>
        <div class="news">
            <div class="newsHeader">
                <div class="groupIcon"></div>
                <div class="groupInfo">
                    <div class="groupName"></div>
                    <div class="postDate"></div>
                </div>
                <div class="more">
                    <div class="point"></div>
                    <div class="point"></div>
                    <div class="point"></div>
                </div>
            </div>
            <div class="newsContent">
                <div class="content"></div>
            </div>
            <div class="newsFeedback">
                <div class="likes"><a href=""><i class="icon icon-heart"/>123</a></div>
                <div class="dislikes"><a href=""><i class="icon icon-heart-broken"/>321</a></div>
                <div class="comments"><a href=""><i class="icon icon-comment-alt"/>53</a></div>
                <div class="shared"><a href=""><i class="icon icon-export"/>44</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .newsFeed{
        margin: 0 auto;
        width: 50vw;
        height: 100vh;
        position: relative;
        background: gainsboro;
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .news{
        width: 85%;
        height: 45vh;
        margin-top: 3vh;
        border: 3px solid darkgray;
    }
    .newsHeader{
        display: flex;
        align-items: center;
        width: 100%;
        height: 17%;
        border-bottom: 3px solid darkgray;
    }
    .newsContent{
        width: 100%;
        height: 73%;
        display: flex;
        justify-content: center;
    }
    .content{
        width: 70%;
        height: 100%;
        border-left: 3px solid darkgray;
        border-right: 3px solid darkgray;
    }
    .newsFeedback{
        display: flex;
        width: 100%;
        height: 10%;
        border-top: 3px solid darkgray;
    }
    .groupIcon{
        width: 3vw;
        height: 3vw;
        border: 3px solid darkgray;
        border-radius: 50%;
        margin-left: 1vw;
    }
    .groupName{
        width: 100%;
        height: 50%;
        border: 3px solid darkgray;
    }
    .postDate{
        width: 70%;
        height: 50%;
        border: 3px solid darkgray;
    }
    .groupInfo{
        width: 32%;
        height: 2.6vw;
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        margin-left: 1vw;
    }
    .more{
        margin-left: auto;
        margin-right: 1vw;
        display: flex;
        width: 5%;
        justify-content: space-between;
    }
    .point{
        width: 0.2vw;
        height: 0.2vw;
        border: 3px solid darkgray;
        border-radius: 50%;
    }
    .likes, .dislikes, .comments, .shared{
        width: 12%;
        height: 95%;
        border-right: 3px solid darkgray;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .newsFeed a{
        text-decoration: none;
        color: black;
    }
</style>