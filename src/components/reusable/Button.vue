<template>
    <button
        :type="type"
        class="px-6 py-2 font-semibold text-white rounded-md hover:opacity-95 focus:outline-none"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: "button",
        },
    },
};
</script>
