/**
 *
 * If `MIGRATED_KEY` is set, it means we already migrated data from localstorage.
 *
 */
declare function migrated(): boolean;
/**
 *
 * By calling this function, we first check if the data already migrated or not,
 * If not, starting to migrating to IndexedDb with proper format that queue manager is understand.
 *
 */
declare function migration(): Promise<boolean>;
export { migration, migrated };
//# sourceMappingURL=migration.d.ts.map