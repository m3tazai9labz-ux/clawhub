import type { Id } from '../_generated/dataModel'
import type { ActionCtx } from '../_generated/server'

export type GitHubSoulBackupContext = any

export function isGitHubSoulBackupConfigured() {
  return false
}

export async function getGitHubSoulBackupContext(): Promise<GitHubSoulBackupContext> {
  throw new Error('Disabled')
}

export async function fetchGitHubSoulMeta(
  context: GitHubSoulBackupContext,
  ownerHandle: string,
  slug: string,
): Promise<any> {
    return null
}

export async function backupSoulToGitHub(
  ctx: ActionCtx,
  params: any,
  context?: GitHubSoulBackupContext,
) {
    console.log("Skipping soul backup (local node disabled)")
}
