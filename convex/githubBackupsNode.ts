import { v } from 'convex/values'
import { internalAction } from './_generated/server'

export type GitHubBackupSyncStats = any
export type SyncGitHubBackupsInternalArgs = any
export type SyncGitHubBackupsInternalResult = any

export const backupSkillForPublishInternal = internalAction({
  args: {
    slug: v.string(),
    version: v.string(),
    displayName: v.string(),
    ownerHandle: v.string(),
    files: v.array(
      v.object({
        path: v.string(),
        size: v.number(),
        storageId: v.id('_storage'),
        sha256: v.string(),
        contentType: v.optional(v.string()),
      }),
    ),
    publishedAt: v.number(),
  },
  handler: async (ctx, args) => {
    return { skipped: true }
  },
})

export const syncGitHubBackupsInternal = internalAction({
  args: {
    dryRun: v.optional(v.boolean()),
    batchSize: v.optional(v.number()),
    maxBatches: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    return {
        stats: {
            skillsScanned: 0,
            skillsSkipped: 0,
            skillsBackedUp: 0,
            skillsMissingVersion: 0,
            skillsMissingOwner: 0,
            errors: 0,
        },
        cursor: null,
        isDone: true
    }
  },
})
