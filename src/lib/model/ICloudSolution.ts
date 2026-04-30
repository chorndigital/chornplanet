
// ICloudSolution.ts

export interface ICloudSolution {
    title: string;
    descriptions: ISection[];
    benefits: string[],
    sections: ISection[];
    migrationProcess: IMigrationProcess[];
}

// IMigrationProcess.ts
export interface IMigrationProcess {
    phase: string,
    description: string,
    outcomes: string[],
}

// ISection.ts
export interface ISection {
    title: string,
    span: string,
    description: string,
    features?: string[]
}