<script>
    import Button from "./button.svelte";
    import Developers from "./developers.svelte";
    import Students from "./students.svelte";
    let page = "students"
</script>

<div class="w-full flex items-center justify-center flex-col gap-6 p-8">
    <h1 class="text-base rounded-xl font-bold bg-dark-blue4 border border-dark-blue10 text-dark-blue11 px-4 py-1">
        Use case
    </h1>
    <h1 class="md:text-5xl text-4xl font-extrabold text-center">
        A few examples for using Twidge in your <br />
        day-to-day life.
    </h1>
    <div class="w-full h-fit items-center justify-center bg-dark-purple1 flex">
        <div class="flex items-center justify-center flex-col gap-2 p-4 w-full md:w-[calc(70vw)]">
            <div class="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 w-full items-center justify-center">
                <Button active={page == "students"} onClick={()=>page="students"} text="Students" />
                <Button active={page == "developers"} onClick={()=>page="developers"} text="Developers & Designers" />
            </div>
            {#if page == "students"}
                <Students/>
            {:else if page == "developers"}
                <Developers />
            {/if}
        </div>
    </div>
</div>
