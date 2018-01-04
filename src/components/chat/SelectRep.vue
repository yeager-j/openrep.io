<template>
    <button @click="populate" class="btn btn-info">Populate</button>
</template>

<script>
    import { db } from '../../firebase';

    export default {
        name: "select-rep",
        methods: {
            populate() {
                let reps = [
                    {

                    }
                ]
            }
        },
        firebase: {
            reps: db.ref('reps')
        }
    }
</script>

<style scoped>

</style>
