<template>
    <div class="guilds">
        <div class="findGuild"></div>
        <div class="guild">
            <div class="guildPhoto"></div>
            <div class="guildLabel">
                <div class="guildName"></div>
                <div class="guildDescription"></div>
            </div>
            <div class="guildInfo">
                <div class="guildMembers"></div>
            </div>
        </div>
    </div>
</template>

<style>
    .guilds{
        display: flex;
        flex-flow: column;
        margin: 0 auto;
        width: 60vw;
        height: 100vh;
        position: relative;
        background: gainsboro;
    }
    .findGuild{
        width: 25%;
        height: 4vh;
        background: transparent;
        border: 3px solid darkgray;
        align-self: flex-end;
    }
    .guild{
        width: 100%;
        height: 20vh;
        display: flex;
        background: transparent;
        border: 3px solid darkgray;
        align-items: center;
        margin-top: 2vh;
    }
    .guildPhoto{
        background: transparent;
        width: 8vw;
        border: 3px solid darkgray;
        height: 8vw;
        border-radius: 50%;    
    }
    .guildLabel{
        display: flex;
        flex-flow: column;
        width: 60%;
        background: transparent;
        height: 6vw;
        margin-left: 1vw;
    }
    .guildName{
        width: 50%;
        height: 25%;
        border: 3px solid darkgray;
        background: transparent;
    }
    .guildDescription{
        background: transparent;
        width: 99%;
        border: 3px solid darkgray;
        height: 75%;  
        align-self: flex-end; 
    }
    .guildInfo{
        width: 20%;
        height: 100%;
        background: transparent;
        border: 3px solid darkgray;
        margin-left: auto;
    }
</style>