<script lang="ts">
    export let text: string;
    export let onClick: () => void;
    export let active: boolean;
</script>

<button on:click={onClick} class={`px-4 py-2 ${active  ? "bg-dark-purple1" :"bg-dark-purple5 hover:bg-dark-purple3"}  transition-all duration-150 border border-dark-purple7 text-dark-purple11 rounded-xl`}>
    {text}
</button>