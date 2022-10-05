import { Document20Filled, Add12Filled } from "@fluentui/react-icons";
import { useNavigate } from "react-router";
import SpaceContext from "../ctx";
import { useContext } from "react";
import rspc from "@twidge/core/query";
import { useParams } from "react-router";
import { Notes as TNotes } from "@twidge/utils/bindings";

const Notes = () => {
    const params = useParams();
    const notesQuery = rspc.useQuery([
        "notes.get",
        { space_id: parseInt(params.id!) },
    ]);
    const createNoteMutation = rspc.useMutation("notes.create");

    return (
        <div className="flex flex-col gap-2">
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
                                space_id: parseInt(params.id!),
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
                    <div className="flex gap-2 items-center px-4 py-2 mx-2 justify-between hover:bg-dark-gray2 rounded-xl transition-all duration">
                        <div className="flex gap-2 pl-4 text-dark-blue9">
                            <Document20Filled />
                            <div className="flex flex-col gap-1">
                                <div className="text-white text-sm font-normal">
                                    {note.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notes;
