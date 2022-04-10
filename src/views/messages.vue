
<template>
    <div>
        <div class="messageBox">
            <div class="message" v-for="message in messages">
                <div class="userPhoto"></div>
                <div class="userInfo">
                    <div class="dateSend placeholder-item"> {{ message.sendDate }} </div>
                    <div class="lastMessage placeholder-item"> {{ message.lastMessage }} </div>
                </div>
                <div class="readIndicator"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messages: [
                    {id: 1, friendName: 'Анатолий', lastMessage: '43', sendDate: '10:24'},
                    {id: 2, friendName: 'Андрей', lastMessage: '2134', sendDate: '15:59'},
                    {id: 3, friendName: 'Алексей', lastMessage: '1124', sendDate: '01:33'},
                ]
            }
        },
        methods: {

        }
    }
</script>

<style>
    .userPhoto{
        width: 10vh;
        height: 10vh;
        border: 3px solid darkgray;
        background: transparent;
        border-radius: 50%;
        position: relative;
    }   
    .lastMessage{
        width: 45vw;
        height: 7vh;
        background: transparent;
        border: 3px solid darkgray;
        position: relative;
    }
    .messageBox{
        margin: 0 auto;
        width: 60vw;
        height: 100vh;
        position: relative;
        background: gainsboro;
    }
    .message{
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: space-evenly;
        position: relative;
        align-items: center;
    }
    .readIndicator{
        width: 0.4vw;
        height: 0.4vw;
        border: 3px solid darkgray;
        background: transparent;
        position: relative;
        border-radius: 50%;
    }
    .userInfo{
        display: flex;
        flex-flow: column;
        position: relative;
        align-items: flex-start;
    }
    .dateSend{
        width: 12vw;
        height: 3vh;
        border: 3px solid darkgray;
        position: relative;
        background: transparent;
    }
    .placeholder-item::before {
        content: '';
        display: block;
        position: absolute;
        left: -30px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
    @keyframes load {
        from {
            left: -30px;
        }
        to {
            left: 80%;
        }
    }
</style>