interface Space {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
}

type Spaces = Space[];

export default Spaces;
export { Space }