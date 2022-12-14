import { FullRepositoryPermissions } from "./full.repository.permissions";
import { NullableSimpleUser } from "./nullable.simple.user";
import { NullableLicenseSimple } from "./nullable.license.simple";
import { SearchResultTextMatches } from "./search.result.text.matches";

export interface RespositorySearchItem {
    id: number;
    nodeId: string;
    name: string;
    fullName: string;
    owner: NullableSimpleUser;
    _private: boolean;
    htmlUrl: string;
    description: string;
    fork: boolean;
    url: string;
    createdAt: Date;
    updatedAt: Date;
    pushedAt: Date;
    homepage: string;
    size: number;
    stargazersCount: number;
    watchersCount: number;
    language: string;
    forksCount: number;
    openIssuesCount: number;
    masterBranch?: string;
    defaultBranch: string;
    score: number;
    forksUrl: string;
    keysUrl: string;
    collaboratorsUrl: string;
    teamsUrl: string;
    hooksUrl: string;
    issueEventsUrl: string;
    eventsUrl: string;
    assigneesUrl: string;
    branchesUrl: string;
    tagsUrl: string;
    blobsUrl: string;
    gitTagsUrl: string;
    gitRefsUrl: string;
    treesUrl: string;
    statusesUrl: string;
    languagesUrl: string;
    stargazersUrl: string;
    contributorsUrl: string;
    subscribersUrl: string;
    subscriptionUrl: string;
    commitsUrl: string;
    gitCommitsUrl: string;
    commentsUrl: string;
    issueCommentUrl: string;
    contentsUrl: string;
    compareUrl: string;
    mergesUrl: string;
    archiveUrl: string;
    downloadsUrl: string;
    issuesUrl: string;
    pullsUrl: string;
    milestonesUrl: string;
    notificationsUrl: string;
    labelsUrl: string;
    releasesUrl: string;
    deploymentsUrl: string;
    gitUrl: string;
    sshUrl: string;
    cloneUrl: string;
    svnUrl: string;
    forks: number;
    openIssues: number;
    watchers: number;
    topics?: Array<string>;
    mirrorUrl: string;
    hasIssues: boolean;
    hasProjects: boolean;
    hasPages: boolean;
    hasWiki: boolean;
    hasDownloads: boolean;
    hasDiscussions?: boolean;
    archived: boolean;
    /**
     * Returns whether or not this repository disabled.
     */
    disabled: boolean;
    /**
     * The repository visibility: public, private, or internal.
     */
    visibility?: string;
    license: NullableLicenseSimple;
    permissions?: FullRepositoryPermissions;
    textMatches?: SearchResultTextMatches;
    tempCloneToken?: string;
    allowMergeCommit?: boolean;
    allowSquashMerge?: boolean;
    allowRebaseMerge?: boolean;
    allowAutoMerge?: boolean;
    deleteBranchOnMerge?: boolean;
    allowForking?: boolean;
    isTemplate?: boolean;
    webCommitSignoffRequired?: boolean;
  }