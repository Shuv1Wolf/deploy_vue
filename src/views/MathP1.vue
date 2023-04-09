<script setup>
    
    import {ref} from 'vue'
    import Answer from '@/components/Response.vue'
    const isOpenMenu = ref(false);
    const toggleMenu = () => {
        isOpenMenu.value = !isOpenMenu.value;
    }
</script>


<template >
    <h1 class="heading-1">Математика</h1>
    <h2 class="heading-2">Тема: сложение</h2>
    <div class="practice">
        <p class="diskript">Сложи ну ты понял короче не тупой</p>
        <div class="examples">
            <div class="example">
                <img src="@/img/1carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/4carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <input type="text">
            </div>
            <div class="example">
                <img src="@/img/2carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/1carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <input type="text">
            </div>
            <div class="example">
                <img src="@/img/6carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/2carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <input type="text">
            </div>
            <div class="next" @click="toggleMenu"><img src="@/img/next.svg" alt=""></div>
            
        </div>
    </div>
    <Answer :openSidebar="isOpenMenu"/>
</template>

<style lang="scss" scoped>
    input{
        width: 70px;
        outline: none;
        border: none;
        border-bottom: 4px solid #503838;
        transition: 0.3s;
        font-size: 60px;
        color: #000000;
        background-color: #fafafa;
    }

    input:active{
        border-bottom: 4px solid rgba(14, 0, 0, 1);
    }

    .example{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        & p{
            font-size: 60px;
            color: #000000;
        }
    }
    .plus, .equal{
        width: 50px;
    }

    .number-visual{
        width: 90px;
    }

    @media (max-width: 400px){
        .plus, .equal{
            width: 30px;
        }

        .number-visual{
            width: 60px;
        }
        .example p{
        font-size: 40px;
        }
    }
    .next{
        margin-top: 30px;
        width: 100%;
        height: 70px;
        background: var(--green);
        box-shadow: 0px 5px 10px rgba(24, 46, 79, 0.11);
        border-radius: 15px;
        border: none;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>