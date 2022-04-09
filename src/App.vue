<script setup>

</script>

<template>
  <header>
    <a href="/">
      <img src="../public/favicon.ico" class="logo">
    </a>
    <nav>
      <ul>
        <li><a href="/feed"><i class="icon icon-newspaper"/>Новости</a></li>
        <li><a href="/messages"><i class="icon icon-comment"/>Сообщения</a></li>
        <li><a href="/guilds"><i class="icon icon-home"/>Гильдии</a></li>
      </ul>
    </nav>
    <i class="icon icon-user-circle-o"/>
  </header>
  <router-view></router-view>
  <footer></footer>
</template>

<style>
  body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  header{
    background: gray;
    padding: 1vh 0vw 1vh 0vw;
    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav{
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  ul{
    list-style-type: none; 
  }
  .icon-user-circle-o{
    font-size: 2vw;
  }
  .logo{
    width: 4vw;
    height: 4vw;
    min-width: 40px;
    min-height: 40px;
  }
  li{
    text-align: center;
    float: left;
    margin-left: 1.5vw;
  }
  li img{
    width: 1.5vw;
    height: 1.5vw;
    margin-right: 0.5vw;
    min-width: 15px;
    min-height: 15px;
  }
  li a{
    display: block;
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: black;
    font-family: "Roboto", sans-serif;
  }
</style>
