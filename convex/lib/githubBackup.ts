import type { Id } from '../_generated/dataModel'
import type { ActionCtx } from '../_generated/server'

export type GitHubBackupContext = any

export function isGitHubBackupConfigured() {
  return false
}

export async function getGitHubBackupContext(): Promise<GitHubBackupContext> {
  throw new Error('Disabled')
}

export async function fetchGitHubSkillMeta(
  context: GitHubBackupContext,
  ownerHandle: string,
  slug: string,
): Promise<any> {
    return null
}

export async function backupSkillToGitHub(
  ctx: ActionCtx,
  params: any,
  context?: GitHubBackupContext,
) {
    console.log("Skipping backup (local node disabled)")
}
