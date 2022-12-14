/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "db.migrate_and_populate", input: never, result: null } | 
        { key: "notes.get", input: GetNotesArgs, result: Array<Notes> } | 
        { key: "openInDefault", input: string, result: null } | 
        { key: "settings.get", input: SettingsGetArgs, result: Settings | null } | 
        { key: "spaces.get", input: never, result: Array<Spaces> } | 
        { key: "version", input: never, result: string } | 
        { key: "whiteboard.items.get", input: GetArgs, result: Array<WhiteboardItem> },
    mutations: 
        { key: "notes.create", input: CreateNoteArgs, result: Notes } | 
        { key: "notes.edit", input: EditNotesArgs, result: Notes } | 
        { key: "settings.set", input: SettingsSetArgs, result: Settings } | 
        { key: "spaces.create", input: never, result: Spaces } | 
        { key: "whiteboard.items.create", input: ItemCreateArgs, result: null } | 
        { key: "whiteboard.items.move", input: MoveArgs, result: null } | 
        { key: "whiteboard.items.resize", input: ResizeArgs, result: null },
    subscriptions: never
};

export interface CreateNoteArgs { space_id: number }

export interface EditNotesArgs { id: number, title: string, content: string }

export interface GetArgs { whiteboard_id: number }

export interface GetNotesArgs { space_id: number }

export interface ItemCreateArgs { type: string, data: string, whiteboard_id: number }

export interface MoveArgs { id: number, x_pos: string, y_pos: string }

export interface Notes { id: number, title: string, content: string, createdAt: string, updatedAt: string, spacesId: number }

export interface ResizeArgs { id: number, width: string, height: string }

export interface Settings { id: number, name: string, value: string, createdAt: string, updatedAt: string }

export interface SettingsGetArgs { key: string }

export interface SettingsSetArgs { key: string, value: string }

export interface Spaces { id: number, name: string, icon: string, color: string }

export interface WhiteboardItem { id: number, item_type: string, value: string, posX: string, posY: string, width: string, height: string, createdAt: string, updatedAt: string, whiteboardId: number }
