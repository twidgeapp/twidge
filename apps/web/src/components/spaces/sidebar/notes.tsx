import { Document20Filled, Add12Filled } from "@fluentui/react-icons";
import rspc from "@twidge/core/query";
import { useParams } from "react-router";
import { Notes as TNotes } from "@twidge/utils/bindings";
import { Link } from "@twidge/core/router";
import { useEffect } from "react";
import { useDispatch } from "@twidge/core/state";
import { setNotes } from "@twidge/core/state/space/notes";

const Notes = () => {
    const params: any = useParams();

    const notesQuery = rspc.useQuery([
        "notes.get",
        { space_id: parseInt(params.id) },
    ]);
    const createNoteMutation = rspc.useMutation("notes.create");
    const dispatch = useDispatch();

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dispatch(setNotes(notesQuery.data));
    }, [notesQuery.data]);

    useEffect(() => {
        document.getElementById("SIDEBAR-NOTES")?.addEventListener("refetch", () => {
            notesQuery.refetch();
        })
    }, [])

    return (
        <div id="SIDEBAR-NOTES" className="flex flex-col gap-2">
            <div className="flex gap-2 items-center px-4 pt-2 mx-2 justify-between">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1">
                        <div className="text-white text-sm font-normal">
                            Notes
                        </div>
                    </div>
                </div>
                <Add12Filled
                    onClick={() => {
                        createNoteMutation.mutate(
                            {
                                space_id: parseInt(params.id),
                            },
                            {
                                onSuccess: () => {
                                    notesQuery.refetch();
                                },
                            }
                        );
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                {(notesQuery.data as TNotes[])?.map((note) => (
                    <Link
                        key={note.id}
                        to={`/spaces/${params.id}/notes/${note.id}`}
                    >
                        <div className="flex gap-2 items-center px-4 py-2 mx-2 justify-between hover:bg-dark-gray2 rounded-xl transition-all duration w-60">
                            <div className="flex gap-2 pl-4 text-dark-blue9">
                                <Document20Filled />
                                <div className="flex flex-col gap-1">
                                    <div className="text-white text-sm font-normal truncate">
                                        {note.title.length > 18
                                            ? note.title.substring(0, 18) + "..."
                                            : note.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Notes;
