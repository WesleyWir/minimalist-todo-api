export const ProjectStatus: {
    TODO: 'todo'
    IN_PROGRESS: 'in_progress'
    COMPLETE: 'complete'
} = {
    TODO: 'todo',
    IN_PROGRESS: 'in_progress',
    COMPLETE: 'complete'
}

export type ProjectStatus = typeof ProjectStatus[keyof typeof ProjectStatus]