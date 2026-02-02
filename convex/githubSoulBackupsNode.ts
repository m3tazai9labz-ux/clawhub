import { v } from 'convex/values'
import { internalAction } from './_generated/server'

export type GitHubSoulBackupSyncStats = any
export type SyncGitHubSoulBackupsInternalArgs = any
export type SyncGitHubSoulBackupsInternalResult = any

export const backupSoulForPublishInternal = internalAction({
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

export const syncGitHubSoulBackupsInternal = internalAction({
  args: {
    dryRun: v.optional(v.boolean()),
    batchSize: v.optional(v.number()),
    maxBatches: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    return {
        stats: {
            soulsScanned: 0,
            soulsSkipped: 0,
            soulsBackedUp: 0,
            soulsMissingVersion: 0,
            soulsMissingOwner: 0,
            errors: 0,
        },
        cursor: null,
        isDone: true
    }
  },
})
