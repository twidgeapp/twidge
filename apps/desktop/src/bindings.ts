/* eslint-disable */
// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: 
        { key: "misc.run_migrations", input: never, result: null } | 
        { key: "settings.get", input: GetSettingsArgs, result: Array<Settings> } | 
        { key: "version", input: never, result: string },
    mutations: 
        { key: "settings.set", input: SetSettingsArgs, result: null },
    subscriptions: never
};

export interface GetSettingsArgs { key: string }

export interface SetSettingsArgs { key: string, value: string }

export interface Settings { id: number, key: string, value: string }
