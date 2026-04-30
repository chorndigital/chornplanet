# Automation Policy

This policy governs ChornPlanet automation, especially AI search, digest generation, image/video creation, scheduled content, and external posting.

## Automation phases

### Phase 1: Draft automation

Allowed:

- generate draft content ideas
- summarize candidate source material
- create image/video prompt drafts
- create posting schedules
- create product post drafts
- create analytics review drafts

Not allowed:

- external auto-posting
- marketplace publication
- customer messaging
- payment/order mutation

### Phase 2: Reviewed automation

Allowed only after approval:

- scheduled internal draft creation
- reviewed CMS draft creation
- reviewed marketplace draft creation
- reviewed TikTok draft creation

### Phase 3: Controlled publishing automation

Allowed only after explicit approval and guardrails:

- publish to approved channels
- publish only approved content types
- publish only within rate limits
- log every automated action
- support rollback or removal process

## Daily media automation direction

Future daily content pipeline:

```text
AI search daily content
  ↓
source review
  ↓
digest
  ↓
ChornPlanet editorial angle
  ↓
image/video prompt
  ↓
draft post
  ↓
review / approval
  ↓
publish
  ↓
analytics review
```

## Safety rules

- Do not auto-publish factual claims without review.
- Do not create misleading AI-generated news images.
- Do not publish copyrighted source content verbatim.
- Do not post to external platforms without approval.
- Do not bypass marketplace or platform policies.
- Do not send customer messages without approval.

## Logging rule

Future automation should log:

- source inputs
- generated draft
- approval status
- publishing target
- publishing time
- responsible agent/workflow
- analytics feedback when available
