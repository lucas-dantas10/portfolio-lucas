<template>
    <back-to-top class="btn-style">
        <font-awesome-icon class="icons" :icon="{ prefix: 'fas', iconName: 'arrow-up' }"/>
    </back-to-top>
</template>

<style scoped>

.btn-style {
    border-radius: 30px;
    border: 1px solid var(--violet);
    background-color: var(--violet);
    padding: 0.5rem 1rem;
}
.icons {
    font-size: 30px;
    color: var(--white);
}
</style>