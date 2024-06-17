export type CrewMember  = "mark-shuttleworth" | "victor-glover" | "douglas-hurley" | "anousheh-ansari"

export interface MemberData {
    name: string,
    position: string,
    description: string,
}

export type Destination = "moon" | "mars" | "europa" | "titan";

export interface DestinationData {
    name: string;
    description: string;
    distance: string;
    time: string;
}

export type Technology = "launch-vehicle" | "spaceport" | "space-capsule";

export interface TechnologyData {
    title: string,
    description: string,
}