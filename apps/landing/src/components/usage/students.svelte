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
        { title: "Instructor tells something important", time: "09:30:31 am" },
        { title: "Pause video", time: "09:30:31 am" },
        { title: "Open notes", time: "9:30:35 am" },
        { title: "Click on a few buttons and note down", time: "9:31:00 am" },
        { title: "Loosing your flow and rewinding", time: "9:31:00 am" },
    ];

    const witht = [
        { title: "Instructor tells something important", time: "09:30:31 am" },
        { title: "Open the global launcher (Ctrl+Space)", time: "09:30:31 am" },
        {
            title: "Spend 5 seconds noting down the points",
            time: "09:30:35 am",
        },
        { title: "Clicking on save", time: "09:30:35 am" },
        { title: "Continue without loosing your flow", time: "09:30:35 am" },
    ];
</script>

<div
    class="grid md:grid-cols-2  place-items-center grid-cols-1 mt-5 w-full h-full"
>
    <div class="flex flex-col items-center gap-4 md:w-[40vw] w-full">
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
        <p>The cycle repeats again and again... 😧</p>
    </div>
    <div class="flex flex-col items-center gap-4 md:w-[40vw] w-full mt-5">
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
        <p>Continue without loosing your flow 🤞</p>
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
