import { useEffect } from "react";

const useClickOutside = (target_ref: any, callback: any) => {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (!target_ref.current || target_ref.current.contains(e.target))
                return;

            callback(e);
        };

        document.addEventListener("mousedown", onClick);

        return () => {
            document.removeEventListener("mousedown", onClick);
        };
    }, []);
};

export default useClickOutside;
