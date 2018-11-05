<template>
    <div class="modal">
        <p>This is a modal</p>
        <button @click="closeModal">Close modal</button>
    </div>
</template>

<script>
    export default {
        name: 'modal',
        methods: {
            closeModal() {
                this.$emit('closeModal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 100px;
        border: 1px solid gray;
        border-radius: 3px;
    }
</style>
