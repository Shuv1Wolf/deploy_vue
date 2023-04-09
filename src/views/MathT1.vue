<script>
    import axios from 'axios'
    
    axios.get('http://85.192.41.43/API/math/theory/1?format=json')
    .then(function (response) {
        set(response.data.theory[0]);
    })
    
    export default {
        data() {
            return {
            title: '',
            descript: ''
            }
        },
        methods: {
            increment(set) {
                this.title = set.title;
            }
        }
    }
</script>


<template >
    <h1 class="heading-1">Математика</h1>
    <h2 class="heading-2" >{{ this.set }}</h2>
    <div class="theory">
        <p class="diskript"></p>
        <div class="examples">
            <div class="example">
                <img src="@/img/1carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/4carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <p class="answer">5</p>
            </div>
            <div class="example">
                <img src="@/img/2carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/1carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <p class="answer">3</p>
            </div>
            <div class="example">
                <img src="@/img/6carrot.svg" alt="" class="number-visual">
                <img src="@/img/plus.svg" alt="" class="plus">
                <img src="@/img/2carrot.svg" alt="" class="number-visual">
                <img src="@/img/equal.svg" alt="" class="equal">
                <p class="answer">8</p>
            </div>
            <router-link to="/math/practice1"><img src="@/img/next.svg" alt="" class="next"></router-link>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
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
        width: 100%;
        height: 70px;
        background: var(--green);
        box-shadow: 0px 5px 10px rgba(24, 46, 79, 0.11);
        border-radius: 15px;
        border: none;
        transition: 0.3s;
    }
    .next:hover{
        background: var(--green-hover);
    }
</style>