<script>
    import {
        Timeline,
        TimelineItem,
        TimelineSeparator,
        TimelineDot,
        TimelineConnector,
        TimelineContent,
        TimelineOppositeContent,
    } from "svelte-vertical-timeline";

    const without = [
        { title: "Client asks for a change", time: "09:30:31 am" },
        { title: "Open notes and starts writing", time: "09:30:31 am" },
        { title: "Starts listing it down", time: "09:30:10 am" },
        { title: "Client lists another bug", time: "9:30:35 am" },
        { title: "Still noting down the previous bug", time: "9:31:00 am" },
        { title: "Asks client to list all the bugs again", time: "9:31:00 am" },
    ];

    const witht = [
        { title: "Client asks for a change", time: "09:30:31 am" },
        { title: "Take a screenshot of the bug", time: "09:30:31 am" },
        { title: "Open the global launcher (Ctrl+Space)", time: "09:30:31 am" },
        { title: "Click on insert from clipboard", time: "09:30:35 am" },
        { title: "Clicking on save", time: "09:30:35 am" },
        { title: "Continue without loosing your flow", time: "09:30:35 am" },
    ];
</script>

<div
    class="grid md:grid-cols-2  place-items-center grid-cols-1 mt-5 w-full h-full"
>
    <div class="flex flex-col items-center gap-4 w-full md:w-[40vw]">
        <h1 class="text-2xl md:text-3xl">Without Twidge</h1>
        <Timeline position="left">
            {#each without as option}
                <TimelineItem>
                    <TimelineOppositeContent slot="opposite-content">
                        <p>{option.time}</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot style={"background-color: #7CD5E2;"} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>{option.title}</h3>
                    </TimelineContent>
                </TimelineItem>
            {/each}
        </Timeline>
        <p class="text-center">
            The developer feels overwhelmed <br />and starts loosing flow, the
            client seems to be getting impatient.
        </p>
    </div>
    <div class="flex flex-col items-center gap-4 w-full md:w-[40vw]">
        <h1 class="text-2xl md:text-3xl">With Twidge</h1>

        <Timeline position="left">
            {#each witht as option}
                <TimelineItem>
                    <TimelineOppositeContent slot="opposite-content">
                        <p>{option.time}</p>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot style={"background-color: #7CD5E2;"} />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <h3>{option.title}</h3>
                    </TimelineContent>
                </TimelineItem>
            {/each}
        </Timeline>
        <p class="text-center">
            The developer feels in control and continues working <br /> without loosing
            focus, the client is happy.
        </p>
    </div>
</div>

<style>
    h3 {
        letter-spacing: 1.5px;
        margin: 0;
        padding: 0;
    }

    p {
        letter-spacing: 1.5px;
        margin: 0;
        color: grey;
    }
</style>
